type Props = {
  className: string;
};

/**
 * 검색 결과 없거나 비었을시 표출되는 컴포넌트
 * @param className EmptyBookList ui custom className
 */
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
