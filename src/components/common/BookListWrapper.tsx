import { useState } from "react";
import type { BookDocumentType } from "../../api/book";
import BookList from "./BookList";

type Props = {
  documents: BookDocumentType[];
};

/**
 * 책 리스트 총괄 컴포넌트
 * @param documents 현재 보여지는 전체 책 리스트
 */
export default function BookListWrapper({ documents }: Props) {
  // 현재 상세 보여지고 있는 책 정보
  const [currentBook, setCurrentBook] = useState<BookDocumentType | null>(null);
  // 상세 책 변경 이벤트
  function handleChangeCurrentBook(bookInfo: BookDocumentType) {
    setCurrentBook(currentBook?.isbn !== bookInfo.isbn ? bookInfo : null);
  }

  return (
    <ul>
      {documents.map((doc) => {
        return (
          <BookList
            key={doc.isbn}
            bookInfo={doc}
            currentBook={currentBook}
            handleChangeCurrentBook={handleChangeCurrentBook}
          />
        );
      })}
    </ul>
  );
}
