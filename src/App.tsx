import AppRouter from "@/routes";
import { SidebarProvider } from "@/context/SidebarContext";
import { SWRConfig } from 'swr';
import { fetcher } from '@utils/fetcher';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <SWRConfig value={{ fetcher }}>
      <SidebarProvider>
        <AppRouter />
        <Toaster position="top-center" reverseOrder={false} />
      </SidebarProvider>
    </SWRConfig>
  );
}

export default App;
