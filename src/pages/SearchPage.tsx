import { useState } from "react";
import SearchForm from "../components/search/SearchForm";
import { useSearchList } from "../hooks/common/useSearchList";
import ContentLayout from "../layout/ContentLayout";
import { useBooks } from "../hooks/api/kakao";
import BookListWrapper from "../components/common/BookListWrapper";
import EmptyBookList from "../components/common/EmptyBookList";
import type { DETAIL_SEARCH_TRAGET } from "../api/book";

export default function SearchPage() {
  const searchList = useSearchList();
  const [target, setTarget] = useState<DETAIL_SEARCH_TRAGET>("publisher");
  const [keyword, setKeyword] = useState<string>("");
  const { data } = useBooks(keyword, !!keyword, target);

  function changeKeyword(value: string) {
    searchList.handleSearch(value);
    setKeyword(value);
  }

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
        searchList={searchList.searchList}
        handleSearch={changeKeyword}
        handleRemoveSearchKeyword={searchList.handleRemoveSearchKeyword}
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
    </ContentLayout>
  );
}
