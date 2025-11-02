import React from 'react';
import { Server, Layers, Database, Terminal, GitBranch, Wrench, BarChart3 } from 'lucide-react';

const categories = [
  {
    title: 'DevOps & Cloud',
    icon: <Server className="h-5 w-5 text-fuchsia-400" />,
    items: ['Docker', 'Kubernetes', 'Lens', 'Kubespray', 'Ansible', 'Linux', 'Git'],
  },
  {
    title: 'CI/CD & Automation',
    icon: <GitBranch className="h-5 w-5 text-indigo-400" />,
    items: ['GitHub Actions (notions)', 'n8n Workflows'],
  },
  {
    title: 'Data & BI',
    icon: <BarChart3 className="h-5 w-5 text-purple-400" />,
    items: ['Apache Superset', 'PostgreSQL', 'SQL', 'Talend (basics)'],
  },
  {
    title: 'Programming',
    icon: <Terminal className="h-5 w-5 text-pink-400" />,
    items: ['Python', 'C', 'C++', 'Java', 'SQL'],
  },
  {
    title: 'Tools',
    icon: <Wrench className="h-5 w-5 text-violet-400" />,
    items: ['MATLAB', 'Arduino', 'VS Code', 'Git'],
  },
];

const Skills = () => {
  return (
    <section className="relative bg-black py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_10%_10%,rgba(236,72,153,0.06),transparent),radial-gradient(50%_50%_at_90%_20%,rgba(124,58,237,0.08),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex items-center gap-3">
          <Layers className="h-6 w-6 text-fuchsia-400" />
          <h2 className="text-3xl font-bold">Technical Skills</h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="mb-2 flex items-center gap-2 text-sm text-white/70">
                {cat.icon}
                <span>{cat.title}</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {cat.items.map((it) => (
                  <span key={it} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/90">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
