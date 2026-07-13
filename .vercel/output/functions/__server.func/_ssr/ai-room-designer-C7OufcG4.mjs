import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { o as officeImg, c as commercialImg, k as kitchenImg } from "./commercial-BYQZEF1y.mjs";
import { b as bedroomImg } from "./bedroom-CgpgAMwL.mjs";
import { o as office1Img, h as hallImg } from "./router-DwrnnI3p.mjs";
import { v as villaImg } from "./villa-k3wPOkWd.mjs";
import { S as Sparkles, W as WandSparkles, D as Download } from "../_libs/lucide-react.mjs";
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
const kitchen1Img = "/assets/kitchen1-DttuPWFf.jpg";
const kitchen2Img = "/assets/kitchen2-CB7sX22U.jpg";
const kitchen3Img = "/assets/kitchen3-lqXJokMl.jpg";
const kitchen4Img = "/assets/kitchen4-BnC66Q-G.jpg";
const kitchen5Img = "/assets/kitchen5-CL5HCk7Y.jpg";
const kitchen6Img = "/assets/kitchen6-DB53_GZo.jpg";
const kitchen7Img = "/assets/kitchen7-DY9_H0yQ.jpg";
const bedroom1Img = "/assets/bedroom1-DhcuJ_4E.jpg";
const bedroom2Img = "/assets/bedroom2-DM7cwVI-.jpg";
const bedroom3Img = "/assets/bedroom3-BHxJ92ba.jpg";
const bedroom4Img = "/assets/bedroom4-B_nf_6Fo.jpg";
const bedroom5Img = "/assets/bedroom5-q3IfDcJR.jpg";
const bedroom6Img = "/assets/bedroom6-DhP9WAon.jpg";
const bedroom7Img = "/assets/bedroom7-CLFJPAtR.jpg";
const office3Img = "/assets/office3-BBm3eZTM.jpg";
const office4Img = "/assets/office4-B2OoemKO.jpg";
const office5Img = "/assets/office5-CrsxAcD-.jpg";
const office6Img = "/assets/office6-Tq0_Kspl.jpg";
const office7Img = "/assets/office7-DbB9yTm2.jpg";
const villa1Img = "/assets/villa1-DYeHqciO.jpg";
const villa2Img = "/assets/villa2-B3qipdO8.jpg";
const villa3Img = "/assets/villa3-B3-dGvZj.jpg";
const villa4Img = "/assets/villa4-BFJiCWxu.jpg";
const villa5Img = "/assets/villa5-DgYAnBVk.jpg";
const villa6Img = "/assets/villa6-Cbs4ueaN.jpg";
const villa7Img = "/assets/villa7-BRZF-gaL.jpg";
const offfice2Img = "/assets/offfice2-Cu9MSUnL.jpg";
function AIRoomDesigner() {
  const [style, setStyle] = reactExports.useState("Luxury");
  const [roomType, setRoomType] = reactExports.useState("Kitchen");
  const [generatedDesigns, setGeneratedDesigns] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  const roomTypes = [
    "Kitchen",
    "Hall",
    "Bedroom",
    "Office",
    "Villa"
  ];
  const styles = [
    "Luxury",
    "Modern",
    "Minimal",
    "Scandinavian",
    "Classic",
    "Dark"
  ];
  const pickRandomImages = (images, count) => {
    const available = [...images];
    const picked = [];
    while (picked.length < count && available.length > 0) {
      const index = Math.floor(
        Math.random() * available.length
      );
      picked.push(available.splice(index, 1)[0]);
    }
    while (picked.length < count) {
      picked.push(images[picked.length % images.length]);
    }
    return picked;
  };
  const roomAssetMap = {
    Kitchen: [
      kitchenImg,
      kitchen1Img,
      kitchen2Img,
      kitchen3Img,
      kitchen4Img,
      kitchen5Img,
      kitchen6Img,
      kitchen7Img
    ],
    Hall: [hallImg, commercialImg],
    Bedroom: [
      bedroomImg,
      bedroom1Img,
      bedroom2Img,
      bedroom3Img,
      bedroom4Img,
      bedroom5Img,
      bedroom6Img,
      bedroom7Img
    ],
    Office: [
      officeImg,
      office1Img,
      office3Img,
      office4Img,
      office5Img,
      office6Img,
      office7Img,
      offfice2Img
    ],
    Villa: [
      villaImg,
      villa1Img,
      villa2Img,
      villa3Img,
      villa4Img,
      villa5Img,
      villa6Img,
      villa7Img
    ]
  };
  const buildDesigns = (currentRoomType) => {
    const images = roomAssetMap[currentRoomType]?.length > 0 ? roomAssetMap[currentRoomType] : roomAssetMap.Kitchen;
    return pickRandomImages(images, 4).map(
      (src, index) => ({
        id: index,
        label: `${currentRoomType} Design ${index + 1}`,
        src,
        placeholder: false
      })
    );
  };
  const generateAI = async () => {
    setLoading(true);
    setTimeout(() => {
      setGeneratedDesigns(buildDesigns(roomType));
      setLoading(false);
    }, 2500);
  };
  const getStyleClass = () => {
    switch (style) {
      case "Luxury":
        return "brightness-110 contrast-125 saturate-125 sepia-[0.15]";
      case "Modern":
        return "contrast-125 saturate-110";
      case "Minimal":
        return "grayscale-[0.2] brightness-110";
      case "Scandinavian":
        return "brightness-125 saturate-75";
      case "Classic":
        return "sepia-[0.25] contrast-110";
      case "Dark":
        return "brightness-75 contrast-125";
      default:
        return "";
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "min-h-screen bg-background py-10 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card overflow-hidden shadow-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-8 h-8 text-white" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold", children: "Room Designer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Choose a room type and style to preview room designs." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-4", children: "Choose Room Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: roomTypes.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setRoomType(item),
            className: `px-5 py-2.5 rounded-full border transition-all ${roomType === item ? "bg-violet-600 text-white border-violet-600" : "border-border hover:border-violet-500"}`,
            children: item
          },
          item
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-4", children: "Choose Interior Style" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-3", children: styles.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setStyle(item),
            className: `px-5 py-2.5 rounded-full border transition-all ${style === item ? "bg-violet-600 text-white border-violet-600" : "border-border hover:border-violet-500"}`,
            children: item
          },
          item
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-3", children: "Design Preview" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-3xl overflow-hidden border border-border bg-muted min-h-[180px] flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-[180px] w-full flex flex-col items-center justify-center text-muted-foreground px-6 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg font-medium", children: "Select a room type and style, then click Generate." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm", children: "New images appear only after button click." })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: generateAI,
          disabled: loading,
          className: "w-full h-14 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold flex items-center justify-center gap-2 hover:scale-[1.01] transition-all",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(WandSparkles, { className: "w-5 h-5" }),
            loading ? "Generating designs..." : "Generate designs"
          ]
        }
      ),
      generatedDesigns.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-between gap-4 mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold text-lg", children: [
            roomType,
            " Design Variations"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
            generatedDesigns.length,
            " variations previewed."
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: generatedDesigns.map((design) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-3xl overflow-hidden border border-border bg-muted h-[180px] relative",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: design.src,
                  alt: design.label,
                  className: `w-full h-full object-cover transition-all duration-700 ${getStyleClass()}`
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/10" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3 px-2 py-1 rounded-full bg-black/70 text-white text-[10px] backdrop-blur", children: design.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: design.src,
                  download: true,
                  className: "absolute top-3 right-3 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black/90 transition",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4" })
                }
              )
            ]
          },
          design.id
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-2xl p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: "Luxury Styles" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "Modern, Minimal, Classic, Scandinavian and more." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border rounded-2xl p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold", children: "Download Design" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "Save redesigned room instantly." })
        ] })
      ] })
    ] })
  ] }) }) });
}
function AIPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AIRoomDesigner, {});
}
export {
  AIPage as component
};
