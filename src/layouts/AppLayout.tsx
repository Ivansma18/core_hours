import React from 'react'
import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'
import { Footer } from '../components/Footer'
import '../css/AppLayout.css'

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <Sidebar />
      <div className="layout-body">        
        <main className="content">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

