import ReactPaginate from "react-paginate";

type SelectedItemType = {
  selected: number;
};

type Props = {
  pageCount: number;
  onPageChange: (selectedItem: SelectedItemType) => void;
};

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
