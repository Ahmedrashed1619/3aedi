import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/home/Home";
import { SidebarProvider } from "../context/SidebarContext";
import { ConfigProvider } from 'antd';
// import 'antd/dist/reset.css';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1677ff',
        },
      }}
    >
      <SidebarProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Navigate to="home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/summary" element={<Home />} />
              <Route path="/editor" element={<Home />} />
              <Route path="/analytics" element={<Home />} />
              <Route path="/payments" element={<Home />} />
              <Route path="/cash-on-delivery" element={<Home />} />
              <Route path="/returns" element={<Home />} />
              <Route path="/reports" element={<Home />} />
              <Route path="/marketing" element={<Home />} />
              <Route path="*" element={<Navigate to="/home" />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SidebarProvider>
    </ConfigProvider>
  );
}

export default App;
