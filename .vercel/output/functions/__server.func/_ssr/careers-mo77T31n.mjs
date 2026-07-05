import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader, S as SectionHeading } from "./router-BW5Q1yVC.mjs";
import { G as GraduationCap, U as Users, S as Sparkles, B as Briefcase, a as MapPin, l as Clock, b as Mail } from "../_libs/lucide-react.mjs";
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
const CAREERS_EMAIL = "hauz360degree@gmail.com";
const jobs = [{
  title: "Senior Interior Designer",
  type: "Full-time",
  location: "Chennai, India",
  experience: "4–7 Years",
  description: "Lead premium residential & commercial interior projects."
}, {
  title: "Architect",
  type: "Full-time",
  location: "Chennai, India",
  experience: "3–6 Years",
  description: "Work on architectural planning, elevations & execution drawings."
}, {
  title: "3D Visualizer",
  type: "Full-time",
  location: "Chennai, India",
  experience: "2–5 Years",
  description: "Create photorealistic 3D renders and walkthrough animations."
}, {
  title: "Project Manager",
  type: "Full-time",
  location: "Dubai, UAE",
  experience: "5–8 Years",
  description: "Manage premium turnkey interior projects and execution."
}, {
  title: "Design Internship",
  type: "Internship",
  location: "Chennai, India",
  experience: "Freshers",
  description: "Learn architecture & interiors through live project exposure."
}];
const perks = [{
  icon: GraduationCap,
  title: "Learning & Growth",
  text: "Work alongside experienced architects and designers."
}, {
  icon: Users,
  title: "Creative Team",
  text: "Collaborative culture focused on premium design quality."
}, {
  icon: Sparkles,
  title: "Luxury Projects",
  text: "Work on high-end residential & commercial interiors."
}];
function openMail(jobTitle, location) {
  const subject = `Application — ${jobTitle} (${location})`;
  const body = `
Hi Hauz360 Team,

I would like to apply for the ${jobTitle} position based in ${location}.

Name:
Phone:
Email:
Years of Experience:
Portfolio / LinkedIn:

Please find my resume attached.

Thanks & Regards
`;
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${CAREERS_EMAIL}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(gmailUrl, "_blank");
}
function Careers() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Careers", title: "Build Beautiful Spaces With Us" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxury px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Why Hauz360", title: "A Studio That Invests In People" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-muted-foreground max-w-2xl mx-auto mt-4 text-sm md:text-base leading-relaxed", children: "Join our passionate team creating premium interiors across Chennai & Dubai." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mt-12", children: perks.map((perk) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "\r\n                  bg-card\r\n                  border border-border/60\r\n                  p-6 md:p-8\r\n                  rounded-xl\r\n                  hover:border-gold\r\n                  transition-all\r\n                ", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(perk.icon, { className: "w-10 h-10 text-gold mb-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl mb-3", children: perk.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: perk.text })
      ] }, perk.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14 md:py-20 bg-secondary/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxury px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Open Positions", title: "Current Opportunities" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 mt-12", children: jobs.map((job) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "\r\n                  bg-card\r\n                  border border-border/60\r\n                  rounded-xl\r\n                  p-6 md:p-8\r\n                  hover:border-gold\r\n                  transition-all\r\n                ", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col xl:flex-row xl:items-start xl:justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-5 h-5 text-gold shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl", children: job.title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 text-sm text-muted-foreground mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "w-4 h-4 text-gold" }),
              job.location
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "w-4 h-4 text-gold" }),
              job.type
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: job.experience })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed text-sm md:text-base", children: job.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => openMail(job.title, job.location), className: "\r\n                      inline-flex items-center justify-center gap-2\r\n                      px-6 py-3\r\n                      bg-gradient-gold\r\n                      text-primary\r\n                      font-medium\r\n                      rounded-lg\r\n                      hover:shadow-gold\r\n                      transition-all\r\n                      w-full\r\n                      sm:w-auto\r\n                    ", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4" }),
          "Apply via Email"
        ] })
      ] }) }, job.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-14 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-luxury px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "\r\n              bg-gradient-dark\r\n              text-primary-foreground\r\n              p-8 md:p-14\r\n              rounded-2xl\r\n              text-center\r\n            ", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-12 h-12 text-gold mx-auto mb-5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl mb-4", children: "Don’t See Your Role?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-2xl mx-auto text-primary-foreground/80 leading-relaxed text-sm md:text-base mb-8", children: "We’re always looking for talented architects, interior designers, visualizers and project managers." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `https://mail.google.com/mail/?view=cm&fs=1&to=${CAREERS_EMAIL}`, target: "_blank", rel: "noreferrer", className: "\r\n                inline-flex items-center justify-center gap-2\r\n                px-7 py-3.5\r\n                bg-gradient-gold\r\n                text-primary\r\n                rounded-lg\r\n                font-medium\r\n                hover:shadow-gold\r\n                transition-all\r\n                w-full\r\n                sm:w-auto\r\n              ", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4" }),
        CAREERS_EMAIL
      ] })
    ] }) }) })
  ] });
}
export {
  Careers as component
};
