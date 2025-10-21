import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Paper from './pages/Paper';
import Videos from './pages/Videos';
import Modules from './pages/Modules';
import Books from './pages/Books';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import { organizationSchema } from './lib/schema';
import { trackAITraffic } from './lib/analytics';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AITrafficTracker() {
  useEffect(() => {
    trackAITraffic();
  }, []);

  return null;
}

function GlobalSchema() {
  useEffect(() => {
    const orgScript = document.createElement('script');
    orgScript.type = 'application/ld+json';
    orgScript.text = JSON.stringify(organizationSchema());
    document.head.appendChild(orgScript);

    return () => {
      if (orgScript.parentNode) {
        document.head.removeChild(orgScript);
      }
    };
  }, []);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <GlobalSchema />
      <AITrafficTracker />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main id="main" className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/paper" element={<Paper />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/books" element={<Books />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
