import React, { ReactNode }  from 'react';
import Menu from './Menu';
import { useTranslation } from 'next-i18next';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
    children: ReactNode;
  }

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { t } = useTranslation('common');

  return (
    <div>
      <Header/>
      <Menu />
      <div className="content flex justify-center">
        {children}
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;