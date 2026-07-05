import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "./about";
import livingImg from "@/assets/hero_living2.jpg";
import kitchenImg from "@/assets/kitchen.jpg";
import officeImg from "@/assets/office.jpg";
import commercialImg from "@/assets/commercial.jpg";
import bedroomImg from "@/assets/bed.jpg";
import villaImg from "@/assets/vilas.jpg";
import furniture from "@/assets/furniture.jpg";
import celing from "@/assets/ceiling.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Hauz360 Design Studio" },
      { name: "description", content: "Visual gallery of our interior design work across living rooms, bedrooms, kitchens, offices and commercial spaces." },
      { property: "og:title", content: "Gallery — Hauz360" },
      { property: "og:description", content: "Browse our interior design gallery." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const items = [
  { img: livingImg, cat: "Living Room", size: "tall" },
  { img: kitchenImg, cat: "Kitchen", size: "wide" },
  { img: bedroomImg, cat: "Bedroom", size: "tall" },
  { img: officeImg, cat: "Office", size: "wide" },
  { img: villaImg, cat: "Villa", size: "tall" },
  { img: commercialImg, cat: "Commercial", size: "wide" },
  { img: celing, cat: "Ceiling Design", size: "wide" },
  { img: furniture, cat: "Furniture", size: "tall" },
];

function Gallery() {
  return (
    <>
      <PageHeader eyebrow="Visual Stories" title="Interior Design Gallery" />
      <section className="py-20">
        <div className="container-luxury">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {items.map((it, i) => (
              <div key={i} className="break-inside-avoid relative group overflow-hidden">
                <img
                  src={it.img}
                  alt={it.cat}
                  loading="lazy"
                  width={800}
                  height={it.size === "tall" ? 1000 : 600}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${it.size === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-gold text-xs tracking-[0.25em] uppercase">{it.cat}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
