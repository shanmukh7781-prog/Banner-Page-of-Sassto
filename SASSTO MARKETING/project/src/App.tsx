import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InstallSteps from './components/InstallSteps';
import PredictiveInsights from './components/PredictiveInsights';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="install">
          <InstallSteps />
        </section>
        <section id="insights">
          <PredictiveInsights />
        </section>
        <section id="features">
          <Features />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;