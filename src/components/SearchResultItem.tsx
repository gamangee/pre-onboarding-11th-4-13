/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { SearchIcon } from '../assets/icons';

interface SearchResultItemProps {
  searchValue: string;
  resultKeyword: string;
  directSearch: (searchKeyword: string) => void;
  setSelectIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function SearchResultItem({
  searchValue,
  resultKeyword,
  directSearch,
  setSelectIndex,
}: SearchResultItemProps) {
  return (
    <li className="px-5 py-2 hover:bg-lightGrayHover list-none">
      <button
        onClick={() => directSearch(searchValue)}
        onMouseOver={() => setSelectIndex(-1)}
        className="flex items-center space-x-2"
      >
        <div>
          <SearchIcon width="14px" height="14px" color="#a6afb7" />
        </div>
        <div className="text-sm">
          {searchValue && (
            <span className="font-bold">
              {resultKeyword.slice(0, searchValue.length)}
            </span>
          )}
          <span>{resultKeyword.slice(searchValue?.length)}</span>
        </div>
      </button>
    </li>
  );
}
