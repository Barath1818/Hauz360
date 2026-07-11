import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { R as Route$b } from "./router-Bj_OSdnz.mjs";
import { C as CircleCheck, S as Sparkles, b as Mail, P as Phone, H as House, a as MapPin } from "../_libs/lucide-react.mjs";
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
function ThankYou() {
  const searchParams = Route$b.useSearch();
  const handleGoHome = () => {
    window.location.href = "/";
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "min-h-screen bg-gradient-to-br from-background via-background to-background/95 flex items-center justify-center px-4 py-12 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border/60 rounded-3xl overflow-hidden shadow-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-primary/10 via-transparent to-gold/5 border-b border-border/40 p-8 sm:p-12 md:p-16 text-center relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 opacity-30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold to-gold/60 flex items-center justify-center shadow-lg animate-in fade-in zoom-in duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-12 h-12 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-2 text-gold text-xs uppercase tracking-[0.25em] font-semibold mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4" }),
            "Success",
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-primary to-gold bg-clip-text text-transparent", children: "Thank You!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base sm:text-lg text-muted-foreground max-w-md mx-auto leading-relaxed", children: "Your inquiry has been successfully received. We're excited to hear from you and will get back to you within 24 hours." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 sm:p-10 md:p-12 space-y-8", children: [
        searchParams.name && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background/50 border border-border/40 rounded-2xl p-6 sm:p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-5 h-5 text-gold" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs uppercase tracking-widest font-semibold text-muted-foreground", children: "Inquiry Summary" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-2", children: "Your Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-medium text-foreground", children: searchParams.name })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-2", children: "Email Address" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-medium text-foreground break-all", children: searchParams.email })
            ] }),
            searchParams.phone && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-2", children: "Phone Number" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base font-medium text-foreground", children: searchParams.phone })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/20 rounded-2xl p-6 sm:p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-semibold text-foreground mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 text-gold" }),
            "What Happens Next?"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "space-y-3 text-sm sm:text-base text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center w-6 h-6 rounded-full bg-gold text-primary font-semibold text-xs flex-shrink-0", children: "1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Our design team will review your inquiry" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center w-6 h-6 rounded-full bg-gold text-primary font-semibold text-xs flex-shrink-0", children: "2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "We'll contact you via phone or email within 24 hours" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center w-6 h-6 rounded-full bg-gold text-primary font-semibold text-xs flex-shrink-0", children: "3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "We'll schedule a free consultation to discuss your project" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 p-4 border border-border/40 rounded-xl hover:border-gold/40 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-5 h-5 text-gold" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-1", children: "Call Us" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+919789871626", className: "text-sm font-medium text-foreground hover:text-gold transition-colors", children: "+91 97898 71626" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 p-4 border border-border/40 rounded-xl hover:border-gold/40 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-5 h-5 text-gold" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground mb-1", children: "Email Us" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:splusaarchitectureandinteriors@gmail.com", className: "text-sm font-medium text-foreground hover:text-gold transition-colors truncate", children: "hauz360degree@gmail.com" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: handleGoHome, className: "w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-gold/80 text-primary py-4 rounded-xl hover:shadow-lg hover:shadow-gold/40 transition-all font-semibold text-base sm:text-lg group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "w-5 h-5 group-hover:scale-110 transition-transform" }),
          "Go Back to Home"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs text-muted-foreground leading-relaxed", children: "Check your email (including spam folder) for our confirmation message. If you don't hear from us within 24 hours, feel free to reach out directly." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground flex items-center justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 text-gold" }),
      "Based in Chennai • Serving Pan India & UAE"
    ] }) })
  ] }) });
}
export {
  ThankYou as component
};
