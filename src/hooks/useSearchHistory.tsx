import { useEffect, useState } from 'react';

export const SEARCH_HISTORY_KEY = 'search_history';

const useSearchHistory = () => {
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  const updateSearchHistory = (searchValue: string) => {
    setSearchHistory((prevSearchValue) => {
      if (prevSearchValue[0] === searchValue) return prevSearchValue;

      if (prevSearchValue.includes(searchValue)) {
        prevSearchValue.splice(prevSearchValue.indexOf(searchValue), 1);
      }

      const newSearchValue = [searchValue, ...prevSearchValue].slice(0, 5);

      sessionStorage.setItem(
        SEARCH_HISTORY_KEY,
        JSON.stringify(newSearchValue)
      );
      return newSearchValue;
    });
  };

  useEffect(() => {
    const hasSearchHistory = sessionStorage.getItem(SEARCH_HISTORY_KEY);
    if (hasSearchHistory) setSearchHistory(JSON.parse(hasSearchHistory));
  }, []);

  return { searchHistory, updateSearchHistory };
};

export default useSearchHistory;
