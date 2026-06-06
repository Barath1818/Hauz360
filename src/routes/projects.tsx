import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "./about";
import livingImg from "@/assets/hero-living.jpg";
import kitchenImg from "@/assets/kitchen.jpg";
import officeImg from "@/assets/office.jpg";
import commercialImg from "@/assets/commercial.jpg";
import villaImg from "@/assets/villa.jpg";
import { useState } from "react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Hauz360 Design Studio" },
      { name: "description", content: "Browse our portfolio of luxury homes, modern apartments, office spaces, modular kitchens, villas and commercial projects." },
      { property: "og:title", content: "Our Projects — Hauz360" },
      { property: "og:description", content: "Portfolio of recent interior design projects." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

const projects = [
  { img: livingImg, name: "Skyline Penthouse", category: "Luxury Home", location: "Chennai, India", area: "4,200 sqft", style: "Contemporary Luxury", time: "16 weeks" },
  { img: villaImg, name: "Heritage Villa", category: "Villa", location: "Chennai, India", area: "6,800 sqft", style: "Classical Modern", time: "22 weeks" },
  { img: officeImg, name: "Apex Corporate HQ", category: "Office", location: "Dubai, UAE", area: "12,000 sqft", style: "Corporate Modern", time: "18 weeks" },
  { img: kitchenImg, name: "Aurelia Modular Kitchen", category: "Kitchen", location: "Chennai, India", area: "320 sqft", style: "Modular Premium", time: "6 weeks" },
  { img: commercialImg, name: "Maison Boutique", category: "Commercial", location: "Dubai, UAE", area: "2,400 sqft", style: "Boutique Retail", time: "10 weeks" },
];

const categories = ["All", "Luxury Home", "Villa", "Office", "Kitchen", "Commercial"];

function Projects() {
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <>
      <PageHeader eyebrow="Portfolio" title="Our Recent Projects" />
      <section className="py-16">
        <div className="container-luxury">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2 text-sm tracking-wide border transition-all ${
                  filter === c ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-gold hover:text-gold"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map(p => (
              <article key={p.name} className="group bg-card border border-border/60 overflow-hidden hover:shadow-luxury transition-all">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.name} loading="lazy" width={800} height={600} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <span className="text-xs tracking-[0.25em] uppercase text-gold">{p.category}</span>
                  <h2 className="font-display text-2xl mt-1 mb-4">{p.name}</h2>
                  <dl className="grid grid-cols-2 gap-y-2 text-sm">
                    <dt className="text-muted-foreground">Location</dt><dd>{p.location}</dd>
                    <dt className="text-muted-foreground">Area</dt><dd>{p.area}</dd>
                    <dt className="text-muted-foreground">Style</dt><dd>{p.style}</dd>
                    <dt className="text-muted-foreground">Duration</dt><dd>{p.time}</dd>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
