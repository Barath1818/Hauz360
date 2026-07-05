import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader } from "./router-BW5Q1yVC.mjs";
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
import "../_libs/lucide-react.mjs";
const steps = [{
  n: "10%",
  title: "Booking Fee",
  desc: "Paid upfront to lock in your designer, begin space planning, and initiate 3D visualizations."
}, {
  n: "40%",
  title: "Placement Order / Initiation",
  desc: "Due once you finalize the designs and sign off on technical plans. This triggers material procurement and factory manufacturing."
}, {
  n: "50%",
  title: "Execution & Pre-Delivery",
  desc: "Usually divided into progressive milestones during execution. The final balance is due prior to modular delivery, installation, or commencement of major on-site services."
}];
function Process() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "How We Work", title: "Our Design Process" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxury", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl mb-2", children: "Complete Payment Structure (100%)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "Our transparent 3-stage payment model ensures every milestone is clear from the start." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-12", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `grid md:grid-cols-2 gap-8 items-center ${i % 2 ? "md:[&>:first-child]:order-2" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${i % 2 ? "md:text-left" : "md:text-right"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-7xl text-gold/30", children: s.n }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl mt-2 mb-3", children: s.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: s.desc })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-gradient-gold grid place-items-center text-primary font-display text-2xl shadow-gold", children: i + 1 }) })
        ] }, s.n)) })
      ] })
    ] }) })
  ] });
}
export {
  Process as component
};
