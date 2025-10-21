import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileCTA from './components/MobileCTA';
import MergerNotification from './components/MergerNotification';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import MeetDrZach from './pages/MeetDrZach';
import Pediatric from './pages/Pediatric';
import Prenatal from './pages/Prenatal';
import Family from './pages/Family';
import NewPatientCenter from './pages/NewPatientCenter';
import NewPatientForms from './pages/NewPatientForms';
import RequestAppointment from './pages/RequestAppointment';
import ScheduleAppointment from './pages/ScheduleAppointment';
import EventsWorkshops from './pages/EventsWorkshops';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Thanks from './pages/Thanks';
import NotFound from './pages/NotFound';
import ThreeWaysToPoop from './pages/ThreeWaysToPoop';
import ThreeStepsTransition from './pages/ThreeStepsTransition';
import RHKNGuide from './pages/RHKNGuide';
import ThreeWaysToSleep from './pages/ThreeWaysToSleep';
import FreeGuidesForParents from './pages/FreeGuidesForParents';
import TalskyTonal from './pages/TalskyTonal';
import InsightScans from './pages/InsightScans';
import AnswerHub from './pages/AnswerHub';
import { organizationSchema, personSchema, localBusinessSchema } from './lib/schema';
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
    const scripts: HTMLScriptElement[] = [];

    const orgScript = document.createElement('script');
    orgScript.type = 'application/ld+json';
    orgScript.text = JSON.stringify(organizationSchema());
    document.head.appendChild(orgScript);
    scripts.push(orgScript);

    const personScript = document.createElement('script');
    personScript.type = 'application/ld+json';
    personScript.text = JSON.stringify(personSchema());
    document.head.appendChild(personScript);
    scripts.push(personScript);

    const localScript = document.createElement('script');
    localScript.type = 'application/ld+json';
    localScript.text = JSON.stringify(localBusinessSchema());
    document.head.appendChild(localScript);
    scripts.push(localScript);

    return () => {
      scripts.forEach((script) => {
        if (script.parentNode) {
          document.head.removeChild(script);
        }
      });
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
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/meet-dr-zach" element={<MeetDrZach />} />
            <Route path="/pediatric" element={<Pediatric />} />
            <Route path="/prenatal" element={<Prenatal />} />
            <Route path="/family" element={<Family />} />
            <Route path="/new-patient-center" element={<NewPatientCenter />} />
            <Route path="/new-patient-forms" element={<NewPatientForms />} />
            <Route path="/request-an-appointment" element={<ScheduleAppointment />} />
            <Route path="/schedule-appointment" element={<ScheduleAppointment />} />
            <Route path="/book-appointment" element={<ScheduleAppointment />} />
            <Route path="/events-workshops" element={<EventsWorkshops />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/thanks" element={<Thanks />} />
            <Route path="/3-ways-to-poop" element={<ThreeWaysToPoop />} />
            <Route path="/3-steps-transition" element={<ThreeStepsTransition />} />
            <Route path="/rhkn-guide" element={<RHKNGuide />} />
            <Route path="/3-ways-to-sleep" element={<ThreeWaysToSleep />} />
            <Route path="/free-guides-for-parents" element={<FreeGuidesForParents />} />
            <Route path="/talsky-tonal-chiropractic" element={<TalskyTonal />} />
            <Route path="/insight-scans" element={<InsightScans />} />
            <Route path="/answers" element={<AnswerHub />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <MobileCTA />
        <MergerNotification />
      </div>
    </BrowserRouter>
  );
}

export default App;
