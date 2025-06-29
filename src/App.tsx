import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./layout/Header";
import SearchPage from "./pages/SearchPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookmarkPage from "./pages/BookmarkPage";

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
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/bookmark" element={<BookmarkPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
