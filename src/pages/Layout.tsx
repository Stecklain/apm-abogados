import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../hooks/ScrollToTop';

export default function Layout() {
  const location = useLocation();
  const isRootPath = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen">
       <ScrollToTop />
      {!isRootPath && <Header />}
      <main className="flex-grow relative z-10">
        <Outlet />
      </main>
      {!isRootPath && <Footer />}
    </div>
  );
}
