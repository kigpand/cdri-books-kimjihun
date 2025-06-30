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
      removeBookmark(bookmark);
      alert(`${bookmark.title}이(가) 찜목록에서 제거되었습니다`);
    } else {
      addBookmark(bookmark);
      alert(`${bookmark.title}이(가) 찜목록에 등록되었습니다`);
    }
  };

  /**
   * 입력한 bookmark의 값이 현재 저장되어있는지 이벤트
   *
   * @returns 존재 여부. 존재하면 true 없으면 false 반환
   */
  const checkExistsBookmark = (bookmark: BookDocumentType) => {
    return bookmarkList.some((item) => item.isbn === bookmark.isbn);
  };

  return {
    bookmarkList,
    handleToggleBookmarkButton,
    checkExistsBookmark,
  };
}
