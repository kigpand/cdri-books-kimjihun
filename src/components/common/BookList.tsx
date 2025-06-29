import type { BookDocumentType } from "../../api/book";
import { useBookmark } from "../../hooks/common/useBookmark";
import DetailButton from "./DetailButton";
import LinkButton from "./LinkButton";

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
        <LinkButton className="py-[13px] w-[115px] px-5" url={bookInfo.url} />
        <DetailButton
          isExpand={bookInfo.isbn === currentBook?.isbn}
          handleDetailButton={() => handleChangeCurrentBook(bookInfo)}
        />
      </div>
    </div>
  );
}

function BookListDetail({
  bookInfo,
  handleChangeCurrentBook,
}: {
  bookInfo: BookDocumentType;
  handleChangeCurrentBook: (book: BookDocumentType) => void;
}) {
  const { handleToggleBookmarkButton, checkExistsBookmark } = useBookmark();

  return (
    <div className="w-full pt-6 pb-10 pl-[54px] pr-4 flex  border-b border-[#d2d6db]">
      <div className="w-[210px] h-[280px] mr-8 relative">
        {bookInfo.thumbnail !== "" ? (
          <img
            className="w-full h-full"
            src={bookInfo.thumbnail}
            alt={bookInfo.title}
          />
        ) : (
          <div className="w-full h-full bg-red-400" />
        )}
        <img
          className="absolute z-10 top-2 right-2"
          src={
            checkExistsBookmark(bookInfo)
              ? "/src/assets/svg/fill.svg"
              : "/src/assets/svg/line.svg"
          }
          alt="bookmark"
          onClick={() => handleToggleBookmarkButton(bookInfo)}
        />
      </div>
      <div className="pt-5">
        <div className="flex gap-4 items-baseline mb-4">
          <h3 className="text-lg leading-[26px] font-bold text-text-primary">
            {bookInfo.title}
          </h3>
          <span className="text-caption text-sm text-text-subtitle">
            {bookInfo.authors[0]}
          </span>
        </div>
        <div>
          <label className="font-bold text-sm leading-[26px] text-text-primary">
            책 소개
          </label>
          <p className="text-[10px] text-text-primary w-[360px] whitespace-pre-line">
            {bookInfo.contents}
          </p>
        </div>
      </div>
      <div className="grow flex flex-col items-end justify-between pt-[2px]">
        <DetailButton
          isExpand
          handleDetailButton={() => handleChangeCurrentBook(bookInfo)}
        />
        <div>
          <div className="w-full flex flex-col items-end pr-1 mb-7">
            {bookInfo.sale_price !== -1 && (
              <span className="flex items-baseline gap-2">
                <label className="font-medium text-[10px] text-text-subtitle">
                  원가
                </label>
                <div className="text-lg text-text-primary leading-[26px] line-through">
                  {bookInfo.price.toLocaleString()}원
                </div>
              </span>
            )}
            <span className="flex items-center gap-2">
              <label className="font-medium text-[10px] text-text-subtitle">
                {bookInfo.sale_price !== -1 ? "할인가" : "원가"}
              </label>
              <h3 className="font-bold text-lg leading-[26px] text-[#313844]">
                {bookInfo.sale_price !== -1
                  ? (
                      (bookInfo.sale_price / bookInfo.price) *
                      bookInfo.price
                    ).toLocaleString()
                  : bookInfo.price.toLocaleString()}
                원
              </h3>
            </span>
          </div>
          <LinkButton className="py-[13px] w-[240px]" url={bookInfo.url} />
        </div>
      </div>
    </div>
  );
}

export default function BookList(props: Props) {
  return (
    <li className="w-full">
      {props.bookInfo.isbn === props.currentBook?.isbn ? (
        <BookListDetail
          bookInfo={props.bookInfo}
          handleChangeCurrentBook={props.handleChangeCurrentBook}
        />
      ) : (
        <BookListItem {...props} />
      )}
    </li>
  );
}
