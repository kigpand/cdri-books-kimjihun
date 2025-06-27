import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
    },
  },
});

function App() {
  return <QueryClientProvider client={queryClient}></QueryClientProvider>;
}

export default App;
