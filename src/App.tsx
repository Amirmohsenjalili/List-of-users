import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import Pages from './Pages';
import { CssBaseline } from '@mui/material';
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <Pages />
    </QueryClientProvider>
  );
}

export default App;
