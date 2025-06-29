import { useState } from "react";
import SearchForm from "../components/common/SearchForm";
import { useSearchList } from "../hooks/common/useSearchList";
import ContentLayout from "../layout/ContentLayout";
import { useBooks } from "../hooks/api/kakao";
import BookListWrapper from "../components/common/BookListWrapper";

export default function SearchPage() {
  const searchList = useSearchList();
  const [keyword, setKeyword] = useState<string>("노르웨이");
  const { data } = useBooks(keyword, !!keyword);

  function changeKeyword(value: string) {
    searchList.handleSearch(value);
    setKeyword(value);
  }

  return (
    <ContentLayout>
      <SearchForm
        width="w-[568px]"
        searchList={searchList.searchList}
        handleSearch={changeKeyword}
        handleRemoveSearchKeyword={searchList.handleRemoveSearchKeyword}
      />
      <p className="mt-[24.1px] mb-9 flex gap-4">
        <span className="text-text-primary font-medium ">도서 검색 결과</span>
        <span className="ml-2 font-semibold text-black">
          총 {data?.meta.total_count ?? 0}건
        </span>
      </p>
      {data && <BookListWrapper documents={data.documents} />}
    </ContentLayout>
  );
}
