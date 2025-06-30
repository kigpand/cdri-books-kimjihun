import Button from "./Button";

type Props = {
  isExpand: boolean;
  handleDetailButton: () => void;
};

/**
 * 상세보기 버튼 컴포넌트
 * @param isExpand 현재 버튼이 속해있는 리스트 상세 on/off 여부.
 * @param handleDetailButton 버튼 detail 변경 이벤트
 */
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
