import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Eye, Target, CheckCircle2 } from "lucide-react";
import villaImg from "@/assets/villa.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Hauz360 Design Studio" },
      { name: "description", content: "Creative interior design company delivering customized residential & commercial design solutions across India." },
      { property: "og:title", content: "About Hauz360 Design Studio" },
      { property: "og:description", content: "Who we are, our vision, mission and why clients choose us." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader eyebrow="About Us" title="Designing Spaces, Crafting Stories" />

      <section className="py-20">
        <div className="container-luxury grid md:grid-cols-2 gap-16 items-center">
          <img src={villaImg} alt="Our studio" loading="lazy" width={800} height={600} className="w-full h-[520px] object-cover shadow-luxury" />
          <div>
            <SectionHeading eyebrow="Who We Are" title="A creative interior design studio" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hauz360 Design Studio is a creative interior design company focused on
              delivering customized design solutions for residential and commercial spaces.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe interiors should not only look beautiful but also improve lifestyle,
              comfort and productivity. Our expert team handles every stage — from concept
              planning and 3D visualization to execution and final handover.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/40">
        <div className="container-luxury grid md:grid-cols-2 gap-8">
          <div className="bg-card p-10 border border-border/60">
            <Eye className="w-10 h-10 text-gold mb-4" />
            <h3 className="font-display text-3xl mb-3">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To become one of the most trusted and innovative interior design brands
              delivering world-class spaces with creativity and quality.
            </p>
          </div>
          <div className="bg-card p-10 border border-border/60">
            <Target className="w-10 h-10 text-gold mb-4" />
            <h3 className="font-display text-3xl mb-3">Our Mission</h3>
            <ul className="space-y-2 text-muted-foreground">
              {["Deliver high-quality interior solutions","Create customer-focused designs","Maintain transparency and professionalism","Complete projects on time","Provide affordable luxury interiors"].map(m => (
                <li key={m} className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-gold mt-1 shrink-0" /> {m}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-luxury">
          <SectionHeading center eyebrow="Why Choose Us" title="Crafted with care, delivered with pride" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Customized Interior Solutions","Premium Quality Materials","Experienced Design Team",
              "Transparent Pricing","On-Time Project Delivery","Modern & Luxury Designs",
              "End-to-End Project Management","Customer Satisfaction Focused",
            ].map((f, i) => (
              <div key={f} className="bg-card border border-border/60 p-6 hover:border-gold transition-colors">
                <div className="font-display text-gold text-2xl mb-2">0{i+1}</div>
                <p className="font-medium">{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function PageHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <section className="bg-gradient-dark text-primary-foreground py-24 -mt-px">
      <div className="container-luxury text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="h-px w-10 bg-gold" />
          <span className="text-xs tracking-[0.3em] uppercase text-gold">{eyebrow}</span>
          <span className="h-px w-10 bg-gold" />
        </div>
        <h1 className="font-display text-5xl md:text-6xl">{title}</h1>
      </div>
    </section>
  );
}
