/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { SearchIcon } from '../assets/icons';

interface SearchResultItemProps {
  searchValue: string;
  resultKeyword: string;
  onKeyboard: boolean;
  fontBold?: boolean;
  directSearch: (searchKeyword: string) => void;
  setSelectIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function SearchResultItem({
  searchValue,
  resultKeyword,
  onKeyboard,
  fontBold,
  directSearch,
  setSelectIndex,
}: SearchResultItemProps) {
  return (
    <li
      className={`px-7 py-2 hover:bg-lightGrayHover list-none ${
        onKeyboard ? 'bg-lightGrayHover' : ''
      }`}
    >
      <button
        type="button"
        onClick={() => directSearch(resultKeyword)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            directSearch(resultKeyword);
          }
        }}
        onMouseOver={() => setSelectIndex(-1)}
        className="flex items-center space-x-2"
      >
        <div>
          <SearchIcon width="14px" height="14px" color="#a6afb7" />
        </div>
        <div className="text-sm">
          {searchValue && (
            <span className={`${fontBold ? 'font-bold' : ''}`}>
              {resultKeyword.slice(0, searchValue.length)}
            </span>
          )}
          <span>{resultKeyword.slice(searchValue?.length)}</span>
        </div>
      </button>
    </li>
  );
}
