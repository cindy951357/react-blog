import React, { ReactNode }  from 'react';
import Menu from './Menu';

interface LayoutProps {
    children: ReactNode;
  }

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Menu />
      <div className="content">
        {children}
      </div>
    </div>
  );
};

export default Layout;