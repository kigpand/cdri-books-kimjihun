type Props = {
  className: string;
};

export default function EmptyBookList({ className }: Props) {
  return (
    <article className={`w-full items-center flex flex-col gap-6 ${className}`}>
      <img src="src/assets/icon_book.png" alt="noList" />
      <p className="text-caption text-text-secondary">
        검색된 결과가 없습니다.
      </p>
    </article>
  );
}
