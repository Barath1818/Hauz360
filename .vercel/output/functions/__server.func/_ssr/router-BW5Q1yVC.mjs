import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, d as useRouterState } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { X, M as Menu, I as Instagram, a as MapPin, P as Phone, b as Mail, S as Sparkles, A as ArrowRight, C as CircleCheck, H as House, B as Briefcase, c as ChefHat, d as Bed, e as Sofa, f as Store, L as LayoutGrid, g as Box, h as Hammer, i as Star, j as MessageCircle, k as Send } from "../_libs/lucide-react.mjs";
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
const appCss = "/assets/styles-CQNIw-mx.css";
function Logo({ light = false, className = "" }) {
  const base = light ? "text-white" : "text-[#1a2332]";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: `font-logo font-light tracking-[0.14em] text-2xl md:text-[28px] leading-none select-none whitespace-nowrap ${base} ${className}`,
      style: { fontFamily: '"Jost", "Inter", sans-serif' },
      "aria-label": "Hauz 360",
      children: [
        "HA",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "U" }),
        "Z",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2", children: "36" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "0" })
      ]
    }
  );
}
const MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = reactExports.useState(void 0);
  reactExports.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/process", label: "Process" },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" }
];
function Header() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const isMobile = useIsMobile();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const solid = scrolled || !isHome;
  reactExports.useEffect(() => {
    if (!isMobile && open) {
      setOpen(false);
    }
  }, [isMobile, open]);
  reactExports.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);
  reactExports.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${solid ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-black/30 backdrop-blur-sm"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxury flex items-center justify-between h-14 sm:h-16 md:h-20 px-3 sm:px-4 md:px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center group shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { light: !solid, className: "text-base sm:text-xl md:text-2xl" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-7", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: l.to,
              className: `text-xs xl:text-sm font-medium tracking-wide hover:text-gold transition-colors whitespace-nowrap ${solid ? "text-foreground" : "text-white drop-shadow-md"}`,
              activeProps: { className: "text-gold" },
              activeOptions: { exact: l.to === "/" },
              children: l.label
            },
            l.to
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/contact",
              className: `hidden lg:inline-flex items-center px-3 xl:px-5 py-1.5 xl:py-2.5 text-xs xl:text-sm font-medium tracking-wide transition-all duration-300 ${solid ? "bg-primary text-white hover:bg-gradient-gold hover:text-primary hover:text-white hover:shadow-lg hover:-translate-y-0.5" : "bg-gradient-gold text-primary hover:shadow-gold hover:-translate-y-0.5"}`,
              children: "Free Consultation"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setOpen(!open),
              className: `lg:hidden p-2 rounded-md transition-colors ${solid ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"}`,
              "aria-label": open ? "Close menu" : "Open menu",
              "aria-expanded": open,
              children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5 sm:w-6 sm:h-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-5 h-5 sm:w-6 sm:h-6" })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "fixed inset-0 bg-black/50 z-40 lg:hidden",
              onClick: () => setOpen(false),
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed left-0 right-0 top-14 sm:top-16 md:top-20 bg-background border-t shadow-xl z-40 max-h-[calc(100vh-3.5rem)] sm:max-h-[calc(100vh-4rem)] md:max-h-[calc(100vh-5rem)] overflow-y-auto animate-slide-down", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "container-luxury py-3 sm:py-4 flex flex-col", role: "navigation", "aria-label": "Mobile navigation", children: [
            links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: l.to,
                onClick: () => setOpen(false),
                className: "text-base sm:text-lg py-3 sm:py-4 px-4 border-b border-border/50 hover:text-gold hover:bg-muted/50 transition-colors",
                activeProps: { className: "text-gold font-medium" },
                activeOptions: { exact: l.to === "/" },
                children: l.label
              },
              l.to
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/contact",
                onClick: () => setOpen(false),
                className: "text-base sm:text-lg py-3 sm:py-4 px-4 mt-3 bg-gradient-gold text-primary font-medium text-center hover:shadow-gold transition-all rounded-md",
                children: "Free Consultation"
              }
            )
          ] }) })
        ] })
      ]
    }
  ) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-gradient-dark text-primary-foreground mt-16 sm:mt-20 md:mt-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxury py-8 sm:py-12 md:py-16 grid gap-8 sm:gap-10 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { light: true }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs sm:text-sm text-primary-foreground/70 leading-relaxed", children: "Architecture and interior solutions for modern living. Premium design for homes, offices and commercial spaces across Chennai & Dubai." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://www.instagram.com/splusa_architecturechennai",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Instagram",
            className: "w-8 h-8 sm:w-9 sm:h-9 grid place-items-center border border-primary-foreground/20 hover:bg-gold hover:text-primary hover:border-gold transition-all",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "w-3 h-3 sm:w-4 sm:h-4" })
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-gold text-base sm:text-lg mb-3 sm:mb-4", children: "Quick Links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-xs sm:text-sm text-primary-foreground/80", children: [
          ["/", "Home"],
          ["/about", "About"],
          ["/services", "Services"],
          ["/projects", "Projects"],
          ["/gallery", "Gallery"],
          ["/careers", "Careers"],
          ["/contact", "Contact"]
        ].map(([to, l]) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to, className: "hover:text-gold transition-colors", children: l }) }, to)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-gold text-base sm:text-lg mb-3 sm:mb-4", children: "Our Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-xs sm:text-sm text-primary-foreground/80", children: ["Interior Design", "Architectural Design", "Construction", "Modular Kitchens", "Custom Furniture", "3D Visualization"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: s }, s)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-gold text-base sm:text-lg mb-3 sm:mb-4", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-xs sm:text-sm text-primary-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2 sm:gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-3 h-3 sm:w-4 sm:h-4 text-gold shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs sm:text-sm", children: "No. 9, Railway Colony 3rd Street, 2nd Main Road, Aminjikarai, Chennai, Tamil Nadu" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2 sm:gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-3 h-3 sm:w-4 sm:h-4 text-gold shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+919789871626", className: "hover:text-gold text-xs sm:text-sm", children: "+91 97898 71626" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2 sm:gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-3 h-3 sm:w-4 sm:h-4 text-gold shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:hauz360degree@gmail.com", className: "hover:text-gold break-all text-xs sm:text-sm", children: "hauz360degree@gmail.com" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-primary-foreground/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxury py-4 sm:py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] sm:text-xs text-primary-foreground/60 px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Hauz360 — Splus A Architecture & Interior. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "italic font-display text-gold/80 text-center", children: '"Architecture and Interior Solutions."' })
    ] }) })
  ] });
}
function WhatsAppButton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      href: "https://wa.me/919789871626",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Chat on WhatsApp",
      className: "relative z-40 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white grid place-items-center shadow-luxury hover:scale-110 transition-transform",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", className: "w-6 h-6 sm:w-7 sm:h-7", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" }) })
    }
  );
}
const QUICK = [
  "Our Services",
  "Book Consultation",
  "Pricing",
  "Portfolio",
  "Office Address",
  "Working Hours",
  "Contact Info",
  "Why Hauz 360?"
];
function reply(input) {
  const q = input.toLowerCase().trim();
  if (/^(hi|hello|hey)/.test(q)) {
    return {
      role: "bot",
      text: "Hello 👋 Welcome to Hauz 360 Design Studio. How can I help you today?",
      options: QUICK
    };
  }
  if (/(service|offer)/.test(q)) {
    return {
      role: "bot",
      text: "We provide:\n\n🏠 Interior Design\n📐 Architecture\n🛋️ Modular Kitchen\n🏢 Office Interiors\n🎥 3D Visualization\n🔨 Renovation",
      options: ["Pricing", "Portfolio", "Book Consultation"]
    };
  }
  if (/(pricing|cost|price)/.test(q)) {
    return {
      role: "bot",
      text: "💰 Pricing depends on project size, material selection and customization level.\n\nBasic: ₹1200/sqft+\nPremium: ₹1800/sqft+\nLuxury: ₹2800/sqft+",
      options: ["Book Consultation"]
    };
  }
  if (/(contact|phone|email)/.test(q)) {
    return {
      role: "bot",
      text: "📞 +91 97898 71626\n✉️ hauz360degree@gmail.com",
      options: ["Book Consultation"]
    };
  }
  if (/(office|address|location)/.test(q)) {
    return {
      role: "bot",
      text: "📍 Chennai Office:\nNo. 9 Railway Colony 3rd Street,\n2nd Main Road, Aminjikarai,\nChennai, Tamil Nadu",
      options: ["Working Hours"]
    };
  }
  if (/(hour|time|open)/.test(q)) {
    return {
      role: "bot",
      text: "🕒 Monday - Sunday\n10:30 AM - 8:00 PM",
      options: ["Book Consultation"]
    };
  }
  if (/(portfolio|projects|gallery)/.test(q)) {
    return {
      role: "bot",
      text: "✨ We have completed luxury villas, apartments, modular kitchens and office interiors in Chennai & Dubai.",
      options: ["Go to Projects", "Book Consultation"]
    };
  }
  if (/(book|consultation|consult)/.test(q)) {
    return {
      role: "bot",
      text: "🎉 You can book a FREE consultation from our Contact page.",
      options: ["Go to Contact"]
    };
  }
  return {
    role: "bot",
    text: "I'd love to help 😊 Please choose one of the options below.",
    options: QUICK
  };
}
function ChatBot({ embed = false }) {
  const [open, setOpen] = reactExports.useState(false);
  const [input, setInput] = reactExports.useState("");
  const [typing, setTyping] = reactExports.useState(false);
  const [messages, setMessages] = reactExports.useState([
    {
      role: "bot",
      text: "Hi 👋 I'm Hauz Assistant. Ask me about pricing, services, projects or consultation.",
      options: QUICK
    }
  ]);
  const endRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    endRef.current?.scrollIntoView({
      behavior: "smooth"
    });
  }, [messages, typing]);
  const send = (text) => {
    const t = text.trim();
    if (!t) return;
    setMessages((m) => [
      ...m,
      {
        role: "user",
        text: t
      }
    ]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      if (/go to contact/i.test(t)) {
        setMessages((m) => [
          ...m,
          {
            role: "bot",
            text: "Opening Contact Page..."
          }
        ]);
        setTimeout(() => {
          window.location.href = "/contact";
        }, 500);
        return;
      }
      if (/go to projects/i.test(t)) {
        setMessages((m) => [
          ...m,
          {
            role: "bot",
            text: "Opening Projects..."
          }
        ]);
        setTimeout(() => {
          window.location.href = "/projects";
        }, 500);
        return;
      }
      setMessages((m) => [...m, reply(t)]);
    }, 600);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setOpen((v) => !v),
        "aria-label": "Chat",
        className: `
          ${embed ? "" : "fixed bottom-20 sm:bottom-24 right-4 sm:right-6"}
          z-50
          w-14
          h-14
          sm:w-16
          sm:h-16
          rounded-full
          bg-gradient-gold
          text-primary
          grid
          place-items-center
          shadow-2xl
          hover:scale-110
          transition-all
          duration-300
        `,
        children: [
          open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-6 h-6 sm:w-7 sm:h-7" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-6 h-6 sm:w-7 sm:h-7" }),
          !open && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-1 right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" })
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `
            ${embed ? "fixed right-4 sm:right-6 bottom-20" : "fixed bottom-36 right-3 left-3 sm:left-auto sm:right-6 sm:bottom-40"}
            z-50
            bg-card
            border
            border-border
            shadow-2xl
            overflow-hidden
            flex
            flex-col
            animate-fade-up

            h-[70vh]
            sm:w-[340px]
            sm:h-[520px]

            rounded-2xl
          `,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-dark text-white px-4 py-4 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-gradient-gold text-primary font-bold grid place-items-center", children: "H" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3 h-3 absolute -top-1 -right-1 text-yellow-300 animate-pulse" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm sm:text-base", children: "Hauz Assistant" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] opacity-80", children: "Online • Replies instantly" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setOpen(false),
                className: "hover:text-yellow-300",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto px-3 sm:px-4 py-4 space-y-3 bg-background", children: [
            messages.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `flex ${m.role === "user" ? "justify-end" : "justify-start"}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[90%] sm:max-w-[85%]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: `
                      px-4
                      py-3
                      rounded-2xl
                      text-sm
                      whitespace-pre-line
                      leading-relaxed

                      ${m.role === "user" ? "bg-primary text-white rounded-br-sm" : "bg-muted border border-border rounded-bl-sm"}
                    `,
                      children: m.text
                    }
                  ),
                  m.options && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 mt-2", children: m.options.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      onClick: () => send(opt),
                      className: "\r\n                            text-xs\r\n                            px-3\r\n                            py-1.5\r\n                            rounded-full\r\n                            border\r\n                            border-gold/40\r\n                            hover:bg-gradient-gold\r\n                            hover:text-primary\r\n                            transition-all\r\n                          ",
                      children: opt
                    },
                    opt
                  )) })
                ] })
              },
              i
            )),
            typing && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-muted border border-border rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-gold animate-bounce" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "w-2 h-2 rounded-full bg-gold animate-bounce",
                  style: { animationDelay: "0.15s" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "w-2 h-2 rounded-full bg-gold animate-bounce",
                  style: { animationDelay: "0.3s" }
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: endRef })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "form",
            {
              onSubmit: (e) => {
                e.preventDefault();
                send(input);
              },
              className: "\r\n              border-t\r\n              border-border\r\n              p-3\r\n              flex\r\n              items-center\r\n              gap-2\r\n              bg-card\r\n            ",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    value: input,
                    onChange: (e) => setInput(e.target.value),
                    placeholder: "Ask something...",
                    className: "\r\n                flex-1\r\n                bg-background\r\n                border\r\n                border-border\r\n                focus:border-gold\r\n                outline-none\r\n                px-4\r\n                py-3\r\n                text-sm\r\n                rounded-xl\r\n                transition-colors\r\n              "
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "submit",
                    className: "\r\n                w-11\r\n                h-11\r\n                rounded-xl\r\n                bg-gradient-gold\r\n                text-primary\r\n                grid\r\n                place-items-center\r\n                hover:shadow-lg\r\n                transition-all\r\n                shrink-0\r\n              ",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" })
                  }
                )
              ]
            }
          )
        ]
      }
    )
  ] });
}
function FloatingButtons() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "\r\n          fixed\r\n          bottom-4\r\n          right-4\r\n          z-[999]\r\n          flex\r\n          flex-col\r\n          items-end\r\n          gap-3\r\n          sm:bottom-6\r\n          sm:right-6\r\n        ",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/ai-room-designer",
            "aria-label": "Open room designer",
            className: "\r\n            group\r\n            relative\r\n            flex\r\n            items-center\r\n            justify-center\r\n            w-14\r\n            h-14\r\n            sm:w-16\r\n            sm:h-16\r\n            rounded-full\r\n            bg-gradient-to-r\r\n            from-violet-600\r\n            via-fuchsia-600\r\n            to-pink-600\r\n            text-white\r\n            shadow-2xl\r\n            hover:scale-110\r\n            active:scale-95\r\n            transition-all\r\n            duration-300\r\n          ",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-6 h-6 sm:w-7 sm:h-7" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "\r\n              pointer-events-none\r\n              absolute\r\n              inset-0\r\n              rounded-full\r\n              animate-ping\r\n              bg-fuchsia-500/30\r\n            "
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-[998]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChatBot, { embed: true }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-[997]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppButton, {}) })
      ]
    }
  ) });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-7xl text-gold", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground hover:bg-gradient-gold hover:text-primary transition-all",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({
  error,
  reset
}) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong. Try refreshing or go back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "px-5 py-2.5 bg-primary text-primary-foreground hover:bg-gradient-gold hover:text-primary transition-all",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "px-5 py-2.5 border border-border hover:border-gold transition-colors",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$c = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        title: "Hauz360 Design Studio — Luxury Interior Design"
      },
      {
        name: "description",
        content: "Premium interior design studio for homes, offices and commercial spaces."
      }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
      },
      // FAVICON
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon.png"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$c.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen flex-col overflow-x-hidden bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 pt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingButtons, {})
  ] }) });
}
const $$splitComponentImporter$8 = () => import("./thank-you-YWLN26bv.mjs");
const Route$b = createFileRoute("/thank-you")({
  head: () => ({
    meta: [{
      title: "Thank You — Hauz360 Design Studio"
    }, {
      name: "description",
      content: "Thank you for your inquiry. Our team will contact you shortly."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const reviews = [{
  q: "Hauz360 transformed our apartment beautifully. The design quality and execution were outstanding.",
  n: "Arun Kumar",
  role: "3 BHK Apartment, Chennai",
  rating: 5
}, {
  q: "Professional team with excellent creativity. Our office now looks modern and premium.",
  n: "Faisal Rahman",
  role: "Corporate Office, Dubai",
  rating: 4
}, {
  q: "Highly recommended for luxury interiors and modular kitchen designs.",
  n: "Divya Srinivasan",
  role: "Villa Owner, Chennai",
  rating: 5
}, {
  q: "From concept to handover, the team was meticulous. The result exceeded our expectations.",
  n: "Mohammed Ali",
  role: "Penthouse, Dubai",
  rating: 4
}, {
  q: "Loved the 3D visualizations — we knew exactly what we were getting. Beautifully done.",
  n: "Keerthana Raj",
  role: "Apartment Interior, Chennai",
  rating: 5
}, {
  q: "Our showroom now has the perfect ambience our brand needed. Stunning work.",
  n: "Ahmed Khan",
  role: "Retail Showroom, Dubai",
  rating: 4
}];
const $$splitComponentImporter$7 = () => import("./testimonials-DGH4TB_t.mjs");
const Route$a = createFileRoute("/testimonials")({
  head: () => ({
    meta: [{
      title: "Client Testimonials — Hauz360 Design Studio"
    }, {
      name: "description",
      content: "Read what our clients say about working with Hauz360 Design Studio."
    }, {
      property: "og:title",
      content: "Client Testimonials — Hauz360"
    }, {
      property: "og:description",
      content: "Stories from our happy clients."
    }, {
      property: "og:url",
      content: "/testimonials"
    }],
    links: [{
      rel: "canonical",
      href: "/testimonials"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Hauz360 Design Studio",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: 6
        },
        review: reviews.map((r) => ({
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: r.rating
          },
          author: {
            "@type": "Person",
            name: r.n
          },
          reviewBody: r.q
        }))
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const BASE_URL = "https://space-cadet-creations.lovable.app";
const paths = ["/", "/about", "/services", "/projects", "/process", "/gallery", "/testimonials", "/contact"];
const Route$9 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = paths.map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      }
    }
  }
});
const $$splitComponentImporter$6 = () => import("./services-Drdo-lW5.mjs");
const Route$8 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Services — Hauz360 Design Studio"
    }, {
      name: "description",
      content: "Residential, modular kitchen, office, commercial, 3D and turnkey interior design services."
    }, {
      property: "og:title",
      content: "Our Services — Hauz360"
    }, {
      property: "og:description",
      content: "Complete interior design services."
    }, {
      property: "og:url",
      content: "/services"
    }],
    links: [{
      rel: "canonical",
      href: "/services"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        itemListElement: ["Residential Interior Design", "Modular Kitchen", "Office Interior Design", "Commercial Interior Design", "3D Interior Design", "Turnkey Interior Solutions"].map((name, i) => ({
          "@type": "Service",
          position: i + 1,
          name,
          provider: {
            "@type": "LocalBusiness",
            name: "Hauz360 Design Studio"
          },
          areaServed: "IN"
        }))
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./about-DBQUKe7t.mjs");
const Route$7 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Us — Hauz360 Design Studio"
    }, {
      name: "description",
      content: "Creative interior design company delivering customized residential & commercial design solutions across India."
    }, {
      property: "og:title",
      content: "About Hauz360 Design Studio"
    }, {
      property: "og:description",
      content: "Who we are, our vision, mission and why clients choose us."
    }, {
      property: "og:url",
      content: "/about"
    }],
    links: [{
      rel: "canonical",
      href: "/about"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
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
const livingImg$1 = "/assets/hero1-DbIajgfL.jpg";
const kitchenImg = "/assets/Kit1-DLjJ7uCW.jpg";
const officeImg$1 = "/assets/off3-CzQgR1WR.jpg";
const bathroomImg = "/assets/Bath3-Q82np1P6.jpg";
const villaImg$1 = "/assets/vilas1-Dgs_ZKDQ.jpg";
const livingImg2 = "/assets/hero2-DLknwUKK.jpg";
const kitchenImg2 = "/assets/Kit2-CwFXMlKo.jpg";
const officeImg = "/assets/off2-Bqa0RlTL.jpg";
const bathroomImg2 = "/assets/Bath1-N5pWLSyE.jpg";
const villaImg2 = "/assets/vilas2-BKE_sQfT.jpg";
const livingImg3 = "/assets/hero3-d0wJOKgR.jpg";
const kitchenImg3 = "/assets/Kit3-CXE-wKgG.jpg";
const officeImg3 = "/assets/off4-OOmWAFPS.jpg";
const bathroomImg3 = "/assets/Bath2-DlDLF1Ia.jpg";
const villaImg3 = "/assets/vilas3-Cre9Gnh5.jpg";
const livingImg = "/assets/hero_living2-DEApdppw.jpg";
const kitchenImg4 = "/assets/Kit--x3SsFXM.jpg";
const office1Img = "/assets/office1-C7Wjakxx.jpg";
const bathroomImg4 = "/assets/Bath-R3XqmjSJ.jpg";
const villaImg = "/assets/vilas-Bmr4texX.jpg";
const bashyamImg1 = "/assets/bashyam1-gu6IgcbJ.jpg";
const bashyamImg2 = "/assets/bashyam2-C-xqFZgU.jpg";
const bashyamImg3 = "/assets/bashyam3-DTAB1jZ-.jpg";
const bashyamImg4 = "/assets/bashyam4-C65gGywN.jpg";
const sugalImg1 = "/assets/sugal1-BSa_KcQT.jpg";
const sugalImg2 = "/assets/sugal2-_vZyl_h-.jpg";
const sugalImg3 = "/assets/sugal3-CxtLXFak.jpg";
const sugalImg4 = "/assets/sugal4-mcjGR4F-.jpg";
const aceImg1 = "/assets/ace1-Bxpp3K56.jpg";
const aceImg2 = "/assets/ace2-C39fre-8.jpg";
const aceImg3 = "/assets/ace3-Cr6OX8Mj.jpg";
const aceImg4 = "/assets/ace4-CVN9nXlG.jpg";
const nrcImg1 = "/assets/nrc1-CcPAe8VW.jpg";
const nrcImg2 = "/assets/nrc2-BW6JX5V_.jpg";
const nrcImg3 = "/assets/nrc3-C8vD-lFw.jpg";
const nrcImg4 = "/assets/nrc4-i96Ju80_.jpg";
const Route$6 = createFileRoute("/projects")({
  component: Projects
});
const projects$1 = [
  {
    id: "bashyam-crown-m1",
    mainImg: bashyamImg1,
    images: [bashyamImg1, bashyamImg2, bashyamImg3, bashyamImg4],
    name: "Bashyam Crown",
    category: "Bashyam Crown",
    location: "A6 Tower 4 Baashyam Crowne Residences Koyambedu Chennai - 600107",
    area: "4,200 sqft",
    style: "Contemporary Luxury",
    time: "16 weeks",
    description: "A stunning penthouse with panoramic city views, featuring open-plan living spaces, floor-to-ceiling windows, and premium finishes throughout. The design emphasizes natural light and seamless indoor-outdoor flow.",
    features: [
      "Floor-to-ceiling windows",
      "Open-plan living",
      "Smart home automation",
      "Private terrace garden"
    ]
  },
  {
    id: "sugal-damani-lakeside",
    mainImg: sugalImg1,
    images: [sugalImg1, sugalImg2, sugalImg3, sugalImg4],
    name: "Sugal & Damani Lakeside",
    category: "Sugal & Damani",
    location: "LAKESIDE Surapet Chennai, Kadirvedu Tamil Nadu 600066",
    area: "6,800 sqft",
    style: "Classical Modern",
    time: "22 weeks",
    description: "A magnificent villa blending classical architecture with modern amenities. This property features expansive gardens, a private pool, and meticulously designed interiors that honor traditional craftsmanship.",
    features: [
      "Private swimming pool",
      "Landscaped gardens",
      "Traditional craftsmanship",
      "Entertainment wing"
    ]
  },
  {
    id: "the-ace-by-risland",
    mainImg: aceImg1,
    images: [aceImg1, aceImg2, aceImg3, aceImg4],
    name: "The Ace by Risland",
    category: "The Ace",
    location: "Chennai, India",
    area: "12,000 sqft",
    style: "Corporate Modern",
    time: "18 weeks",
    description: "A state-of-the-art corporate headquarters designed for innovation and collaboration. The space features flexible work zones, cutting-edge technology integration, and sustainable design elements.",
    features: [
      "Flexible work zones",
      "Technology integration",
      "Sustainable design",
      "Collaboration spaces"
    ]
  },
  {
    id: "nrc-fresh-cuts",
    mainImg: nrcImg1,
    images: [nrcImg1, nrcImg2, nrcImg3, nrcImg4],
    name: "NRC Fresh Cuts",
    category: "NRC",
    location: "Chennai, India",
    area: "320 sqft",
    style: "Modular Premium",
    time: "6 weeks",
    description: "A premium modular kitchen that combines functionality with aesthetic excellence. Featuring smart storage solutions, premium appliances, and elegant finishes that make cooking a delight.",
    features: [
      "Smart storage solutions",
      "Premium appliances",
      "Quartz countertops",
      "LED under-cabinet lighting"
    ]
  },
  // Original projects
  {
    id: "skyline-penthouse",
    mainImg: livingImg$1,
    images: [livingImg$1, livingImg2, livingImg3, livingImg],
    name: "Skyline Penthouse",
    category: "Luxury Home",
    location: "Chennai, India",
    area: "4,200 sqft",
    style: "Contemporary Luxury",
    time: "16 weeks",
    description: "A stunning penthouse with panoramic city views, featuring open-plan living spaces, floor-to-ceiling windows, and premium finishes throughout. The design emphasizes natural light and seamless indoor-outdoor flow.",
    features: [
      "Floor-to-ceiling windows",
      "Open-plan living",
      "Smart home automation",
      "Private terrace garden"
    ]
  },
  {
    id: "heritage-villa",
    mainImg: villaImg$1,
    images: [villaImg$1, villaImg2, villaImg3, villaImg],
    name: "Heritage Villa",
    category: "Villa",
    location: "Chennai, India",
    area: "6,800 sqft",
    style: "Classical Modern",
    time: "22 weeks",
    description: "A magnificent villa blending classical architecture with modern amenities. This property features expansive gardens, a private pool, and meticulously designed interiors that honor traditional craftsmanship.",
    features: [
      "Private swimming pool",
      "Landscaped gardens",
      "Traditional craftsmanship",
      "Entertainment wing"
    ]
  },
  {
    id: "apex-corporate-hq",
    mainImg: officeImg$1,
    images: [officeImg$1, officeImg, officeImg3, office1Img],
    name: "Apex Corporate HQ",
    category: "Office",
    location: "Dubai, UAE",
    area: "12,000 sqft",
    style: "Corporate Modern",
    time: "18 weeks",
    description: "A state-of-the-art corporate headquarters designed for innovation and collaboration. The space features flexible work zones, cutting-edge technology integration, and sustainable design elements.",
    features: [
      "Flexible work zones",
      "Technology integration",
      "Sustainable design",
      "Collaboration spaces"
    ]
  },
  {
    id: "aurelia-modular-kitchen",
    mainImg: kitchenImg,
    images: [kitchenImg, kitchenImg2, kitchenImg3, kitchenImg4],
    name: "Aurelia Modular Kitchen",
    category: "Kitchen",
    location: "Chennai, India",
    area: "320 sqft",
    style: "Modular Premium",
    time: "6 weeks",
    description: "A premium modular kitchen that combines functionality with aesthetic excellence. Featuring smart storage solutions, premium appliances, and elegant finishes that make cooking a delight.",
    features: [
      "Smart storage solutions",
      "Premium appliances",
      "Quartz countertops",
      "LED under-cabinet lighting"
    ]
  },
  {
    id: "serenity-spa-bathroom",
    mainImg: bathroomImg,
    images: [bathroomImg, bathroomImg2, bathroomImg3, bathroomImg4],
    name: "Serenity Spa Bathroom",
    category: "Bathroom",
    location: "Dubai, UAE",
    area: "280 sqft",
    style: "Luxury Spa",
    time: "8 weeks",
    description: "A luxurious spa-inspired bathroom designed for ultimate relaxation. Features include a freestanding soaking tub, rainfall shower, heated floors, and premium marble finishes creating a serene sanctuary.",
    features: [
      "Freestanding soaking tub",
      "Rainfall shower system",
      "Heated flooring",
      "Premium marble finishes",
      "Ambient lighting"
    ]
  }
];
const categories = ["All", "Bashyam Crown", "Sugal & Damani", "The Ace", "NRC", "Luxury Home", "Villa", "Office", "Kitchen", "Bathroom"];
function Projects() {
  const [filter, setFilter] = reactExports.useState("All");
  const [selectedProject, setSelectedProject] = reactExports.useState(null);
  const [currentImageIndex, setCurrentImageIndex] = reactExports.useState(0);
  const [isMobile, setIsMobile] = reactExports.useState(false);
  const list = filter === "All" ? projects$1 : projects$1.filter((p) => p.category === filter);
  reactExports.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden";
  };
  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = "auto";
  };
  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(
        (prev) => prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };
  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex(
        (prev) => prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };
  const [touchStartX, setTouchStartX] = reactExports.useState(0);
  const [touchEndX, setTouchEndX] = reactExports.useState(0);
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };
  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };
  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      nextImage();
    }
    if (touchStartX - touchEndX < -50) {
      prevImage();
    }
    setTouchStartX(0);
    setTouchEndX(0);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Portfolio", title: "Our Recent Projects" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxury", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-2 mb-12", children: categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setFilter(c),
          className: `px-5 py-2 text-sm tracking-wide border transition-all ${filter === c ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-gold hover:text-gold"}`,
          children: c
        },
        c
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: list.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "article",
        {
          onClick: () => openProject(p),
          className: "group cursor-pointer bg-card border border-border rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[4/3] overflow-hidden relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: p.mainImg,
                  alt: p.name,
                  loading: "lazy",
                  className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white text-sm font-semibold p-4", children: [
                p.images.length,
                " images • Click to view"
              ] }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs tracking-[0.25em] uppercase text-gold", children: p.category }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl mt-2 mb-4", children: p.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "grid grid-cols-2 gap-y-2 text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-muted-foreground", children: "Location" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: p.location }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-muted-foreground", children: "Area" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: p.area }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-muted-foreground", children: "Style" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: p.style }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-muted-foreground", children: "Duration" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { children: p.time })
              ] })
            ] })
          ]
        },
        p.id
      )) }),
      selectedProject && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4 md:p-6",
          onClick: (e) => {
            if (e.target === e.currentTarget) {
              closeProject();
            }
          },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl max-w-6xl w-full overflow-auto max-h-[98vh] sm:max-h-[95vh] md:max-h-[90vh] relative animate-in fade-in zoom-in duration-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: closeProject,
                className: "absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 text-2xl md:text-3xl font-bold text-gray-700 hover:text-gray-900 transition-colors z-20 bg-white/90 hover:bg-white rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg hover:shadow-xl",
                "aria-label": "Close project",
                children: "×"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative bg-black/5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "aspect-[4/3] sm:aspect-[16/9] md:aspect-[16/10] overflow-hidden flex items-center justify-center bg-gray-100",
                  onTouchStart: handleTouchStart,
                  onTouchMove: handleTouchMove,
                  onTouchEnd: handleTouchEnd,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: selectedProject.images[currentImageIndex],
                      alt: `${selectedProject.name} - Image ${currentImageIndex + 1}`,
                      className: "w-full h-full object-contain transition-opacity duration-500"
                    }
                  )
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-0.5 sm:px-4 sm:py-1 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm", children: [
                currentImageIndex + 1,
                " / ",
                selectedProject.images.length
              ] }),
              selectedProject.images.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: prevImage,
                    className: "absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110",
                    "aria-label": "Previous image",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: nextImage,
                    className: "absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110",
                    "aria-label": "Next image",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) })
                  }
                )
              ] }),
              selectedProject.images.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-10 sm:bottom-14 md:bottom-16 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-black/50 backdrop-blur-sm rounded-lg overflow-x-auto max-w-[90%] sm:max-w-[85%] md:max-w-[80%]", children: selectedProject.images.map((img, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setCurrentImageIndex(idx),
                  className: `flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 ${currentImageIndex === idx ? "border-white scale-110" : "border-transparent hover:border-white/50"}`,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: img,
                      alt: `Thumbnail ${idx + 1}`,
                      className: "w-full h-full object-cover"
                    }
                  )
                },
                idx
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 sm:p-6 md:p-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start justify-between mb-4 sm:mb-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs sm:text-sm tracking-[0.25em] uppercase text-gold font-semibold", children: selectedProject.category }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-1 sm:mt-2", children: selectedProject.name })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 sm:mt-0 bg-gold/10 text-gold px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold", children: selectedProject.time })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 p-3 sm:p-4 rounded-xl", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs text-gray-500 uppercase tracking-wider mb-1", children: "Location" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base font-semibold", children: selectedProject.location })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 p-3 sm:p-4 rounded-xl", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs text-gray-500 uppercase tracking-wider mb-1", children: "Area" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base font-semibold", children: selectedProject.area })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gray-50 p-3 sm:p-4 rounded-xl col-span-2 md:col-span-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs text-gray-500 uppercase tracking-wider mb-1", children: "Style" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base font-semibold", children: selectedProject.style })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 sm:mb-8", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg sm:text-xl font-bold mb-2 sm:mb-3", children: "Project Description" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base text-gray-600 leading-6 sm:leading-7 md:leading-8", children: selectedProject.description })
              ] }),
              selectedProject.features && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg sm:text-xl font-bold mb-2 sm:mb-3", children: "Key Features" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3", children: selectedProject.features.map((feature, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-700", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold text-base sm:text-xl", children: "✦" }),
                  feature
                ] }, idx)) })
              ] })
            ] })
          ] })
        }
      )
    ] }) })
  ] });
}
const $$splitComponentImporter$4 = () => import("./process-BaWddQ5q.mjs");
const Route$5 = createFileRoute("/process")({
  head: () => ({
    meta: [{
      title: "Our Design Process — Hauz360 Design Studio"
    }, {
      name: "description",
      content: "Transparent 3-stage design process with clear payment milestones: Booking (10%), Placement Order (40%), Execution & Pre-Delivery (50%)."
    }, {
      property: "og:title",
      content: "Our Design Process — Hauz360"
    }, {
      property: "og:description",
      content: "3-stage process with transparent payment milestones."
    }, {
      property: "og:url",
      content: "/process"
    }],
    links: [{
      rel: "canonical",
      href: "/process"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./gallery-CRjPu_8N.mjs");
const Route$4 = createFileRoute("/gallery")({
  head: () => ({
    meta: [{
      title: "Gallery — Hauz360 Design Studio"
    }, {
      name: "description",
      content: "Visual gallery of our interior design work across living rooms, bedrooms, kitchens, offices and commercial spaces."
    }, {
      property: "og:title",
      content: "Gallery — Hauz360"
    }, {
      property: "og:description",
      content: "Browse our interior design gallery."
    }, {
      property: "og:url",
      content: "/gallery"
    }],
    links: [{
      rel: "canonical",
      href: "/gallery"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-CHGz44gC.mjs");
const Route$3 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Hauz360 Design Studio"
    }, {
      name: "description",
      content: "Get in touch with Hauz360 Design Studio. Book a free consultation for your interior design project."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./careers-mo77T31n.mjs");
const Route$2 = createFileRoute("/careers")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./ai-room-designer-CyRKX0Z6.mjs");
const Route$1 = createFileRoute("/ai-room-designer")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const hallImg = "/assets/hero-living-BLBU9IdR.jpg";
function SectionHeading({ eyebrow, title, subtitle, center, light }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${center ? "text-center mx-auto" : ""} max-w-2xl mb-12`, children: [
    eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-3 ${center ? "justify-center" : ""} mb-4`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-gold" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-xs tracking-[0.25em] uppercase ${light ? "text-gold" : "text-gold"}`, children: eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-10 bg-gold" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: `font-display text-4xl md:text-5xl leading-tight ${light ? "text-primary-foreground" : "text-foreground"}`, children: title }),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `mt-4 text-base md:text-lg leading-relaxed ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`, children: subtitle })
  ] });
}
const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Hauz360 Design Studio — Luxury Interior Design"
      },
      {
        name: "description",
        content: "Premium interior designers creating elegant, functional spaces for homes, offices, modular kitchens and commercial environments."
      },
      {
        property: "og:title",
        content: "Hauz360 Design Studio — Luxury Interior Design"
      },
      {
        property: "og:description",
        content: "Elegant, functional, and inspiring interiors."
      },
      {
        property: "og:url",
        content: "/"
      }
    ],
    links: [{ rel: "canonical", href: "/" }]
  }),
  component: Index
});
const services = [
  {
    icon: House,
    title: "Residential Interiors",
    desc: "Beautiful, functional interiors for apartments, villas and homes."
  },
  {
    icon: Briefcase,
    title: "Office Interiors",
    desc: "Modern office designs that boost productivity and brand image."
  },
  {
    icon: ChefHat,
    title: "Modular Kitchen",
    desc: "Smart, stylish and space-efficient kitchen solutions."
  },
  {
    icon: Bed,
    title: "Bedroom Interiors",
    desc: "Elegant, comfortable bedroom concepts with custom furniture."
  },
  {
    icon: Sofa,
    title: "Living Room Design",
    desc: "Stylish living spaces with modern aesthetics and premium finishes."
  },
  {
    icon: Store,
    title: "Commercial Interiors",
    desc: "Retail shops, showrooms, cafes and commercial spaces."
  },
  {
    icon: LayoutGrid,
    title: "Space Planning",
    desc: "Optimized layouts for better functionality and flow."
  },
  {
    icon: Box,
    title: "3D Design & Visualization",
    desc: "Realistic 3D interior concepts before execution."
  },
  {
    icon: Hammer,
    title: "Renovation & Remodeling",
    desc: "Transform old spaces into modern, luxurious environments."
  }
];
const stats = [
  {
    value: "150+",
    label: "Projects Delivered"
  },
  {
    value: "12+",
    label: "Years Experience"
  },
  {
    value: "98%",
    label: "Client Satisfaction"
  },
  {
    value: "40+",
    label: "Expert Designers"
  }
];
const projects = [
  // 4 New Projects (displayed first)
  {
    img: bashyamImg1,
    title: "Bashyam Crown M1",
    tag: "Bashyam Crown"
  },
  {
    img: sugalImg1,
    title: "Sugal & Damani Lakeside",
    tag: "Sugal & Damani"
  },
  {
    img: aceImg1,
    title: "The Ace by Risland",
    tag: "The Ace"
  },
  {
    img: nrcImg1,
    title: "NRC Fresh Cuts",
    tag: "NRC"
  },
  // Original projects
  {
    img: livingImg$1,
    title: "Skyline Penthouse",
    tag: "Luxury Home"
  },
  {
    img: villaImg$1,
    title: "Heritage Villa",
    tag: "Villa"
  },
  {
    img: officeImg,
    title: "Apex Corporate HQ",
    tag: "Office"
  },
  {
    img: kitchenImg,
    title: "Aurelia Modular Kitchen",
    tag: "Kitchen"
  },
  {
    img: bathroomImg,
    title: "Serenity Spa Bathroom",
    tag: "Bathroom"
  },
  {
    img: livingImg2,
    title: "Modern Living Space",
    tag: "Residential"
  }
];
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative -mt-20 min-h-screen flex items-center text-primary-foreground overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: hallImg,
          alt: "Luxury interior design by Hauz360",
          className: "absolute inset-0 w-full h-full object-cover"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-luxury relative z-10 px-4 sm:px-6 py-28 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 sm:w-10 bg-gold" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] sm:text-xs tracking-[0.25em] uppercase text-gold", children: "Hauz360 Design Studio" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-5", children: [
          "Luxury Interior Design For",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold italic", children: "Modern" }),
          " ",
          "Homes & Offices"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base md:text-lg text-primary-foreground/80 max-w-2xl leading-relaxed mb-8", children: "We create elegant, functional and inspiring interiors for homes, offices, commercial spaces and luxury environments." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/contact",
              className: "group inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary px-6 py-3.5 font-medium rounded-xl hover:shadow-gold transition-all",
              children: [
                "Get Free Consultation",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/projects",
              className: "inline-flex items-center justify-center gap-2 border border-white/40 px-6 py-3.5 rounded-xl hover:border-gold hover:text-gold transition-all",
              children: "View Our Projects"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 inset-x-0 bg-background/95 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-luxury grid grid-cols-2 md:grid-cols-4 divide-x divide-border", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "py-5 sm:py-6 text-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl sm:text-3xl md:text-4xl text-gold", children: s.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] sm:text-xs tracking-widest uppercase text-muted-foreground mt-1", children: s.label })
          ]
        },
        s.label
      )) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-20 lg:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxury px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative order-2 lg:order-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: villaImg$1,
            alt: "Hauz360 design studio",
            className: "w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover rounded-2xl shadow-luxury"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 right-4 sm:-bottom-6 sm:-right-6 bg-gradient-gold text-primary p-4 sm:p-6 rounded-xl max-w-[220px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-5 h-5 mb-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-base sm:text-lg leading-tight", children: "Crafted with passion since day one" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "order-1 lg:order-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionHeading,
          {
            eyebrow: "Welcome",
            title: "Premium Interior Design Studio"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base", children: "Hauz360 Design Studio is a premium interior design company specializing in residential and commercial interiors." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-8 text-sm sm:text-base", children: "From modern apartments to luxury villas and corporate offices, we design spaces that reflect personality, comfort and sophistication." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8", children: [
          "Customized Solutions",
          "Premium Materials",
          "Transparent Pricing",
          "On-Time Delivery"
        ].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "li",
          {
            className: "flex items-center gap-2 text-sm",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-4 h-4 text-gold shrink-0" }),
              f
            ]
          },
          f
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/about",
            className: "inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all",
            children: [
              "Learn more about us",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-20 lg:py-24 bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxury px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeading,
        {
          center: true,
          eyebrow: "What We Do",
          title: "Our Signature Services",
          subtitle: "End-to-end interior solutions tailored to your lifestyle and budget."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6", children: services.map(({ icon: Icon, title, desc }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "group bg-card p-6 sm:p-8 border border-border/60 hover:border-gold hover:shadow-luxury transition-all rounded-2xl",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 bg-gradient-gold rounded-xl grid place-items-center mb-5 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-6 h-6 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl mb-2", children: title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: desc })
          ]
        },
        title
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-20 lg:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxury px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeading,
        {
          center: true,
          eyebrow: "Portfolio",
          title: "Recent Projects",
          subtitle: "A glimpse into spaces we've designed and crafted."
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6", children: projects.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/projects",
          className: "group relative overflow-hidden aspect-[4/5] rounded-2xl block",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: p.img,
                alt: p.title,
                className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 inset-x-0 p-5 sm:p-6 text-primary-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] sm:text-xs tracking-[0.25em] uppercase text-gold", children: p.tag }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl sm:text-2xl mt-1", children: p.title })
            ] })
          ]
        },
        p.title
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-10 sm:mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/projects",
          className: "inline-flex items-center gap-2 px-6 py-3.5 border border-foreground/30 rounded-xl hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all",
          children: [
            "View All Projects",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4" })
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-20 lg:py-24 bg-gradient-dark text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxury px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeading,
        {
          center: true,
          light: true,
          eyebrow: "Testimonials",
          title: "Words From Our Clients"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6", children: [
        {
          q: "Hauz360 transformed our home beautifully.",
          n: "Priya & Rohan"
        },
        {
          q: "Professional team with excellent creativity.",
          n: "Anand Mehta"
        },
        {
          q: "Highly recommended for luxury interiors.",
          n: "Sneha Kapoor"
        }
      ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl backdrop-blur",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 text-gold mb-4", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Star,
              {
                className: "w-4 h-4 fill-gold"
              },
              i
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "italic leading-relaxed text-white/90 text-sm sm:text-base", children: [
              '"',
              t.q,
              '"'
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 font-display text-gold", children: [
              "— ",
              t.n
            ] })
          ]
        },
        t.n
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 sm:py-20 lg:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-luxury px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden bg-gradient-gold rounded-3xl p-8 sm:p-12 lg:p-20 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl lg:text-5xl text-primary mb-4 leading-tight", children: "Ready to design your dream space?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary/80 max-w-2xl mx-auto mb-8 text-sm sm:text-base", children: "Book a free consultation with our design experts and bring your vision to life." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/contact",
            className: "inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-xl hover:bg-charcoal transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
              "Book Consultation"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/services",
            className: "inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3.5 rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors",
            children: "Explore Services"
          }
        )
      ] })
    ] }) }) })
  ] });
}
const ThankYouRoute = Route$b.update({
  id: "/thank-you",
  path: "/thank-you",
  getParentRoute: () => Route$c
});
const TestimonialsRoute = Route$a.update({
  id: "/testimonials",
  path: "/testimonials",
  getParentRoute: () => Route$c
});
const SitemapDotxmlRoute = Route$9.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$c
});
const ServicesRoute = Route$8.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$c
});
const ProjectsRoute = Route$6.update({
  id: "/projects",
  path: "/projects",
  getParentRoute: () => Route$c
});
const ProcessRoute = Route$5.update({
  id: "/process",
  path: "/process",
  getParentRoute: () => Route$c
});
const GalleryRoute = Route$4.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => Route$c
});
const ContactRoute = Route$3.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$c
});
const CareersRoute = Route$2.update({
  id: "/careers",
  path: "/careers",
  getParentRoute: () => Route$c
});
const AiRoomDesignerRoute = Route$1.update({
  id: "/ai-room-designer",
  path: "/ai-room-designer",
  getParentRoute: () => Route$c
});
const AboutRoute = Route$7.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$c
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$c
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AiRoomDesignerRoute,
  CareersRoute,
  ContactRoute,
  GalleryRoute,
  ProcessRoute,
  ProjectsRoute,
  ServicesRoute,
  SitemapDotxmlRoute,
  TestimonialsRoute,
  ThankYouRoute
};
const routeTree = Route$c._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  PageHeader as P,
  Route$b as R,
  SectionHeading as S,
  router as a,
  hallImg as h,
  livingImg as l,
  office1Img as o,
  reviews as r,
  villaImg as v
};
