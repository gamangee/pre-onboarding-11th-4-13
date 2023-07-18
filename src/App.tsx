import { useEffect, useRef, useState } from 'react';
import { SickNmListProps, searchSickNmListAPI } from './service/searchAPI';
import useSearchQuery from './hooks/useSearchQuery';
import useSearchHistory from './hooks/useSearchHistory';
import SearchSickNm from './components/SearchSickNm';
import SearchPopup from './components/SearchPopup';
import useKeyboard from './hooks/useKeyboard';

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const [recommendedSickNms, setRecommendedSickNms] = useState<
    SickNmListProps[]
  >([]);

  const popupRef = useRef<HTMLDivElement>(null);

  const debouncedAndThrottledSearchValue = useSearchQuery({
    value: searchValue,
    delay: 300,
  });

  const { searchHistory, updateSearchHistory } = useSearchHistory();

  const { handleKeyboard, selectIndex, setSelectIndex } = useKeyboard(
    recommendedSickNms,
    isOpenPopup,
    searchHistory,
    setIsOpenPopup,
    setSearchValue
  );

  const handleSearchValue = (searchSickNm: string) => {
    if (searchSickNm.trim().length === 0) return;
    updateSearchHistory(searchSickNm);
    setIsOpenPopup(false);
    if (popupRef.current) popupRef.current.className = 'hidden';
  };

  useEffect(() => {
    const getSearchLists = async () => {
      try {
        setIsLoading(true);
        const searchList = await searchSickNmListAPI.getSickNmList(
          debouncedAndThrottledSearchValue
        );
        setSelectIndex(-1);
        setRecommendedSickNms(searchList.slice(0, KEYWORD_LENGTH));
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getSearchLists();
  }, [debouncedAndThrottledSearchValue, setSelectIndex]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyboard);
    return () => {
      window.removeEventListener('keydown', handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <section className="bg-skyblue h-screen py-20">
      <div className="text-center text-2xl font-bold whitespace-nowrap">
        <h1>
          국내 모든 임상시험 검색하고
          <br />
          온라인으로 참여하기
        </h1>
      </div>
      <div className="px-5 mt-10">
        <SearchSickNm
          setIsOpenPopup={setIsOpenPopup}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          handleSearchValue={handleSearchValue}
        />
        <div ref={popupRef} className={isOpenPopup ? '' : 'opacity-0'}>
          <SearchPopup
            isLoading={isLoading}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            debouncedAndThrottledSearchValue={debouncedAndThrottledSearchValue}
            searchHistory={searchHistory}
            handleSearchValue={handleSearchValue}
            recommendedSickNms={recommendedSickNms}
            selectIndex={selectIndex}
            setSelectIndex={setSelectIndex}
          />
        </div>
      </div>
    </section>
  );
}

export const KEYWORD_LENGTH = 7;
