import { useState } from "react";

type Props = {
  width?: string;
  searchList: string[];
  handleSearch: (value: string) => void;
  handleRemoveSearchKeyword: (value: string) => void;
};

/**
 * 검색 입력 필드
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
 */
function SearchRecordForm({
  searchList,
  value,
  onChange,
  handleSearch,
  handleRemoveSearchKeyword,
}: {
  value: string;
  onChange: (v: string) => void;
} & Props) {
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
              onClick={() => handleSearch(item)}
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
 */
export default function SearchForm({
  width,
  searchList,
  handleSearch,
  handleRemoveSearchKeyword,
}: Props) {
  const [value, setValue] = useState<string>("");

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setValue("");
    handleSearch(value);
  }

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
            searchList={searchList}
            value={value}
            onChange={setValue}
            handleSearch={handleSearch}
            handleRemoveSearchKeyword={handleRemoveSearchKeyword}
          />
        ) : (
          <div className="relative grow flex items-center bg-palette-light-gray py-[10px] pl-[10px] gap-[11px] h-[50px] rounded-[100px]">
            <SearchInputField value={value} onChange={setValue} />
          </div>
        )}
        <button
          type="submit"
          className="px-[10px] py-[5px] h-[35px] text-body2 text-text-subtitle border border-text-subtitle rounded-lg cursor-pointer"
        >
          상세검색
        </button>
      </form>
    </div>
  );
}
