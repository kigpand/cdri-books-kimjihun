import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { BookDocumentType } from "../api/book";

/**
 * bookmark -  찜목록에 저장된 책 리스트 배열
 * addBookmark - 찜목록에 책 추가
 * removeBookmark - 찜목록에서 책 제거
 */
type BookmarkStore = {
  bookmark: BookDocumentType[];
  addBookmark: (bookmark: BookDocumentType) => void;
  removeBookmark: (boomark: BookDocumentType) => void;
};

/**
 * 찜목록 관리 zustand
 */
export const useBookmarkStore = create<BookmarkStore>()(
  persist(
    (set, get) => ({
      bookmark: [],
      addBookmark: (bookmark) => {
        set({ bookmark: [...get().bookmark, bookmark] });
      },
      removeBookmark: (bookmark) => {
        const bookmarkList = get().bookmark.filter(
          (mark) => mark.isbn !== bookmark.isbn
        );
        set({ bookmark: bookmarkList });
      },
    }),
    {
      name: "bookmark-list",
    }
  )
);
