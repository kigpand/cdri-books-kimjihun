import BookListWrapper from "../components/common/BookListWrapper";
import EmptyBookList from "../components/common/EmptyBookList";
import { useBookmark } from "../hooks/common/useBookmark";
import ContentLayout from "../layout/ContentLayout";

export default function BookmarkPage() {
  const { bookmarkList } = useBookmark();

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
      {bookmarkList.length > 0 && <BookListWrapper documents={bookmarkList} />}
    </ContentLayout>
  );
}
