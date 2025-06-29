import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./layout/Header";
import ContentLayout from "./layout/ContentLayout";

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
      <ContentLayout>fdsf</ContentLayout>
    </QueryClientProvider>
  );
}

export default App;
