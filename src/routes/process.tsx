import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "./about";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process — Hauz360 Design Studio" },
      { name: "description", content: "From consultation to final handover — a transparent 7-step interior design process." },
      { property: "og:title", content: "Our Process — Hauz360" },
      { property: "og:description", content: "7 steps from consultation to handover." },
      { property: "og:url", content: "/process" },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: Process,
});

const steps = [
  { n: "01", title: "Consultation", desc: "Understanding client requirements, style preferences and budget." },
  { n: "02", title: "Site Visit", desc: "Analyzing the project space and taking detailed measurements." },
  { n: "03", title: "Design Planning", desc: "Creating concepts, layouts and mood boards tailored to your vision." },
  { n: "04", title: "3D Visualization", desc: "Providing realistic 3D designs and walkthroughs for approval." },
  { n: "05", title: "Material Selection", desc: "Selecting premium finishes, colors, textures and furnishings." },
  { n: "06", title: "Execution", desc: "Professional implementation with strict quality control." },
  { n: "07", title: "Final Handover", desc: "Project completion with full client walkthrough and satisfaction." },
];

function Process() {
  return (
    <>
      <PageHeader eyebrow="How We Work" title="Our Design Process" />
      <section className="py-20">
        <div className="container-luxury">
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border" />
            <div className="space-y-12">
              {steps.map((s, i) => (
                <div key={s.n} className={`grid md:grid-cols-2 gap-8 items-center ${i % 2 ? "md:[&>:first-child]:order-2" : ""}`}>
                  <div className={`${i % 2 ? "md:text-left" : "md:text-right"}`}>
                    <span className="font-display text-7xl text-gold/30">{s.n}</span>
                    <h2 className="font-display text-3xl mt-2 mb-3">{s.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                  <div className="hidden md:flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-gold grid place-items-center text-primary font-display text-2xl shadow-gold">
                      {i + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
