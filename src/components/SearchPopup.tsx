/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import { KEYWORD_LENGTH } from '../App';
import { SickNmListProps } from '../service/searchAPI';
import SearchResultItem from './SearchResultItem';

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

SearchPopup.defaultProps = {
  recommendedSickNms: [],
};

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
    console.log('click');

    setSearchValue(searchKeyword);
    handleSearchValue(searchKeyword);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md py-5 mt-2">
      {searchValue ? (
        <div>
          <SearchResultItem
            searchValue={searchValue}
            resultKeyword={searchValue}
            directSearch={directSearch}
            onKeyboard={false}
            setSelectIndex={setSelectIndex}
          />
          <h1 className="text-lightGray text-xs mt-3 mb-1 px-7">추천 검색어</h1>
          {isLoading ? (
            <h2 className="text-sm text-darkGray px-7">검색중</h2>
          ) : recommendedSickNms.length > 0 ? (
            <ul>
              {recommendedSickNms.map(({ sickCd, sickNm }, index) => (
                <SearchResultItem
                  key={sickCd}
                  searchValue={debouncedAndThrottledSearchValue}
                  resultKeyword={sickNm}
                  directSearch={directSearch}
                  onKeyboard={selectIndex === index}
                  setSelectIndex={setSelectIndex}
                />
              ))}
            </ul>
          ) : (
            <h2 className="text-sm text-lightGray px-7 mt-3">검색어 없음</h2>
          )}
        </div>
      ) : (
        <div>
          <div>
            <h1 className="text-lightGray text-xs mb-1 px-7">최근 검색어</h1>
            <div>
              {searchHistory.length ? (
                <ul>
                  {searchHistory
                    .slice(0, KEYWORD_LENGTH)
                    .map((searchValue, index) => (
                      <SearchResultItem
                        key={searchValue + index}
                        searchValue={searchValue}
                        resultKeyword={searchValue}
                        directSearch={directSearch}
                        onKeyboard={selectIndex === index}
                        setSelectIndex={setSelectIndex}
                      />
                    ))}
                </ul>
              ) : (
                <div>
                  <h2 className="text-sm text-lightGray px-7 mt-3">
                    최근 검색어가 없습니다
                  </h2>
                  <div className="w-full h-[1px] bg-borderGray my-5" />
                </div>
              )}
            </div>
          </div>
          <div>
            <h1 className="text-lightGray text-xs mt-3 mb-1 px-7">
              추천 검색어로 검색해보세요
            </h1>
            <div className="flex items-center space-x-2 text-sm px-7 z-10">
              {RECOMMENDED_KEYWORDS.map(({ id, keyword }) => (
                <div key={id}>
                  <button
                    onClick={() => directSearch(keyword)}
                    className="mt-2 cursor-pointer rounded-2xl px-3 py-1 bg-lightblue text-blue hover:bg-lightblueHover"
                  >
                    {keyword}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const RECOMMENDED_KEYWORDS = [
  { id: 0, keyword: '갑상선' },
  { id: 1, keyword: '비만' },
  { id: 2, keyword: '소화' },
  { id: 3, keyword: '우울' },
  { id: 4, keyword: '식도염' },
];
