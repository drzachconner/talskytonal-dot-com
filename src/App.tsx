import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Pediatric from './pages/Pediatric';
import Prenatal from './pages/Prenatal';
import Family from './pages/Family';
import NewPatientCenter from './pages/NewPatientCenter';
import NewPatientForms from './pages/NewPatientForms';
import RequestAppointment from './pages/RequestAppointment';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Thanks from './pages/Thanks';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main id="main" className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/pediatric" element={<Pediatric />} />
            <Route path="/prenatal" element={<Prenatal />} />
            <Route path="/family" element={<Family />} />
            <Route path="/new-patient-center" element={<NewPatientCenter />} />
            <Route path="/new-patient-forms" element={<NewPatientForms />} />
            <Route path="/request-an-appointment" element={<RequestAppointment />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/thanks" element={<Thanks />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
