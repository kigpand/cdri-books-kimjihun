import { useState } from "react";
import type { DETAIL_SEARCH_TRAGET } from "../../api/book";
import Button from "../common/Button";

type Props = {
  handleChangeSearchTarget: (
    target: DETAIL_SEARCH_TRAGET,
    keyword: string
  ) => void;
};

export default function DetailSearchForm({ handleChangeSearchTarget }: Props) {
  const [selectValue, setSelectValue] =
    useState<DETAIL_SEARCH_TRAGET>("person");
  const [keyword, setKeyword] = useState<string>("");

  function handleSearchButton() {
    if (keyword === "") return;
    handleChangeSearchTarget(selectValue, keyword);
  }

  return (
    <div
      role="dialog"
      className="absolute bg-white top-[51px] w-[360px] h-40 shadow-modal rounded-[8px] z-[1px] flex items-center justify-center"
    >
      <div></div>
      <Button className="w-full py-[5px]" onClick={handleSearchButton}>
        검색하기
      </Button>
    </div>
  );
}
