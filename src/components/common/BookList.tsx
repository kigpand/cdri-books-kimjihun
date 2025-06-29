import type { BookDocumentType } from "../../api/book";
import Button from "./Button";
import DetailButton from "./DetailButton";

type Props = {
  bookInfo: BookDocumentType;
  currentBook: BookDocumentType | null;
  handleChangeCurrentBook: (book: BookDocumentType) => void;
};

function BookListItem({
  bookInfo,
  currentBook,
  handleChangeCurrentBook,
}: Props) {
  return (
    <div className="w-full pl-12 pr-[6px] py-4 flex items-center border-b border-[#d2d6db]">
      {bookInfo.thumbnail !== "" ? (
        <img
          src={bookInfo.thumbnail}
          alt={bookInfo.title}
          className="w-12 h-[68px] mr-[25px]"
        />
      ) : (
        <div className="w-12 h-[68px] mr-[25px] bg-red-400" />
      )}
      <div className="w-[408px] flex gap-4 mr-[22px] items-baseline">
        <h3 className="text-title3 text-text-primary">{bookInfo.title}</h3>
        <span className="text-body2 text-text-secondary">
          {bookInfo.authors[0]}
        </span>
      </div>
      <h3 className="text-title3 text-text-primary w-[76px] mr-[56px]">
        {bookInfo.price.toLocaleString()}원
      </h3>
      <div className="flex gap-2">
        <Button
          className="py-[13px] px-5 w-[115px]"
          onClick={() => console.log("구매")}
        >
          구매하기
        </Button>
        <DetailButton
          isExpand={bookInfo.isbn === currentBook?.isbn}
          handleDetailButton={() => handleChangeCurrentBook(bookInfo)}
        />
      </div>
    </div>
  );
}

export default function BookList(props: Props) {
  return (
    <li className="w-full">
      <BookListItem {...props} />
    </li>
  );
}
