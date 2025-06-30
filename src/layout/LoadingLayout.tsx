import { useIsFetching } from "@tanstack/react-query";

export default function LoadingLayout() {
  const isFetching = useIsFetching();

  if (isFetching > 0)
    return (
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center h-screen">
        <div className="animate-spin w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full" />
      </div>
    );

  return null;
}
