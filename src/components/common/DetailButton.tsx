import Button from "./Button";

type Props = {
  isExpand: boolean;
  handleDetailButton: () => void;
};

export default function DetailButton({ isExpand, handleDetailButton }: Props) {
  return (
    <Button
      variant="lightgray"
      className="gap-[2px] w-[115px] h-12 flex items-center justify-center"
      onClick={handleDetailButton}
    >
      <span className="text-caption text-text-secondary">상세보기</span>
      <img
        src="/src/assets/svg/vector.svg"
        alt="화살표"
        className={isExpand ? "rotate-180" : "rotate-0"}
      />
    </Button>
  );
}
