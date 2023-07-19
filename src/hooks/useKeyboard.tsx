import { useCallback, useState } from 'react';
import { SickNmListProps } from '../service/searchAPI';

const KEYBOARD = {
  enter: 'Enter',
  arrowUp: 'ArrowUp',
  arrowDown: 'ArrowDown',
};

const useKeyboard = (
  recommendedSickNms: SickNmListProps[],
  isOpenPopup: boolean,
  searchHistory: string[],
  handleSearchValue: (searchSickNm: string) => void,
  setIsOpenPopup: React.Dispatch<React.SetStateAction<boolean>>,
  setSearchValue: React.Dispatch<React.SetStateAction<string>>
) => {
  const [selectIndex, setSelectIndex] = useState<number>(-1);

  const handleKeyboard = useCallback(
    (event: KeyboardEvent) => {
      if (!isOpenPopup) return;
      if (event.isComposing) return;

      if (event.key === KEYBOARD.enter) {
        event.preventDefault();
        if (selectIndex >= 0 && selectIndex < recommendedSickNms.length) {
          const selectedItem = recommendedSickNms[selectIndex]?.sickNm;
          if (selectedItem) {
            setSearchValue(selectedItem);
            handleSearchValue(selectedItem);
            setIsOpenPopup(false);
          }
        } else if (
          selectIndex >= recommendedSickNms.length &&
          selectIndex < recommendedSickNms.length + searchHistory.length
        ) {
          const selectedItem =
            searchHistory[selectIndex - recommendedSickNms.length];
          if (selectedItem) {
            setSearchValue(selectedItem);
            handleSearchValue(selectedItem);
            setIsOpenPopup(false);
          }
        }
      }

      if (event.key === KEYBOARD.arrowUp) {
        event.preventDefault();
        setSelectIndex((prevIndex) =>
          prevIndex <= 0
            ? recommendedSickNms.length + searchHistory.length - 1
            : prevIndex - 1
        );
        return;
      }

      if (event.key === KEYBOARD.arrowDown) {
        event.preventDefault();
        setSelectIndex((prevIndex) =>
          prevIndex >= recommendedSickNms.length + searchHistory.length - 1
            ? 0
            : prevIndex + 1
        );
        return;
      }
    },
    [
      recommendedSickNms,
      selectIndex,
      isOpenPopup,
      setSearchValue,
      setIsOpenPopup,
      searchHistory,
    ]
  );

  return { handleKeyboard, selectIndex, setSelectIndex };
};

export default useKeyboard;
