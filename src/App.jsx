import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp/FloatingWhatsApp';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import AppRoutes from './routes/AppRoutes';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <main>
          <AppRoutes />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </BrowserRouter>
    </HelmetProvider>
  );
}
