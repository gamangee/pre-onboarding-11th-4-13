import React from 'react';
import { DeleteBtn, SearchIcon } from '../assets/icons';

interface SearchSickNmProps {
  searchValue: string;
  handleSearchValue: (searchValue: string) => void;
  setIsOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchSickNm({
  setIsOpenPopup,
  searchValue,
  setSearchValue,
  handleSearchValue,
}: SearchSickNmProps) {
  const saveSearchValue = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(event.currentTarget.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSearchValue(searchValue);
  };

  const resetSearchValue = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSearchValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="search" className="relative">
        <div className="absolute top-1/2 left-[20px] translate-y-[-50%]">
          <SearchIcon width="14px" height="14px" color="#a6afb7" />
        </div>
        <input
          id="search"
          type="text"
          className="w-full py-6 rounded-full pl-12 text-sm"
          placeholder="질환명을 입력해 주세요."
          value={searchValue}
          onInput={saveSearchValue}
          onFocus={() => setIsOpenPopup(true)}
          onBlur={() => setIsOpenPopup(false)}
        />
        <button
          onClick={resetSearchValue}
          className={`${
            searchValue
              ? 'pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          } flex justify-center items-center w-5 h-5 rounded-full bg-gray-400 absolute top-0 right-16`}
        >
          <DeleteBtn />
        </button>
        <button className="absolute top-1/2 translate-y-[-50%] right-[10px] w-10 h-10 bg-blue rounded-full flex justify-center items-center">
          <SearchIcon width="18px" height="18px" color="#ffffff" />
        </button>
      </label>
    </form>
  );
}
