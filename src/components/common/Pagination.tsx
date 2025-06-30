import ReactPaginate from "react-paginate";

type SelectedItemType = {
  selected: number;
};

type Props = {
  pageCount: number;
  onPageChange: (selectedItem: SelectedItemType) => void;
};

/**
 * 책 리스트 관리위한 페이지네이션 컴포넌트
 *
 * @param pageCount 총 페이지의 갯수
 * @param onPageChange 변경된 페이지 감지 이벤트
 */
export default function Pagination({ pageCount, onPageChange }: Props) {
  return (
    <ReactPaginate
      previousLabel="<"
      nextLabel=">"
      breakLabel="..."
      pageCount={pageCount}
      marginPagesDisplayed={1}
      pageRangeDisplayed={10}
      onPageChange={onPageChange}
      containerClassName="flex justify-center items-center gap-2 mt-10"
      pageClassName="w-[35px] h-[35px] text-lg flex items-center justify-center rounded text-gray-700"
      activeClassName="bg-blue-500 text-white"
      previousClassName="w-[35px] h-[35px] text-lg flex items-center justify-center rounded text-gray-700"
      nextClassName="w-[35px] h-[35px] text-lg flex items-center justify-center rounded text-gray-700"
      breakClassName="w-[35px] h-[35px] text-lg flex items-center justify-center text-gray-500"
    />
  );
}
