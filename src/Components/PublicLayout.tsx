import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header.tsx';
import Footer from './Footer.tsx';

interface PublicLayoutProps {
  children?: React.ReactNode;
}

const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="public-layout-content">
        {children ? children : <Outlet />}
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;
