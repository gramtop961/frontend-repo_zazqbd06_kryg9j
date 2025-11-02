import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import EducationCerts from './components/EducationCerts';

function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Hero />
      <Experience />
      <Skills />
      <EducationCerts />

      {/* Minimal cosmic footer */}
      <footer className="border-t border-white/10 bg-black/80 px-6 py-10 text-center">
        <p className="text-sm text-white/70">
          © {new Date().getFullYear()} Mohamed Firas Berriri · Crafted in a dark cosmic aesthetic
        </p>
      </footer>
    </div>
  );
}

export default App;
