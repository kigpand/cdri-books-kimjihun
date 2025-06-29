import type { BookDocumentType } from "../../api/book";
import { useBookmarkStore } from "../../store/bookmarkStore";

/**
 * 찜목록을 다루는 커스텀 훅
 * - zustand + localstorage로 찜목록 관리
 */
export function useBookmark() {
  const bookmarkList = useBookmarkStore((state) => state.bookmark);
  const addBookmark = useBookmarkStore((state) => state.addBookmark);
  const removeBookmark = useBookmarkStore((state) => state.removeBookmark);

  /**
   * 찜목록 관리 이벤트
   * - 존재할시 삭제, 없을시 추가하도록 구현
   */
  const handleToggleBookmarkButton = (bookmark: BookDocumentType) => {
    const exists = bookmarkList.some((item) => item.isbn === bookmark.isbn);
    if (exists) {
      addBookmark(bookmark);
    } else {
      removeBookmark(bookmark);
    }
  };

  return {
    bookmarkList,
    handleToggleBookmarkButton,
  };
}
