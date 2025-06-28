import { useState } from "react";

type Props = {
  historyList: string[];
};

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

function SearchRecordForm({
  historyList,
  value,
  onChange,
}: {
  historyList: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative pb-5 grow flex flex-col gap-3 bg-palette-light-gray rounded-3xl">
      <div className="flex py-[10px] pl-[10px] gap-[11px] h-[50px]">
        <SearchInputField value={value} onChange={onChange} />
      </div>
      <ul className="flex flex-col gap-4">
        {historyList.map((item, i) => (
          <li className="flex justify-between pl-[51px] pr-6" key={i}>
            <button
              type="button"
              onClick={() => onChange(item)}
              className="text-caption text-text-subtitle text-left"
            >
              {item}
            </button>
            <img
              src="/src/assets/svg/close.svg"
              alt="close"
              className="cursor-pointer"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SearchForm({ historyList }: Props) {
  const [value, setValue] = useState<string>("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log(value);
  }

  const historyLength = historyList.length > 0;

  return (
    <div className="flex flex-col gap-4 w-full">
      <label className="text-title2 h-9">도서 검색</label>
      <form
        onSubmit={handleSubmit}
        className={`flex w-full gap-4 ${
          historyLength ? "items-start" : "items-center"
        }`}
      >
        {historyLength ? (
          <SearchRecordForm
            historyList={historyList}
            value={value}
            onChange={setValue}
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
