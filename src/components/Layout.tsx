import React, { ReactNode }  from 'react';
import Menu from './Menu';
import { useTranslation } from 'next-i18next';

interface LayoutProps {
    children: ReactNode;
  }

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { t } = useTranslation('common');

  return (
    <div>
      <Menu />
      <div className="content flex justify-center">
        {children}
      </div>
      <footer className="flex w-full bg-rose-500 h-20 bottom-0 fixed justify-center items-center text-white">
        {t('footerText')}
      </footer>
    </div>
  );
};

export default Layout;