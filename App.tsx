import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import TaxComparison from './components/TaxComparison';
import Testimonials from './components/Testimonials';
import CostExplanation from './components/CostExplanation';
import Transparency from './components/Transparency';
import Booking from './components/Booking';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Process />
        <TaxComparison />
        <Testimonials />
        <CostExplanation />
        <Transparency />
        <Booking />
      </main>
      <Footer />
    </div>
  );
};

export default App;