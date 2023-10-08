import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import Pages from './Pages';
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Pages />
    </QueryClientProvider>
  );
}

export default App;
