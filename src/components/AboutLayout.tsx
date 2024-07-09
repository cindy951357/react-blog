import { ReactNode } from 'react';
import Menu from './Menu';  // 主選單
import AboutMenu from './AboutMenu';  // About 頁面的子選單

type AboutLayoutProps = {
  children: ReactNode;
};

const AboutLayout = ({ children }: AboutLayoutProps) => {
  return (
    <div>
      <div className='grid grid-cols-6 md:grid-cols-12'>
        <div className="dummy col-span-1"></div>
        <div className='col-span-9'>{children}</div>
        <div className="col-span-1">
          <AboutMenu />
        </div>
        <div className="dummy sol-span-1"></div>
      </div>
    </div>
  );
};

export default AboutLayout;
