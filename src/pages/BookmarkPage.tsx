import { useState } from "react";
import BookListWrapper from "../components/common/BookListWrapper";
import EmptyBookList from "../components/common/EmptyBookList";
import Pagination from "../components/common/Pagination";
import { useBookmark } from "../hooks/common/useBookmark";
import ContentLayout from "../layout/ContentLayout";

/**
 * 찜목록 페이지
 */
export default function BookmarkPage() {
  // 찜목록 책 리스트
  const { bookmarkList } = useBookmark();
  // 현재 페이지 state
  const [currentPage, setCurrentPage] = useState<number>(0);
  // 현재 페이지에 속한 찜목록 책 리스트
  const currentBookmarkList = bookmarkList.slice(
    currentPage * 10,
    (currentPage + 1) * 10
  );

  return (
    <ContentLayout>
      <h2 className="font-bold text-[22px] leading-8 text-[#1a1e27] mb-6">
        내가 찜한 책
      </h2>
      <p className="mb-9 flex gap-4 text-text-primary font-medium">
        <span>찜한 책</span>
        <span className="ml-2">
          총{" "}
          <span className="text-palette-primary">
            {bookmarkList.length ?? 0}
          </span>
          건
        </span>
      </p>
      {bookmarkList.length === 0 && <EmptyBookList className="mt-[120px]" />}
      {bookmarkList.length > 0 && (
        <BookListWrapper documents={currentBookmarkList} />
      )}
      {bookmarkList.length > 0 && (
        <Pagination
          pageCount={Math.ceil(bookmarkList.length / 10)}
          onPageChange={({ selected }) => setCurrentPage(selected)}
        />
      )}
    </ContentLayout>
  );
}
