import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "./about";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Design Process — Hauz360 Design Studio" },
      { name: "description", content: "Transparent 3-stage design process with clear payment milestones: Booking (10%), Placement Order (40%), Execution & Pre-Delivery (50%)." },
      { property: "og:title", content: "Our Design Process — Hauz360" },
      { property: "og:description", content: "3-stage process with transparent payment milestones." },
      { property: "og:url", content: "/process" },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: Process,
});

const steps = [
  { n: "10%", title: "Booking Fee", desc: "Paid upfront to lock in your designer, begin space planning, and initiate 3D visualizations." },
  { n: "40%", title: "Placement Order / Initiation", desc: "Due once you finalize the designs and sign off on technical plans. This triggers material procurement and factory manufacturing." },
  { n: "50%", title: "Execution & Pre-Delivery", desc: "Usually divided into progressive milestones during execution. The final balance is due prior to modular delivery, installation, or commencement of major on-site services." },
];

function Process() {
  return (
    <>
      <PageHeader eyebrow="How We Work" title="Our Design Process" />
      <section className="py-20">
        <div className="container-luxury">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl mb-2">Complete Payment Structure (100%)</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Our transparent 3-stage payment model ensures every milestone is clear from the start.</p>
          </div>
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
