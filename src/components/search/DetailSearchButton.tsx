import type { DETAIL_SEARCH_TRAGET } from "../../api/book";
import DetailSearchForm from "./DetailSearchForm";

type Props = {
  handleChangeSearchTarget: (
    target: DETAIL_SEARCH_TRAGET,
    keyword: string
  ) => void;
};

export default function DetailSearchButton(props: Props) {
  return (
    <div className="relative flex justify-center">
      <button className="px-[10px] py-[5px] h-[35px] text-body2 text-text-subtitle border border-text-subtitle rounded-lg cursor-pointer">
        상세검색
      </button>
      <DetailSearchForm {...props} />
    </div>
  );
}
