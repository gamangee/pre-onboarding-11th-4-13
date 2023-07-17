/* eslint-disable import/no-unresolved */
import { useEffect, useRef, useState } from 'react';
import { SearchIcon } from './assets/icons';

export default function App() {
  const searchRef = useRef<HTMLInputElement>(null);
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);

  const focusAndOpenPopup = () => {
    setIsOpenPopup(true);
  };

  useEffect(() => {
    const closePopup = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node) &&
        isOpenPopup
      ) {
        setIsOpenPopup(false);
      }
    };

    document.addEventListener('click', closePopup);

    return () => {
      document.removeEventListener('click', closePopup);
    };
  }, [isOpenPopup]);

  return (
    <div className="bg-[#cae9ff] h-screen py-20">
      <div className="text-center text-2xl font-bold whitespace-nowrap">
        <h1 className="mb-1">국내 모든 임상시험 검색하고</h1>
        <h1>온라인으로 참여하기</h1>
      </div>
      <form className="px-5 mt-10">
        <label htmlFor="search" className="relative">
          <div className="absolute top-1/2 left-[20px] translate-y-[-50%]">
            <SearchIcon width="14px" height="14px" color="#a6afb7" />
          </div>
          <input
            ref={searchRef}
            id="search"
            type="text"
            className="w-full py-4 rounded-full pl-12 text-sm"
            placeholder="질환명을 입력해 주세요."
            onFocus={focusAndOpenPopup}
          />
          <button className="absolute top-1/2 translate-y-[-50%] right-[10px] w-10 h-10 bg-[#017be8] rounded-full flex justify-center items-center">
            <SearchIcon width={'18px'} height="18px" color="#ffffff" />
          </button>
        </label>
      </form>
      {isOpenPopup && (
        <div className="px-5 mt-2">
          <div className="bg-white rounded-2xl shadow-md py-5">
            <div className="px-5 py-2 flex items-center hover:bg-slate-100 space-x-2 cursor-pointer">
              <div>
                <SearchIcon width="14px" height="14px" color="#a6afb7" />
              </div>
              <div className="font-semibold text-sm">관절염</div>
            </div>
            <div>
              <h1 className="text-[#a6afb7] text-xs mt-3 mb-1 px-5">
                추천 검색어
              </h1>
              <ul>
                <li className="px-5 py-2 hover:bg-slate-100">
                  <div className="flex items-center space-x-2">
                    <div>
                      <SearchIcon width="14px" height="14px" color="#a6afb7" />
                    </div>
                    <div className="font-semibold text-sm">관절염</div>
                  </div>
                </li>
                <li className="px-5 py-2 hover:bg-slate-100">
                  <div className="flex items-center space-x-2">
                    <div>
                      <SearchIcon width="14px" height="14px" color="#a6afb7" />
                    </div>
                    <div className="font-semibold text-sm">관절염</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
