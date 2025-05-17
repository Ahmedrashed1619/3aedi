import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { Layout, Menu, Button, Grid } from "antd";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft, MdOutlineMenu } from "react-icons/md";
import './Sidebar.scss';


const { Sider } = Layout;
const { useBreakpoint } = Grid;

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const menuItems = [
  { 
    key: 'home',
    label: 'الرئيسية',
    icon: (
      <img src={'/HomeIcon.svg'} alt="Home" loading='lazy' />
    ),
    path: '/home'
  },
  { 
    key: 'summary',
    label: 'ملخص الشهر',
    icon: (
      <img src={'/Calendar.svg'} alt="Summary" loading='lazy' />
    ),
    path: '/summary'
  },
  { 
    key: 'editor',
    label: 'محرر البيانات',
    icon: (
      <img src={'/Layers.svg'} alt="Editor" loading='lazy' />
    ),
    path: '/editor'
  },
  { 
    key: 'analytics',
    label: 'التحليلات',
    icon: (
      <img src={'/Chart.svg'} alt="Analytics" loading='lazy' />
    ),
    path: '/analytics'
  },
  { 
    key: 'payments',
    label: 'تحليل الدفع والتقسيط',
    icon: (
      <img src={'/Chart1.svg'} alt="Payments" loading='lazy' />
    ),
    path: '/payments'
  },
  { 
    key: 'cash-on-delivery',
    label: 'الدفع عند الإستلام',
    icon: (
      <img src={'/Wallet.svg'} alt="cash-on-delivery" loading='lazy' />
    ),
    path: '/cash-on-delivery'
  },
  { 
    key: 'returns',
    label: 'المرتجعات',
    icon: (
      <img src={'/Box.svg'} alt="Returns" loading='lazy' />
    ),
    path: '/returns'
  },
  { 
    key: 'reports',
    label: 'التقارير العامة',
    icon: (
      <img src={'/Document.svg'} alt="Reports" loading='lazy' />
    ),
    path: '/reports'
  },
  { 
    key: 'marketing',
    label: 'التسويق',
    icon: (
      <img src={'/Megaphone.svg'} alt="Marketing" loading='lazy' />
    ),
    path: '/marketing'
  },
  { 
    key: 'settings',
    label: 'الإعدادات',
    icon: (
      <img src={'/Icon.svg'} alt="Settings" loading='lazy' />
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
            {collapsed && <img src={'/logo-1.png'} alt="3aedi" loading='lazy' />}
            {!collapsed && <img src={'/logo.png'} alt="3aedi" loading='lazy' />}
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