import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader, r as reviews } from "./router-DwrnnI3p.mjs";
import { Q as Quote, i as Star } from "../_libs/lucide-react.mjs";
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
function Testimonials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Testimonials", title: "What Our Clients Say" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-luxury grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: reviews.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-card border border-border/60 p-8 rounded-2xl hover:border-gold hover:shadow-luxury transition-all duration-300", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "absolute top-6 right-6 w-10 h-10 text-gold/15" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 text-gold mb-4", children: [...Array(r.rating)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-4 h-4 fill-gold" }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "italic leading-relaxed text-foreground/90 mb-6", children: [
        '"',
        r.q,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg", children: r.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mt-1", children: r.role })
      ] })
    ] }, r.n)) }) })
  ] });
}
export {
  Testimonials as component
};
