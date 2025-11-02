import React from 'react';
import { GraduationCap, Award, Users, Languages } from 'lucide-react';

const EducationCerts = () => {
  return (
    <section className="relative bg-zinc-950 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_80%_10%,rgba(236,72,153,0.06),transparent),radial-gradient(50%_50%_at_10%_80%,rgba(124,58,237,0.08),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8 grid gap-10 lg:grid-cols-2">
        {/* Education */}
        <div>
          <div className="flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-fuchsia-400" />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold">ENIT — Cycle Ingénieur en Télécommunications</h3>
              <p className="text-white/70">2024 – Present</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold">IPEIM — Mathématiques & Physique</h3>
              <p className="text-white/70">2022 – 2024</p>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 text-indigo-400" />
              <h3 className="text-2xl font-semibold">Associations & Leadership</h3>
            </div>
            <ul className="mt-4 grid gap-3 text-white/80">
              <li className="rounded-lg border border-white/10 bg-white/5 p-4">IEEE ENIT Student Branch — Active Member (organized TUNED Tech Event)</li>
              <li className="rounded-lg border border-white/10 bg-white/5 p-4">IEEE Computer Society ENIT SB — Treasurer (organized IEEEXTREME, WieAct, IEEELUMEN)</li>
              <li className="rounded-lg border border-white/10 bg-white/5 p-4">Enactus ENIT — Active Member</li>
            </ul>
          </div>
        </div>

        {/* Certifications & Languages */}
        <div>
          <div className="flex items-center gap-3">
            <Award className="h-6 w-6 text-fuchsia-400" />
            <h2 className="text-3xl font-bold">Certifications</h2>
          </div>
          <div className="mt-6 space-y-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold">NVIDIA Deep Learning Institute</h3>
              <p className="text-white/80">Efficient Large Language Model (LLM) Customization — 2024</p>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex items-center gap-3">
              <Languages className="h-6 w-6 text-indigo-400" />
              <h3 className="text-2xl font-semibold">Languages</h3>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-white/70">French</p>
                <p className="text-white">Native/Fluent</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-white/70">English</p>
                <p className="text-white">B2 Intermediate</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-white/70">Arabic</p>
                <p className="text-white">Native</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-white/70">German</p>
                <p className="text-white">A2</p>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-fuchsia-500/20 bg-gradient-to-br from-fuchsia-500/10 to-indigo-500/10 p-6">
              <p className="text-sm text-white/80">Open to opportunities in DevOps, Cloud Infrastructure, and Data Automation. Let's build resilient, automated systems together.</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <a href="mailto:mohamedfiras.berriri@etudiant-enit.utm.tn" className="rounded-full bg-fuchsia-600 px-4 py-2 font-medium text-white">Email</a>
                <a href="https://linkedin.com/in/mohamed-firas-berriri-287b06337" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/90 hover:bg-white/10">LinkedIn</a>
                <a href="https://github.com/Firas-eng-hub" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/90 hover:bg-white/10">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationCerts;
