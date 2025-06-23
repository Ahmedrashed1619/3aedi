import AppRouter from "@/routes";
import { SidebarProvider } from "@/context/SidebarContext";
import { SWRConfig } from 'swr';
import { fetcher } from '@utils/fetcher';

function App() {
  return (
    <SWRConfig value={{ fetcher }}>
      <SidebarProvider>
        <AppRouter />
      </SidebarProvider>
    </SWRConfig>
  );
}

export default App;
