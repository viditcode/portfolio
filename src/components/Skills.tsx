import { skillGroups } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-20">
      <p className="font-mono text-xs tracking-widest text-ink-faint uppercase mb-3">
        // stack
      </p>
      <h2 className="text-2xl font-semibold text-ink mb-8">Skills</h2>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3 className="font-mono text-xs font-semibold text-signal uppercase tracking-wide mb-3">
              {group.label}
            </h3>
            <ul className="space-y-1.5">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-ink-soft">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
