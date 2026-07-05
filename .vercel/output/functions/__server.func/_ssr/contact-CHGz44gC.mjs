import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as useNavigate } from "../_libs/tanstack__react-router.mjs";
import { P as PageHeader } from "./router-BW5Q1yVC.mjs";
import { e as emailjs } from "../_libs/emailjs__browser.mjs";
import { k as Send, a as MapPin, P as Phone, b as Mail, l as Clock } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
const __vite_import_meta_env__ = { "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SSR": true, "TSS_DEV_SERVER": "false", "TSS_DEV_SSR_STYLES_BASEPATH": "/", "TSS_DEV_SSR_STYLES_ENABLED": "true", "TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false", "TSS_INLINE_CSS_ENABLED": "false", "TSS_ROUTER_BASEPATH": "", "TSS_SERVER_FN_BASE": "/_serverFn/", "VITE_ADDRESS": "SSR ASSOCIATES, Chennai, Tamil Nadu", "VITE_CAREERS_EMAIL": "hauz360degree@gmail.com", "VITE_CLIPDROP_API_KEY": "your_clipdrop_api_key_here", "VITE_COMPANY_EMAIL": "hauz360degree@gmail.com", "VITE_CONTACT_PHONE": "+91 97898 71626", "VITE_EMAILJS_PUBLIC_KEY": "HTKACiAJ_BZXqVubc", "VITE_EMAILJS_SERVICE_ID": "service_ad5fhxh", "VITE_EMAILJS_TEMPLATE_ID": "template_c39s7pr", "VITE_MAPS_QUERY": "SSR ASSOCIATES, Chennai, Tamil Nadu", "VITE_OWNER_EMAIL": "hauz360degree@gmail.com", "VITE_SITE_NAME": "Hauz360 Design Studio", "VITE_SITE_URL": "https://hauz360.vercel.app" };
function getRequiredEnv(key) {
  const value = __vite_import_meta_env__[key];
  if (!value) {
    throw new Error(`Required environment variable ${key} is not set`);
  }
  return value;
}
function getOptionalEnv(key, defaultValue = "") {
  return __vite_import_meta_env__[key] || defaultValue;
}
const envConfig = {
  emailjs: {
    serviceId: getRequiredEnv("VITE_EMAILJS_SERVICE_ID"),
    templateId: getRequiredEnv("VITE_EMAILJS_TEMPLATE_ID"),
    publicKey: getRequiredEnv("VITE_EMAILJS_PUBLIC_KEY")
  },
  email: {
    owner: getRequiredEnv("VITE_OWNER_EMAIL"),
    company: getRequiredEnv("VITE_COMPANY_EMAIL"),
    careers: getRequiredEnv("VITE_CAREERS_EMAIL")
  },
  site: {
    url: getOptionalEnv("VITE_SITE_URL", "https://space-cadet-creations.com"),
    name: getOptionalEnv("VITE_SITE_NAME", "Space Cadet Creations")
  },
  contact: {
    phone: getRequiredEnv("VITE_CONTACT_PHONE"),
    address: getOptionalEnv("VITE_ADDRESS", ""),
    mapsQuery: getOptionalEnv("VITE_MAPS_QUERY", "Hauz360 Bangalore")
  },
  api: {
    clipdropKey: getOptionalEnv("VITE_CLIPDROP_API_KEY", "")
  }
};
const OWNER_EMAIL = "hauz360degree@gmail.com";
const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(envConfig.contact.mapsQuery)}&output=embed`;
function Contact() {
  const navigate = useNavigate();
  const [loading, setLoading] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    name: "",
    phone: "",
    email: "",
    type: "",
    location: "",
    message: ""
  });
  const update = (k) => (e) => setForm((f) => ({
    ...f,
    [k]: e.target.value
  }));
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email) {
      alert("Please fill all required fields");
      return;
    }
    setLoading(true);
    try {
      await emailjs.send("service_ad5fhxh", "template_c39s7pr", {
        name: form.name,
        phone: form.phone,
        email: form.email,
        type: form.type || "Not Provided",
        location: form.location || "Not Provided",
        message: form.message || "No Message",
        owner_email: OWNER_EMAIL,
        time: (/* @__PURE__ */ new Date()).toLocaleString()
      }, {
        publicKey: "HTKACiAJ_BZXqVubc"
      });
      navigate({
        to: "/thank-you",
        search: {
          name: form.name,
          email: form.email,
          phone: form.phone
        }
      });
      setForm({
        name: "",
        phone: "",
        email: "",
        type: "",
        location: "",
        message: ""
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send enquiry");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Get in Touch", title: "Let's Design Together" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-12 md:py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-luxury px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3 order-first lg:order-last", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "bg-card border border-border/60 p-5 sm:p-8 md:p-10 rounded-3xl shadow-luxury", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl sm:text-3xl mb-2", children: "Book Free Consultation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-6", children: "Fill the form and our team will contact you shortly." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full Name", name: "name", required: true, value: form.name, onChange: update("name") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", name: "phone", type: "tel", required: true, value: form.phone, onChange: update("phone") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email", required: true, value: form.email, onChange: update("email") }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Project Type", name: "type", placeholder: "Apartment / Villa / Office", value: form.type, onChange: update("type") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Location", name: "location", placeholder: "Chennai / Dubai", value: form.location, onChange: update("location") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Project Details" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 5, value: form.message, onChange: update("message"), placeholder: "Tell us about your project...", className: "mt-2 w-full bg-background border border-border focus:border-gold outline-none px-4 py-3 text-sm rounded-xl resize-none transition-all" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", disabled: loading, className: "w-full inline-flex items-center justify-center gap-2 bg-primary text-white py-3.5 rounded-xl hover:bg-[oklch(0.55_0.12_70)] transition-all font-medium", children: [
              loading ? "Sending..." : "Send Inquiry",
              /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-center text-muted-foreground", children: "Your enquiry will be securely delivered to our email team." })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-5 order-last lg:order-first", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl sm:text-3xl mb-3", children: "Visit Our Studio" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm sm:text-base text-muted-foreground leading-relaxed", children: "Drop by our studio or reach out — we'd love to hear about your project." })
          ] }),
          [{
            Icon: MapPin,
            label: "Office Address",
            value: "No. 9, Railway Colony 3rd Street, 2nd Main Road, Aminjikarai, Chennai"
          }, {
            Icon: Phone,
            label: "Phone",
            value: "+91 97898 71626"
          }, {
            Icon: Mail,
            label: "Email",
            value: "hauz360degree@gmail.com"
          }, {
            Icon: Clock,
            label: "Working Hours",
            value: "Monday – Sunday : 10:30 AM – 8:00 PM"
          }].map(({
            Icon,
            label,
            value
          }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 p-4 sm:p-5 border border-border/60 rounded-2xl bg-card hover:border-gold transition-all", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-gold flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-5 h-5 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-widest text-muted-foreground", children: label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-medium mt-1 text-sm sm:text-base break-words", children: value })
            ] })
          ] }, label))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 md:mt-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl sm:text-3xl text-center mb-6", children: "Find Us On Map" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-3xl border border-border/60 shadow-luxury aspect-[16/9] sm:aspect-[16/8]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Hauz360 Location", src: MAP_EMBED_URL, className: "w-full h-full", loading: "lazy" }) })
      ] })
    ] }) })
  ] });
}
function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  value,
  onChange
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: [
      label,
      required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: " *" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name, type, required, placeholder, value, onChange, className: "mt-2 w-full bg-background border border-border focus:border-gold outline-none px-4 py-3 text-sm rounded-xl transition-all" })
  ] });
}
export {
  Contact as component
};
