interface SidebarProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { Layout, Menu, Button, Grid } from "antd";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft, MdOutlineMenu } from "react-icons/md";
import './Sidebar.scss';


const { Sider } = Layout;
const { useBreakpoint } = Grid;

const menuItems = [
  { 
    key: 'home',
    label: 'الرئيسية',
    icon: (
      <img src={'../../../assets/HomeIcon.svg'} alt="Home" />
    ),
    path: '/home'
  },
  { 
    key: 'summary',
    label: 'ملخص الشهر',
    icon: (
      <img src={'../../../assets/Calendar.svg'} alt="Summary" />
    ),
    path: '/summary'
  },
  { 
    key: 'editor',
    label: 'محرر البيانات',
    icon: (
      <img src={'../../../assets/Layers.svg'} alt="Editor" />
    ),
    path: '/editor'
  },
  { 
    key: 'analytics',
    label: 'التحليلات',
    icon: (
      <img src={'../../../assets/Chart.svg'} alt="Analytics" />
    ),
    path: '/analytics'
  },
  { 
    key: 'payments',
    label: 'تحليل الدفع والتقسيط',
    icon: (
      <img src={'../../../assets/Chart1.svg'} alt="Payments" />
    ),
    path: '/payments'
  },
  { 
    key: 'cash-on-delivery',
    label: 'الدفع عند الإستلام',
    icon: (
      <img src={'../../../assets/Wallet.svg'} alt="cash-on-delivery" />
    ),
    path: '/cash-on-delivery'
  },
  { 
    key: 'returns',
    label: 'المرتجعات',
    icon: (
      <img src={'../../../assets/Box.svg'} alt="Returns" />
    ),
    path: '/returns'
  },
  { 
    key: 'reports',
    label: 'التقارير العامة',
    icon: (
      <img src={'../../../assets/Document.svg'} alt="Reports" />
    ),
    path: '/reports'
  },
  { 
    key: 'marketing',
    label: 'التسويق',
    icon: (
      <img src={'../../../assets/Megaphone.svg'} alt="Marketing" />
    ),
    path: '/marketing'
  },
  { 
    key: 'settings',
    label: 'الإعدادات',
    icon: (
      <img src={'../../../assets/Icon.svg'} alt="Settings" />
    ),
    path: '/settings'
  }
];

const Sidebar: React.FC<SidebarProps> = ({ collapsed, setCollapsed }) => {

  const screens = useBreakpoint();
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Only collapse on medium and smaller screens initially
    if (!screens.lg) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, [screens]);

  const currentPath = location.pathname.split("/").pop() || "dashboard";

  const isDrawerMode = !screens.lg;

  return (
    <aside>
      {/* Toggle Button for Drawer Mode */}
      {isDrawerMode && (
        <Button
          type="text"
          icon={<MdOutlineMenu size={22} />}
          className="mobile-sidebar-toggle bg-white"
          onClick={() => setVisible(true)}
        />
      )}

      {/* Sidebar/Drawer */}
      <div
        className={`${isDrawerMode ? "sidebar-overlay" : ""} ${
          visible ? "visible" : ""
        }`}
        onClick={() => isDrawerMode && setVisible(false)}
        dir='rtl'
      >
        <Sider
          collapsible
          collapsed={collapsed}
          width={250}
          className={`sidebar-container ${visible ? "visible" : ""}`}
          trigger={null}
          breakpoint="lg"
          style={isDrawerMode ? { position: "fixed" } : {}}
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        >
          {/* Logo and Toggle */}
          <div className="sidebar-header">
            {collapsed && <img src={'/logo-1.png'} alt="3aedi" />}
            {!collapsed && <img src={'/logo.png'} alt="3aedi" />}
            <Button
              type="text"
              icon={collapsed ? <MdKeyboardArrowLeft size={22} /> : <MdKeyboardArrowRight size={22} />}
              onClick={() => {
                if (!isDrawerMode) {
                  setCollapsed(!collapsed);
                } else {
                  setVisible(false);
                }
              }}
              className="sidebar-toggle"
            />
          </div>

          {/* Scrollable Menu Area */}
          <div className="sidebar-scrollable">
            <Menu
              mode="inline"
              selectedKeys={[currentPath]}
              style={{ background: "transparent", borderRight: 0 }}
              theme="dark"
              className="custom-menu"
              items={menuItems.map((item) => ({
                key: item.key,
                icon: item.icon,
                label: <NavLink to={item.path}>{item.label}</NavLink>,
              }))}
            />
            <div
              className=
              {`upgrade bg-gradient-to-br from-indigo-500 via-blue-500 to-purple-600
                hover:from-indigo-600 hover:via-blue-600 hover:to-purple-700
                shadow-lg flex items-center justify-center text-center m-5 py-6 px-3 text-white text-sm rounded-lg font-bold
                ${collapsed? "hidden" : "block"}
              `}
            >
              <div className="text-upgrade">
                قم بالترقية الأن للحصول 
                علي جميع الميزات الموجودة
              </div>
            </div>
          </div>
        </Sider>
      </div>
    </aside>
  );
};

export default Sidebar;