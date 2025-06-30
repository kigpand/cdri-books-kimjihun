/**
 * 책 정보 type
 */
export type BookDocumentType = {
  authors: string[];
  contents: string;
  datetime: string;
  isbn: string;
  price: number;
  publisher: string;
  sale_price: number;
  status: string;
  thumbnail: string;
  title: string;
  translators: string[];
  url: string;
};

/**
 * 책 검색 api response type
 */
export type BookSearchResponseType = {
  documents: BookDocumentType[];
  meta: {
    is_end: boolean;
    pageable_count: number;
    total_count: number;
  };
};

/**
 * 상세 검색 target type
 */
export type DETAIL_SEARCH_TRAGET = "person" | "publisher" | null;

/**
 * 책 리스트 검색 api 호출 함수
 *
 * @param query 검색어
 * @param target 상세 검색 필터링 타겟 person = 저자명, publisher = 출판사
 * @returns 책 검색 결과
 * @throws API 실패 에러 반환
 */
export const getBooks = async (
  query: string,
  target?: DETAIL_SEARCH_TRAGET
): Promise<BookSearchResponseType> => {
  const encodedQuery = encodeURIComponent(query);
  // target이 있을 경우에만 포함하기 위한 파라미터
  const targetParam = target ? `&target=${target}` : "";

  const url = `${
    import.meta.env.VITE_KAKAO_API_URL
  }?query=${encodedQuery}&size=10${targetParam}`;

  const res = await fetch(url, {
    headers: {
      Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_API_KEY}`,
    },
  });

  if (!res.ok) throw new Error("API 호출 실패");

  return res.json();
};
