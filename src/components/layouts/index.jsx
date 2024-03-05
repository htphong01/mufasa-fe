import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

export default function Layout() {
  return (
    <div className="app">
      <Toaster position="top-center" reverseOrder={false} toastOptions={{ duration: 2500 }} containerClassName='toast-container' />
      <Header />
      <div className="app-content">
        <Outlet />
      </div>
      <Footer style={{ position: 'unset' }} />
    </div>
  );
}
