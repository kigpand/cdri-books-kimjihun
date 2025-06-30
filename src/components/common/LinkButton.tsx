type Props = {
  url: string;
  className: string;
};

/**
 * 구매시 해당 북 url 페이지 이동 버튼 컴포넌트
 *
 * @param url 이동할 페이지 링크
 * @param className Link 버튼 커스텀 UI classname
 */
export default function LinkButton({ url, className }: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-lg bg-palette-primary text-center text-white hover:bg-blue-600 ${className}`}
    >
      구매하기
    </a>
  );
}
