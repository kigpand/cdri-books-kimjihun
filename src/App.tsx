import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./layout/Header";
import SearchPage from "./pages/SearchPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookmarkPage from "./pages/BookmarkPage";
import { Path } from "./constants/path";
import LoadingLayout from "./layout/LoadingLayout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LoadingLayout />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={Path.search} element={<SearchPage />} />
          <Route path={Path.bookmark} element={<BookmarkPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
