import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail, MapPin, Phone, Rocket, Globe } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft cosmic gradient overlays (non-interactive) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />

      {/* Foreground content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
            <Rocket className="h-4 w-4 text-fuchsia-400" />
            <span className="text-sm text-white/80">Cosmic DevOps Portfolio</span>
          </div>

          <h1 className="mt-6 bg-gradient-to-br from-white via-white to-fuchsia-200 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl">
            Mohamed Firas
            <span className="text-fuchsia-300"> Berriri</span>
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-white/80">
            1st Year Telecommunications Engineering Student at ENIT — passionate about
            DevOps, Cloud Infrastructure, Data Automation, and Business Intelligence.
          </p>

          {/* Meta info */}
          <div className="mt-4 flex flex-wrap items-center gap-4 text-white/70">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> Msaken, Sousse, Tunisia</span>
            <span className="inline-flex items-center gap-2"><Globe className="h-4 w-4" /> ENIT</span>
            <a href="tel:+21655664620" className="inline-flex items-center gap-2 hover:text-white"><Phone className="h-4 w-4" /> +216 55 664 620</a>
            <a href="mailto:mohamedfiras.berriri@etudiant-enit.utm.tn" className="inline-flex items-center gap-2 hover:text-white"><Mail className="h-4 w-4" /> Email</a>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://linkedin.com/in/mohamed-firas-berriri-287b06337"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-fuchsia-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-600/30 transition hover:brightness-110"
            >
              <Linkedin className="h-5 w-5" /> Connect on LinkedIn
            </a>
            <a
              href="https://github.com/Firas-eng-hub"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              <Github className="h-5 w-5" /> Explore GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
