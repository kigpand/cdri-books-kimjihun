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

export type BookSearchResponseType = {
  documents: BookDocumentType[];
  meta: {
    is_end: boolean;
    pageable_count: number;
    total_count: number;
  };
};

/**
 * 책 리스트 검색 api 호출 함수
 *
 * @param query 검색어
 * @returns 책 검색 결과
 * @throws API 실패 에러 반환
 */
export const getBooks = async (
  query: string
): Promise<BookSearchResponseType> => {
  const encodedQuery = encodeURIComponent(query);
  const url = `${
    import.meta.env.VITE_KAKAO_API_URL
  }?query=${encodedQuery}&size=10`;

  const res = await fetch(url, {
    headers: {
      Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_API_KEY}`,
    },
  });

  if (!res.ok) throw new Error("API 호출 실패");

  return res.json();
};
