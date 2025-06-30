import { create } from "zustand";
import { persist } from "zustand/middleware";

/**
 * searchList: 최근 검색어 목록
 * addSearchList: 검색어 등록
 * removeSearchList: 검색어 제거
 */
type SearchStore = {
  searchList: string[];
  addSearchList: (keyword: string) => void;
  removeSearchList: (keyword: string) => void;
};

/**
 * 최근 검색어 목록을 관리하는 zustand store
 */
export const useSearchStore = create<SearchStore>()(
  persist(
    (set, get) => ({
      searchList: [],
      addSearchList: (keyword) => {
        const trimmed = keyword.trim();
        if (!trimmed) return;
        const prevList = get().searchList;

        const newList = prevList.includes(trimmed)
          ? [trimmed, ...prevList.filter((k) => k !== trimmed)]
          : [trimmed, ...prevList];

        // 8까지만 저장이 되야하기때문에 slice 작업 진행
        set({ searchList: newList.slice(0, 8) });
      },
      removeSearchList: (keyword) => {
        const searchList = get().searchList.filter((k) => k !== keyword);
        set({ searchList });
      },
    }),
    {
      name: "search-list",
    }
  )
);
