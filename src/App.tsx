import React, { useEffect, useRef, useState } from 'react';
import { SearchIcon } from './assets/icons';
import { SickNmListProps, searchSickNmListAPI } from './service/searchAPI';
import useSearchQuery from './hooks/useSearchQuery';

export default function App() {
  const searchRef = useRef<HTMLInputElement>(null);
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const [recommendedSickNms, setRecommendedSickNms] = useState<
    SickNmListProps[]
  >([]);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [selectSickNmsIndex, setSelectSickNmsIndex] = useState(-1);

  const debouncedAndThrottledSearchValue = useSearchQuery({
    value: searchValue,
    delay: 100,
  });

  const focusAndOpenPopup = () => {
    setIsOpenPopup(true);
  };

  const saveSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const inputElement = event.currentTarget.elements.namedItem(
      'searchInput'
    ) as HTMLInputElement;

    if (
      inputElement &&
      inputElement.value &&
      inputElement.value !== searchValue
    ) {
      updateSearchHistory(inputElement.value);
      setSearchValue('');
    }
  };

  const directSearch = (directSearchKeyword: string) => {
    setSearchValue(directSearchKeyword);
  };

  const updateSearchHistory = (searchKeyword: string) => {
    if (searchHistory.includes(searchKeyword)) {
      return;
    }
    let updatedHistory = [...searchHistory, searchKeyword];
    if (updatedHistory.length > 5) {
      updatedHistory = updatedHistory.slice(1);
    }

    setSearchHistory(updatedHistory);
    sessionStorage.setItem('recentlyKeywords', JSON.stringify(updatedHistory));
  };

  useEffect(() => {
    const loadedSearchHistory = sessionStorage.getItem('recentlyKeywords');
    if (loadedSearchHistory) {
      setSearchHistory(JSON.parse(loadedSearchHistory));
    }
  }, []);

  const directSearchHistory = (searchKeyword: string) => {
    setSearchValue(searchKeyword);
  };

  useEffect(() => {
    const closePopup = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node) &&
        isOpenPopup
      ) {
        setIsOpenPopup(false);
      }
    };

    document.addEventListener('click', closePopup);

    return () => {
      document.removeEventListener('click', closePopup);
    };
  }, [isOpenPopup]);

  useEffect(() => {
    const getSearchLists = async () => {
      try {
        console.log('calling api');
        const searchList = await searchSickNmListAPI.getSickNmList(
          debouncedAndThrottledSearchValue
        );
        setRecommendedSickNms(searchList);
      } catch (error) {
        console.log(error);
      }
    };
    getSearchLists();
  }, [debouncedAndThrottledSearchValue]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setSelectSickNmsIndex((prevIndex) =>
        prevIndex <= 0 ? recommendedSickNms.length - 1 : prevIndex - 1
      );
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      setSelectSickNmsIndex((prevIndex) =>
        prevIndex >= recommendedSickNms.length - 1 ? 0 : prevIndex + 1
      );
    } else if (event.key === 'Enter') {
      event.preventDefault();
      if (selectSickNmsIndex !== -1) {
        const selectedSickNm = recommendedSickNms[selectSickNmsIndex];
        setSelectSickNmsIndex(-1);
        directSearch(selectedSickNm.sickNm);
      } else if (searchValue) {
        updateSearchHistory(searchValue);
        setSearchValue('');
      } else if (!searchValue) {
        setIsOpenPopup(false);
      }
    }
  };

  return (
    <div className="bg-[#cae9ff] h-screen py-20">
      <div className="text-center text-2xl font-bold whitespace-nowrap">
        <h1 className="mb-1">국내 모든 임상시험 검색하고</h1>
        <h1>온라인으로 참여하기</h1>
      </div>
      <form className="px-5 mt-10" onSubmit={onSubmit}>
        <label htmlFor="search" className="relative">
          <div className="absolute top-1/2 left-[20px] translate-y-[-50%]">
            <SearchIcon width="14px" height="14px" color="#a6afb7" />
          </div>
          <input
            ref={searchRef}
            id="search"
            type="text"
            className="w-full py-4 rounded-full pl-12 text-sm"
            placeholder="질환명을 입력해 주세요."
            onFocus={focusAndOpenPopup}
            value={searchValue}
            onChange={saveSearchValue}
            onKeyDown={handleKeyDown}
          />
          <button className="absolute top-1/2 translate-y-[-50%] right-[10px] w-10 h-10 bg-[#017be8] rounded-full flex justify-center items-center">
            <SearchIcon width={'18px'} height="18px" color="#ffffff" />
          </button>
        </label>
      </form>
      {isOpenPopup && (
        <div className="px-5 mt-2">
          <div className="bg-white rounded-2xl shadow-md py-5">
            {debouncedAndThrottledSearchValue ? (
              <div className="px-5 py-2 flex items-center hover:bg-slate-100 space-x-2 cursor-pointer">
                <div>
                  <SearchIcon width="14px" height="14px" color="#a6afb7" />
                </div>
                <div className="font-semibold text-sm">
                  {debouncedAndThrottledSearchValue}
                </div>
              </div>
            ) : (
              <div className="text-sm">
                <h1 className="text-[#a6afb7] text-xs mt-3 mb-1 px-5">
                  최근 검색어
                </h1>
                <ul className="px-5 py-1">
                  {searchHistory.length === 0 ? (
                    <li className="text-[#b0b8bf]">최근 검색어가 없습니다.</li>
                  ) : (
                    searchHistory.map((searchKeyword) => (
                      <li
                        key={Math.random() + 1}
                        className="px-5 py-2 hover:bg-slate-100"
                      >
                        <button
                          onClick={() => directSearchHistory(searchKeyword)}
                          className="flex items-center space-x-2"
                        >
                          <div>
                            <SearchIcon
                              width="14px"
                              height="14px"
                              color="#a6afb7"
                            />
                          </div>
                          <div className="text-sm">{searchKeyword}</div>
                        </button>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            )}
            <div className="w-full h-[1px] bg-slate-200 mt-2 mb-5"></div>
            {debouncedAndThrottledSearchValue ? (
              <div className="text-sm">
                <h1 className="text-[#a6afb7] text-xs mt-3 mb-1 px-5">
                  추천 검색어
                </h1>
                <ul
                  className="max-h-[200px] overflow-y-auto"
                  tabIndex={0}
                  onKeyDown={handleKeyDown}
                >
                  {recommendedSickNms.length === 0 ? (
                    <li className="px-5 py-2 text-[#6f6f6f]">검색어 없음</li>
                  ) : (
                    recommendedSickNms.map((recommendedSickNm, idx) => (
                      <li
                        key={recommendedSickNm.sickCd}
                        className={`px-5 py-2 hover:bg-slate-100 ${
                          idx === selectSickNmsIndex ? 'bg-slate-100' : ''
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <div>
                            <SearchIcon
                              width="14px"
                              height="14px"
                              color="#a6afb7"
                            />
                          </div>
                          <div className="text-sm">
                            <span className="font-bold">
                              {recommendedSickNm.sickNm.slice(
                                0,
                                debouncedAndThrottledSearchValue.length
                              )}
                            </span>
                            <span>
                              {recommendedSickNm.sickNm.slice(
                                debouncedAndThrottledSearchValue.length,
                                recommendedSickNm.sickNm.length
                              )}
                            </span>
                          </div>
                        </div>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            ) : (
              <div>
                <h1 className="text-[#a6afb7] text-xs mt-3 mb-1 px-5">
                  추천 검색어로 검색해보세요
                </h1>
                <div className="flex items-center space-x-2 text-sm px-5">
                  {RECOMMENDED_KEYWORDS.map((recommendedKeyword) => (
                    <div key={Math.random()}>
                      <button
                        onClick={() => directSearch(recommendedKeyword)}
                        className="mt-2 cursor-pointer rounded-2xl px-3 py-1 bg-[#eef8ff] text-[#5aa0f0] hover:bg-[#e1f3ff]"
                      >
                        {recommendedKeyword}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

const RECOMMENDED_KEYWORDS = ['갑상선', '비만', '소화', '우울', '식도염'];
