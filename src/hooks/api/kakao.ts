import { useQuery } from "@tanstack/react-query";
import { getBooks, type DETAIL_SEARCH_TRAGET } from "../../api/book";

/**
 * 책 리스트 검색 API 훅
 *
 * @param query 검색 키워드
 * @param target 상세 검색 필터링 키워드
 * @returns react-query의 쿼리 결과 객체
 *
 * - 검색키워드(query)가 없으면 자동으로 호출 방지
 * - 5분간 캐시 유지로 불필요한 재요청 방지
 */
export const useBooks = (
  query: string,
  enabled = true,
  target?: DETAIL_SEARCH_TRAGET
) => {
  return useQuery({
    queryKey: ["searchBooks", query, target],
    queryFn: () => getBooks(query, target),
    enabled: !!query && enabled,
    staleTime: 1000 * 60 * 5,
  });
};
