import BootLog from "@/components/BootLog";
import CaseStudyCard from "@/components/CaseStudyCard";
import Skills from "@/components/Skills";
import { About, Contact } from "@/components/AboutContact";
import { caseStudies } from "@/data/content";

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 pt-16 pb-8 sm:pt-24">
        <BootLog />
      </section>

      <section id="work" className="mx-auto max-w-4xl px-6 py-20">
        <p className="font-mono text-xs tracking-widest text-ink-faint uppercase mb-3">
          // case studies
        </p>
        <h2 className="text-2xl font-semibold text-ink mb-8">Work</h2>
        <div className="grid gap-5 sm:grid-cols-2">
          {caseStudies.map((cs) => (
            <CaseStudyCard key={cs.id} cs={cs} />
          ))}
        </div>
      </section>

      <Skills />
      <About />
      <Contact />
    </>
  );
}
