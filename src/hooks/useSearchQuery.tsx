import { useEffect, useState } from 'react';

interface SearchSuggestionsProps {
  value: string;
  delay: number;
}

const useSearchQuery = ({ value, delay }: SearchSuggestionsProps) => {
  const [searchValue, setSearchValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return searchValue;
};

export default useSearchQuery;
