import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DashboardMockup from './components/DashboardMockup';
import Benefits from './components/Benefits';
import Features from './components/Features';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="dark min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Header />
      <Hero />
      <DashboardMockup />
      <Benefits />
      <Features />
      <Services />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
