type Props = {
  url: string;
  className: string;
};

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
