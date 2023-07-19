import { useEffect, useState } from 'react';

interface SearchSuggestionsProps {
  value: string;
  delay: number;
}

const useSearchQuery = ({ value, delay }: SearchSuggestionsProps) => {
  const [searchValue, setSearchValue] = useState(value);
  const [isDelay, setIsDelay] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchValue(value);
      setIsDelay(false);
    }, delay);

    if (!isDelay) {
      setIsDelay(true);
      setSearchValue(value);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay, isDelay]);

  return searchValue;
};

export default useSearchQuery;
