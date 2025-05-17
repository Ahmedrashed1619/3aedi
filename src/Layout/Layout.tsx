import React, { useContext } from 'react';
import Header from '../components/header/Header';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import { SidebarContext } from '../../context/SidebarContext';
import './Layout.scss';

const Layout: React.FC = () => {

  const { collapsed, setCollapsed } = useContext(SidebarContext);

  return (
    <div className="bg-gray-50 layout">
      <div>
        <Header collapsed={collapsed} />
        <div className={`pt-28 pb-10 px-8 content ${collapsed ? 'collapsed' : ''}`}>
          <Outlet />
        </div>
      </div>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
    </div>
  );
};

export default Layout;