import { Outlet } from 'react-router-dom';
import Header from '../pages/Header';
import Footer from '../pages/Footer';
import ScrollToTop from '../hooks/ScrollToTop';

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
       <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Outlet /> {/* Aquí se renderizarán las páginas */}
      </main>
      <Footer />
    </div>
  );
}
