import { SearchIcon } from '../assets/icons';
import { SickNmListProps } from '../service/searchAPI';

interface SearchPopupProps {
  isLoading: boolean;
  selectIndex: number;
  searchValue: string;
  debouncedAndThrottledSearchValue: string;
  searchHistory: string[];
  recommendedSickNms: SickNmListProps[];
  handleSearchValue: (searchValue: string) => void;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  setSelectIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function SearchPopup({
  isLoading,
  searchValue,
  setSearchValue,
  debouncedAndThrottledSearchValue,
  searchHistory,
  handleSearchValue,
  recommendedSickNms,
  selectIndex,
  setSelectIndex,
}: SearchPopupProps) {
  const directSearch = (searchKeyword: string) => {
    setSearchValue(searchKeyword);
    handleSearchValue(searchKeyword);
  };

  return (
    <div>
      <div className="px-5 mt-2">
        <div className="bg-white rounded-2xl shadow-lg py-5">
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
                        onClick={() => directSearch(searchKeyword)}
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
              <ul className="max-h-[200px] overflow-y-auto" tabIndex={0}>
                {recommendedSickNms.length === 0 ? (
                  <li className="px-5 py-2 text-[#6f6f6f]">검색어 없음</li>
                ) : (
                  recommendedSickNms.map((recommendedSickNm, idx) => (
                    <li
                      key={recommendedSickNm.sickCd}
                      className={`px-5 py-2 hover:bg-slate-100 ${
                        idx === selectIndex ? 'bg-slate-100' : ''
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
    </div>
  );
}

const RECOMMENDED_KEYWORDS = ['갑상선', '비만', '소화', '우울', '식도염'];
