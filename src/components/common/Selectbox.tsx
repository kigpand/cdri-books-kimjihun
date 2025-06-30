import { useState } from "react";

/**
 * selectbox item type
 * - label: selectbox 표시값
 * - value: selectItem value
 */
type SelectItem = {
  label: string;
  value: string;
};

type Props = {
  className?: string;
  currentItem: SelectItem;
  values: SelectItem[];
  handleChangeSelect: (value: SelectItem) => void;
};

/**
 * 공용 selectbox 컴포넌트
 */
export default function SelectBox({
  className,
  values,
  currentItem,
  handleChangeSelect,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`relative ${className ?? ""}`}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full border-b border-palette-primary rounded px-2 py-2 flex items-center justify-between outline-none text-sm font-bold text-[#353c49] hover:border-gray-400"
      >
        {values.find((item) => item.value === currentItem.value)?.label ??
          "제목"}
        <img src="/src/assets/svg/vector.svg" alt="화살표" />
      </button>

      {open && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-200 shadow-select-itembox">
          {values.map((item) => (
            <li
              key={String(item.value)}
              onClick={() => {
                handleChangeSelect(item);
                setOpen(false);
              }}
              className={`px-2 py-1 text-caption h-[30px] text-sm text-[#8d94a0] hover:bg-gray-100 cursor-pointer ${
                item.value === currentItem.value
                  ? "bg-gray-100 font-medium"
                  : ""
              }`}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
