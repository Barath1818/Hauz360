import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHeader, l as livingImg, v as villaImg } from "./router-Bj_OSdnz.mjs";
import { k as kitchenImg, o as officeImg, c as commercialImg } from "./commercial-BYQZEF1y.mjs";
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
const bedroomImg = "/assets/bed-AOsg7Bij.jpg";
const furniture = "/assets/furniture-BpCQVLkG.jpg";
const celing = "/assets/ceiling-CtzRkMrT.jpg";
const items = [{
  img: livingImg,
  cat: "Living Room",
  size: "tall"
}, {
  img: kitchenImg,
  cat: "Kitchen",
  size: "wide"
}, {
  img: bedroomImg,
  cat: "Bedroom",
  size: "tall"
}, {
  img: officeImg,
  cat: "Office",
  size: "wide"
}, {
  img: villaImg,
  cat: "Villa",
  size: "tall"
}, {
  img: commercialImg,
  cat: "Commercial",
  size: "wide"
}, {
  img: celing,
  cat: "Ceiling Design",
  size: "wide"
}, {
  img: furniture,
  cat: "Furniture",
  size: "tall"
}];
function Gallery() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { eyebrow: "Visual Stories", title: "Interior Design Gallery" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-luxury", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "break-inside-avoid relative group overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: it.img, alt: it.cat, loading: "lazy", width: 800, height: it.size === "tall" ? 1e3 : 600, className: `w-full object-cover transition-transform duration-700 group-hover:scale-110 ${it.size === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold text-xs tracking-[0.25em] uppercase", children: it.cat }) })
    ] }, i)) }) }) })
  ] });
}
export {
  Gallery as component
};
