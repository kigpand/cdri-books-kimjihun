import { useState } from "react";
import type { DETAIL_SEARCH_TRAGET } from "../../api/book";
import DetailSearchForm from "./DetailSearchForm";

type Props = {
  handleChangeSearchTarget: (
    target: DETAIL_SEARCH_TRAGET,
    keyword: string
  ) => void;
};

export default function DetailSearchButton({
  handleChangeSearchTarget,
}: Props) {
  const [open, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative flex justify-center">
      <button
        onClick={() => setIsOpen(!open)}
        className="px-[10px] py-[5px] h-[35px] text-body2 text-text-subtitle border border-text-subtitle rounded-lg cursor-pointer"
      >
        상세검색
      </button>
      {open && (
        <DetailSearchForm
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
