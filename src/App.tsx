/* eslint-disable import/no-unresolved */
import { SearchIcon } from './assets/icons';

export default function App() {
  return (
    <div className="bg-[#cae9ff] h-screen py-20">
      <div className="text-center text-2xl font-bold whitespace-nowrap">
        <h1 className="mb-1">국내 모든 임상시험 검색하고</h1>
        <h1>온라인으로 참여하기</h1>
      </div>
      <form className="px-5 my-10">
        <label htmlFor="search" className="relative">
          <div className="absolute top-1/2 left-[20px] translate-y-[-50%]">
            <SearchIcon width="14px" height="14px" color="#a6afb7" />
          </div>
          <input
            id="search"
            type="text"
            className="w-full py-4 rounded-full pl-12 text-sm"
            placeholder="질환명을 입력해 주세요."
          />
          <button className="absolute top-1/2 translate-y-[-50%] right-[10px] w-10 h-10 bg-[#017be8] rounded-full flex justify-center items-center">
            <SearchIcon width={'18px'} height="18px" color="#ffffff" />
          </button>
        </label>
      </form>
    </div>
  );
}
