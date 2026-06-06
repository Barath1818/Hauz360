import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "./about";
import { Home, ChefHat, Briefcase, Store, Box, Hammer } from "lucide-react";
import livingImg from "@/assets/hero-living.jpg";
import kitchenImg from "@/assets/kitchen.jpg";
import officeImg from "@/assets/office.jpg";
import commercialImg from "@/assets/commercial.jpg";
import bedroomImg from "@/assets/bedroom.jpg";
import villaImg from "@/assets/villa.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Hauz360 Design Studio" },
      { name: "description", content: "Residential, modular kitchen, office, commercial, 3D and turnkey interior design services." },
      { property: "og:title", content: "Our Services — Hauz360" },
      { property: "og:description", content: "Complete interior design services." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: [
            "Residential Interior Design",
            "Modular Kitchen",
            "Office Interior Design",
            "Commercial Interior Design",
            "3D Interior Design",
            "Turnkey Interior Solutions",
          ].map((name, i) => ({
            "@type": "Service",
            position: i + 1,
            name,
            provider: { "@type": "LocalBusiness", name: "Hauz360 Design Studio" },
            areaServed: "IN",
          })),
        }),
      },
    ],
  }),
  component: Services,
});

const services = [
  {
    icon: Home, img: livingImg, title: "Residential Interior Design",
    desc: "We create personalized home interiors that combine elegance, comfort and functionality.",
    items: ["Living Room","Bedroom","Dining Area","TV Unit","False Ceiling","Wardrobes","Lighting Design","Balcony Design"],
  },
  {
    icon: ChefHat, img: kitchenImg, title: "Modular Kitchen",
    desc: "Modern modular kitchens designed for efficiency and style.",
    items: ["Space Optimization","Premium Finishes","Smart Storage","Modern Accessories","Customized Layouts"],
  },
  {
    icon: Briefcase, img: officeImg, title: "Office Interior Design",
    desc: "Professional office interiors designed to improve productivity and brand image.",
    items: ["Workstations","Cabin Design","Conference Rooms","Reception Areas","Pantry Design","Lighting & Ceiling"],
  },
  {
    icon: Store, img: commercialImg, title: "Commercial Interior Design",
    desc: "Creative interiors for retail and hospitality environments.",
    items: ["Retail Stores","Showrooms","Cafes","Salons","Restaurants","Commercial Buildings"],
  },
  {
    icon: Box, img: bedroomImg, title: "3D Interior Design",
    desc: "We provide realistic 3D views and walkthroughs before project execution.",
    items: ["Photorealistic Renders","360° Walkthroughs","Material Previews","Lighting Studies"],
  },
  {
    icon: Hammer, img: villaImg, title: "Turnkey Interior Solutions",
    desc: "Complete interior execution from design planning to final installation.",
    items: ["Single-point Accountability","Project Management","Quality Control","On-Time Handover"],
  },
];

function Services() {
  return (
    <>
      <PageHeader eyebrow="What We Offer" title="Interior Design Services" />
      <section className="py-20">
        <div className="container-luxury space-y-24">
          {services.map((s, i) => {
            const Icon = s.icon;
            const reverse = i % 2 === 1;
            return (
              <div key={s.title} className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? "md:[&>:first-child]:order-2" : ""}`}>
                <img src={s.img} alt={s.title} loading="lazy" width={800} height={600} className="w-full h-[480px] object-cover shadow-luxury" />
                <div>
                  <div className="w-14 h-14 bg-gradient-gold grid place-items-center mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-display text-4xl mb-4">{s.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {s.items.map(it => (
                      <div key={it} className="flex items-center gap-2 text-sm py-2 border-b border-border/50">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                        {it}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
