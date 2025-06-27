import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/layout/Header";

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
    </QueryClientProvider>
  );
}

export default App;
