import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SectionHeading } from "./router-Bj_OSdnz.mjs";
import { v as villaImg } from "./villa-k3wPOkWd.mjs";
import { E as Eye, T as Target, C as CircleCheck } from "../_libs/lucide-react.mjs";
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
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "About Us", title: "Designing Spaces, Crafting Stories" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxury grid md:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: villaImg, alt: "Our studio", loading: "lazy", width: 800, height: 600, className: "w-full h-[520px] object-cover shadow-luxury" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Who We Are", title: "A creative interior design studio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4", children: "Hauz360 Design Studio is a creative interior design company focused on delivering customized design solutions for residential and commercial spaces." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "We believe interiors should not only look beautiful but also improve lifestyle, comfort and productivity. Our expert team handles every stage — from concept planning and 3D visualization to execution and final handover." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxury grid md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-10 border border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-10 h-10 text-gold mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl mb-3", children: "Our Vision" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "To become one of the most trusted and innovative interior design brands delivering world-class spaces with creativity and quality." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-10 border border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "w-10 h-10 text-gold mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl mb-3", children: "Our Mission" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-muted-foreground", children: ["Deliver high-quality interior solutions", "Create customer-focused designs", "Maintain transparency and professionalism", "Complete projects on time", "Provide affordable luxury interiors"].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-gold mt-1 shrink-0" }),
          " ",
          m
        ] }, m)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxury", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { center: true, eyebrow: "Why Choose Us", title: "Crafted with care, delivered with pride" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: ["Customized Interior Solutions", "Premium Quality Materials", "Experienced Design Team", "Transparent Pricing", "On-Time Project Delivery", "Modern & Luxury Designs", "End-to-End Project Management", "Customer Satisfaction Focused"].map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border/60 p-6 hover:border-gold transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-gold text-2xl mb-2", children: [
          "0",
          i + 1
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: f })
      ] }, f)) })
    ] }) })
  ] });
}
function PageHeader({
  eyebrow,
  title
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-dark text-primary-foreground py-24 -mt-px", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxury text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-gold" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs tracking-[0.3em] uppercase text-gold", children: eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-gold" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-6xl", children: title })
  ] }) });
}
export {
  PageHeader,
  About as component
};
