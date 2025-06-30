import { useSearchStore } from "../../store/searchStore";

/**
 * 검색어 리스트를 다루는 커스텀 훅
 * - zustand + localstorage로 검색어 리스트 관리
 * - 최대 8개까지 저장
 * - searchList: 검색어 목록
 * - handleSearch: 검색어 등록 메소드
 * - handleRemoveSearchKeyword: 검색어 제거 메소드
 */
export function useSearchList() {
  const searchList = useSearchStore((state) => state.searchList);
  const addSearchList = useSearchStore((state) => state.addSearchList);
  const removeSearchList = useSearchStore((state) => state.removeSearchList);

  /**
   * 검색 실행 및 검색어 리스트 갱신
   * - 중복 검색어는 맨 앞으로 이동하도록 처리
   */
  const handleSearch = (keyword: string) => {
    if (!keyword.trim()) return;
    addSearchList(keyword);
  };

  //  검색 기록 삭제 버튼 클릭 이벤트
  const handleRemoveSearchKeyword = (keyword: string) => {
    removeSearchList(keyword);
  };

  return {
    searchList,
    handleSearch,
    handleRemoveSearchKeyword,
  };
}
