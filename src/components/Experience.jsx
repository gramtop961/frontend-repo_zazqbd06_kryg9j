import React from 'react';
import { Server, GitBranch, Box, Cog } from 'lucide-react';

const experiences = [
  {
    title: 'DevOps & Cloud Internship',
    org: 'L2T, Sousse',
    period: '06/2025 – 07/2025',
    highlights: [
      'Kubernetes cluster deployment using Kubespray, Docker, Ansible',
      'Multi-node service orchestration (pods, services, deployments)',
      'Cluster supervision and management using Lens',
      'CI/CD best practices exploration',
      'Docker containerization for enterprise applications',
    ],
    icon: <Server className="h-5 w-5 text-fuchsia-400" />,
  },
  {
    title: 'Personal Project: n8n Workflow Automation',
    org: 'Independent',
    period: '08/2025',
    highlights: [
      'Email and WhatsApp agent automation',
      'Webhook integration and API event triggers',
      'Automated message send/receive/filter scenarios',
    ],
    icon: <Cog className="h-5 w-5 text-indigo-400" />,
  },
  {
    title: 'Academic Project: Arducam Embedded Image Processing',
    org: 'ENIT',
    period: '2025',
    highlights: [
      'Arduino-based image capture and processing system',
      'MATLAB data modeling and analysis',
    ],
    icon: <Box className="h-5 w-5 text-purple-400" />,
  },
];

const Experience = () => {
  return (
    <section className="relative bg-zinc-950 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(139,92,246,0.1),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(236,72,153,0.08),transparent_35%)]" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex items-center gap-3">
          <GitBranch className="h-6 w-6 text-fuchsia-400" />
          <h2 className="text-3xl font-bold">Experience</h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {experiences.map((exp, idx) => (
            <div key={idx} className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 transition hover:border-fuchsia-400/30">
              <div className="mb-3 flex items-center gap-2 text-sm text-white/70">
                {exp.icon}
                <span>{exp.period}</span>
              </div>
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="mt-1 text-white/70">{exp.org}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="list-disc pl-4 marker:text-fuchsia-400">{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
