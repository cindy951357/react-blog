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
    <div className='flex flex-col h-full'>
      <Header/>
      <div className="flex flex-col h-full">
          <Menu />
        <div className="content main-layout flex justify-center w-100
          overflow-y-scroll">
          {children}
        </div>
      </div>      
      <Footer/>
    </div>
  );
};

export default Layout;