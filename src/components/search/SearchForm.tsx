import { useState } from "react";
import DetailSearchButton from "./DetailSearchButton";
import type { DETAIL_SEARCH_TRAGET } from "../../api/book";
import { useSearchList } from "../../hooks/common/useSearchList";

/**
 * 현재 파일에서 사용되는 컴포넌트들의 base props
 */
type BaseProps = {
  width?: string;
  handleSearchButton: (value: string) => void;
  handleRemoveSearchKeyword: (value: string) => void;
};

/**
 * 검색 기록 컴포넌트 props
 */
type RecordProps = {
  value: string;
  onChange: (v: string) => void;
} & BaseProps;

/**
 * 메인 컴포넌트 props
 */
type Props = {
  handleChangeSearchTarget: (
    target: DETAIL_SEARCH_TRAGET,
    keyword: string
  ) => void;
} & BaseProps;

/**
 * 검색 입력 필드
 *
 * @param value 현재 검색 input value
 * @param onChange 검색어 change event
 */
function SearchInputField({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <>
      <img src="/src/assets/svg/search.svg" alt="search" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="검색어를 입력하세요"
        className="bg-transparent focus:outline-none flex-1 text-caption text-text-subtitle"
      />
    </>
  );
}

/**
 * 검색 기록이 있을 경우 보여지는 폼
 *
 * @param value 현재 입력받는 input(검색어) value
 * @param onChange 검색어 수정 이벤트
 * @param handleSearch 검색 이벤트 - 검색어 리스트 클릭용
 * @param handleRemoveSearchKeyword 검색어 삭제 이벤트 - 검색어 close button 클릭 이벤트
 */
function SearchRecordForm({
  value,
  onChange,
  handleSearchButton,
  handleRemoveSearchKeyword,
}: RecordProps) {
  const { searchList } = useSearchList();

  return (
    <div className="relative pb-5 grow flex flex-col gap-3 bg-palette-light-gray rounded-3xl">
      <div className="flex py-[10px] pl-[10px] gap-[11px] h-[50px]">
        <SearchInputField value={value} onChange={onChange} />
      </div>
      <ul className="flex flex-col gap-4">
        {searchList.map((item) => (
          <li className="flex justify-between pl-[51px] pr-6" key={item}>
            <button
              type="button"
              onClick={() => handleSearchButton(item)}
              className="text-caption text-text-subtitle text-left cursor-pointer hover:underline"
            >
              {item}
            </button>
            <img
              src="/src/assets/svg/close.svg"
              alt="close"
              className="cursor-pointer"
              onClick={() => handleRemoveSearchKeyword(item)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * 메인 검색 폼 컴포넌트
 * 하위 컴포넌트들은 다른 컴포넌트에서 재사용할 일이 없을 것으로 판단해 같은 파일에 내부에 작업 진행
 * @param width Form 넓이(재사용성 위해 width 추가)
 * @param handleSearchButton 검색 이벤트
 * @param handleRemoveSearchKeyword 검색어 리스트에서 입력한 검색어 삭제 이벤트
 * @param handleChangeSearchTarget 상세 검색 이벤트
 */
export default function SearchForm({
  width,
  handleSearchButton,
  handleRemoveSearchKeyword,
  handleChangeSearchTarget,
}: Props) {
  const { searchList } = useSearchList();
  // 검색어 입력 input state
  const [value, setValue] = useState<string>("");

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setValue("");
    handleSearchButton(value);
  }

  /** 검색 기록 갯수 */
  const historyLength = searchList.length > 0;

  return (
    <div className={`flex flex-col gap-4 ${width}`}>
      <label className="text-title2 h-9">도서 검색</label>
      <form
        onSubmit={onSubmit}
        className={`flex w-full gap-4 ${
          historyLength ? "items-start" : "items-center"
        }`}
      >
        {/* 검색기록 있을시 SearchRecordForm(검색기록 폼), 없을시 SearchInputField 렌더링 */}
        {historyLength ? (
          <SearchRecordForm
            value={value}
            onChange={setValue}
            handleSearchButton={handleSearchButton}
            handleRemoveSearchKeyword={handleRemoveSearchKeyword}
          />
        ) : (
          <div className="relative grow flex items-center bg-palette-light-gray py-[10px] pl-[10px] gap-[11px] h-[50px] rounded-[100px]">
            <SearchInputField value={value} onChange={setValue} />
          </div>
        )}
        <DetailSearchButton
          keyword={value}
          resetKeyword={() => setValue("")}
          handleChangeSearchTarget={handleChangeSearchTarget}
        />
      </form>
    </div>
  );
}
