import { useEffect, useState } from "react";
import type { DETAIL_SEARCH_TRAGET } from "../../api/book";
import DetailSearchForm from "./DetailSearchForm";

type Props = {
  keyword: string;
  resetKeyword: () => void;
  handleChangeSearchTarget: (
    target: DETAIL_SEARCH_TRAGET,
    keyword: string
  ) => void;
};

/**
 *
 * @param keyword 기존 검색 input의 value값
 * @param resetKeyword 현재 메인 검색어 초기화 이벤트
 * @param handleChangeSearchTarget 상세 검색 이벤트
 */
export default function DetailSearchButton({
  keyword,
  resetKeyword,
  handleChangeSearchTarget,
}: Props) {
  // 상세 검색 폼 on/off state
  const [open, setIsOpen] = useState<boolean>(false);

  // open일때 keyword가 존재할 수 있으므로 open은 의존성배열에서 감지하면 안됨.
  useEffect(() => {
    if (keyword !== "" && open) {
      setIsOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

  return (
    <div className="relative flex justify-center">
      <button
        type="button"
        onClick={() => setIsOpen(!open)}
        className="px-[10px] py-[5px] h-[35px] text-body2 text-text-subtitle border border-text-subtitle rounded-lg cursor-pointer"
      >
        상세검색
      </button>
      {open && (
        <DetailSearchForm
          resetKeyword={resetKeyword}
          handleChangeSearchTarget={(target, keyword) => {
            setIsOpen(false);
            handleChangeSearchTarget(target, keyword);
          }}
          handleCloseForm={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
