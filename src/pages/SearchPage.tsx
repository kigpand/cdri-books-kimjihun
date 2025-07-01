import { useState } from "react";
import SearchForm from "../components/search/SearchForm";
import { useSearchList } from "../hooks/common/useSearchList";
import ContentLayout from "../layout/ContentLayout";
import { useBooks } from "../hooks/api/kakao";
import BookListWrapper from "../components/common/BookListWrapper";
import EmptyBookList from "../components/common/EmptyBookList";
import type { DETAIL_SEARCH_TRAGET } from "../api/book";
import Pagination from "../components/common/Pagination";

/**
 * 검색(홈) 페이지
 */
export default function SearchPage() {
  const { handleSearch, handleRemoveSearchKeyword } = useSearchList();
  // 상세 검색 target(person, publisher) state
  const [target, setTarget] = useState<DETAIL_SEARCH_TRAGET>(null);
  // 검색어 등록 state
  const [keyword, setKeyword] = useState<string>("");
  // 현재 페이지 state
  const [currentPage, setCurrentPage] = useState<number>(0);
  // 현재 책 리스트
  const { data } = useBooks(keyword, !!keyword, currentPage + 1, target);

  /**
   * 메인 검색 이벤트
   *
   * @param value 검색 결과
   */
  function handleSearchButton(value: string) {
    // 상세 검색 후 일반 검색시 target 필터링 제거 위한 코드
    if (target !== null) {
      setTarget(null);
    }
    setKeyword(value);
    handleSearch(value);
  }

  /**
   * 상세검색 이벤트
   *
   * @param value 상세 검색 target value
   * @param search 상세 검색 input value
   */
  function handleChangeSearchTarget(
    value: DETAIL_SEARCH_TRAGET,
    search: string
  ) {
    setTarget(value);
    setKeyword(search);
  }

  return (
    <ContentLayout>
      <SearchForm
        width="w-[568px]"
        handleSearchButton={handleSearchButton}
        handleRemoveSearchKeyword={handleRemoveSearchKeyword}
        handleChangeSearchTarget={handleChangeSearchTarget}
      />
      <p className="mt-[24.1px] mb-9 flex gap-4 text-text-primary font-medium">
        <span>도서 검색 결과</span>
        <span className="ml-2">
          총{" "}
          <span className="text-palette-primary">
            {data?.meta.total_count ?? 0}
          </span>
          건
        </span>
      </p>
      {(!data || data.meta.total_count === 0) && (
        <EmptyBookList className="mt-[120px]" />
      )}
      {data && data.meta.total_count > 0 && (
        <BookListWrapper documents={data.documents} />
      )}
      {data && (
        <Pagination
          pageCount={Math.ceil(data.meta.total_count / 10)}
          onPageChange={({ selected }) => setCurrentPage(selected)}
        />
      )}
    </ContentLayout>
  );
}
