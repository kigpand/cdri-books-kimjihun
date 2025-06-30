import { useState } from "react";
import type { DETAIL_SEARCH_TRAGET } from "../../api/book";
import Button from "../common/Button";
import SelectBox from "../common/Selectbox";

const options: { label: string; value: string }[] = [
  { label: "저자명", value: "person" },
  { label: "출판사", value: "publisher" },
];

type Props = {
  resetKeyword: () => void;
  handleChangeSearchTarget: (
    target: DETAIL_SEARCH_TRAGET,
    keyword: string
  ) => void;
  handleCloseForm: () => void;
};

/**
 *
 * @param resetKeyword 현재 메인 검색어 초기화 이벤트
 * @param handleChangeSearchTarget 상세 검색 이벤트
 * @param handleCloseForm 상세 검색 폼 닫기 이벤트
 */
export default function DetailSearchForm({
  resetKeyword,
  handleChangeSearchTarget,
  handleCloseForm,
}: Props) {
  const [selectValue, setSelectValue] = useState<{
    label: string;
    value: string;
  }>(options[0]);
  const [keyword, setKeyword] = useState<string>("");

  function handleSearchButton() {
    if (keyword === "") return;
    handleChangeSearchTarget(
      selectValue.value as DETAIL_SEARCH_TRAGET,
      keyword
    );
    setKeyword("");
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setKeyword(e.target.value);
    resetKeyword();
  }

  return (
    <div
      role="dialog"
      className="absolute bg-white top-[51px] w-[360px] px-6 py-9 h-40 shadow-modal rounded-[8px] z-[1px]"
    >
      <div className="w-full flex gap-1 mb-4">
        <SelectBox
          className="w-[100px] h-9"
          values={options}
          currentItem={selectValue}
          handleChangeSelect={setSelectValue}
        />
        <input
          type="text"
          className="grow h-9 border-b border-palette-primary outline-none text-caption text-[#8d94a0]"
          value={keyword}
          placeholder="검색어를 입력하세요"
          onChange={handleInputChange}
        />
      </div>
      <Button
        type="button"
        className="w-full py-[5px]"
        onClick={handleSearchButton}
      >
        검색하기
      </Button>
      <img
        src="/src/assets/svg/close.svg"
        alt="닫기버튼"
        className="absolute top-2 right-2"
        onClick={handleCloseForm}
      />
    </div>
  );
}
