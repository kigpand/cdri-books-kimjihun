import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { BookDocumentType } from "../api/book";

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
