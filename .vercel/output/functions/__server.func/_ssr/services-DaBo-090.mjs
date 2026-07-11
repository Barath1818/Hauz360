import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader, h as hallImg } from "./router-Bj_OSdnz.mjs";
import { k as kitchenImg, o as officeImg, c as commercialImg } from "./commercial-BYQZEF1y.mjs";
import { b as bedroomImg } from "./bedroom-CgpgAMwL.mjs";
import { v as villaImg } from "./villa-k3wPOkWd.mjs";
import { H as House, c as ChefHat, B as Briefcase, f as Store, g as Box, h as Hammer } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const services = [{
  icon: House,
  img: hallImg,
  title: "Residential Interior Design",
  desc: "We create personalized home interiors that combine elegance, comfort and functionality.",
  items: ["Living Room", "Bedroom", "Dining Area", "TV Unit", "False Ceiling", "Wardrobes", "Lighting Design", "Balcony Design"]
}, {
  icon: ChefHat,
  img: kitchenImg,
  title: "Modular Kitchen",
  desc: "Modern modular kitchens designed for efficiency and style.",
  items: ["Space Optimization", "Premium Finishes", "Smart Storage", "Modern Accessories", "Customized Layouts"]
}, {
  icon: Briefcase,
  img: officeImg,
  title: "Office Interior Design",
  desc: "Professional office interiors designed to improve productivity and brand image.",
  items: ["Workstations", "Cabin Design", "Conference Rooms", "Reception Areas", "Pantry Design", "Lighting & Ceiling"]
}, {
  icon: Store,
  img: commercialImg,
  title: "Commercial Interior Design",
  desc: "Creative interiors for retail and hospitality environments.",
  items: ["Retail Stores", "Showrooms", "Cafes", "Salons", "Restaurants", "Commercial Buildings"]
}, {
  icon: Box,
  img: bedroomImg,
  title: "3D Interior Design",
  desc: "We provide realistic 3D views and walkthroughs before project execution.",
  items: ["Photorealistic Renders", "360° Walkthroughs", "Material Previews", "Lighting Studies"]
}, {
  icon: Hammer,
  img: villaImg,
  title: "Turnkey Interior Solutions",
  desc: "Complete interior execution from design planning to final installation.",
  items: ["Single-point Accountability", "Project Management", "Quality Control", "On-Time Handover"]
}];
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "What We Offer", title: "Interior Design Services" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-luxury space-y-24", children: services.map((s, i) => {
      const Icon = s.icon;
      const reverse = i % 2 === 1;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `grid md:grid-cols-2 gap-12 items-center ${reverse ? "md:[&>:first-child]:order-2" : ""}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.img, alt: s.title, loading: "lazy", width: 800, height: 600, className: "w-full h-[480px] object-cover shadow-luxury" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 bg-gradient-gold grid place-items-center mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-6 h-6 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl mb-4", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-6", children: s.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: s.items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm py-2 border-b border-border/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 bg-gold rounded-full" }),
            it
          ] }, it)) })
        ] })
      ] }, s.title);
    }) }) })
  ] });
}
export {
  Services as component
};
