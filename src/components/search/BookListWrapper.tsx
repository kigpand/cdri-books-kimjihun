import { useState } from "react";
import type { BookDocumentType } from "../../api/book";
import BookList from "../common/BookList";

type Props = {
  documents: BookDocumentType[];
};

export default function BookListWrapper({ documents }: Props) {
  const [currentBook, setCurrentBook] = useState<BookDocumentType | null>(null);
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
