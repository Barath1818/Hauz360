import { useState } from "react";

import {
  Sparkles,
  Wand2,
  Download,
} from "lucide-react";

import kitchenImg from "@/assets/kitchen.jpg";
import kitchen1Img from "@/assets/kitchen1.jpg";
import kitchen2Img from "@/assets/kitchen2.jpg";
import kitchen3Img from "@/assets/kitchen3.jpg";
import kitchen4Img from "@/assets/kitchen4.jpg";
import kitchen5Img from "@/assets/kitchen5.jpg";
import kitchen6Img from "@/assets/kitchen6.jpg";
import kitchen7Img from "@/assets/kitchen7.jpg";
import bedroomImg from "@/assets/bedroom.jpg";
import bedroom1Img from "@/assets/bedroom1.jpg";
import bedroom2Img from "@/assets/bedroom2.jpg";
import bedroom3Img from "@/assets/bedroom3.jpg";
import bedroom4Img from "@/assets/bedroom4.jpg";
import bedroom5Img from "@/assets/bedroom5.jpg";
import bedroom6Img from "@/assets/bedroom6.jpg";
import bedroom7Img from "@/assets/bedroom7.jpg";
import officeImg from "@/assets/office.jpg";
import office1Img from "@/assets/office1.jpg";
import office3Img from "@/assets/office3.jpg";
import office4Img from "@/assets/office4.jpg";
import office5Img from "@/assets/office5.jpg";
import office6Img from "@/assets/office6.jpg";
import office7Img from "@/assets/office7.jpg";
import villaImg from "@/assets/villa.jpg";
import villa1Img from "@/assets/villa1.jpg";
import villa2Img from "@/assets/villa2.jpg";
import villa3Img from "@/assets/villa3.jpg";
import villa4Img from "@/assets/villa4.jpg";
import villa5Img from "@/assets/villa5.jpg";
import villa6Img from "@/assets/villa6.jpg";
import villa7Img from "@/assets/villa7.jpg";
import hallImg from "@/assets/hero-living.jpg";
import commercialImg from "@/assets/commercial.jpg";
import offfice2Img from "@/assets/offfice2.jpg";

type Design = {
  id: number;
  label: string;
  src: string;
  placeholder?: boolean;
};

export default function AIRoomDesigner() {
  const [style, setStyle] =
    useState("Luxury");

  const [roomType, setRoomType] =
    useState("Kitchen");

  const [generatedDesigns, setGeneratedDesigns] =
    useState<Design[]>([]);

  const [loading, setLoading] =
    useState(false);

  const roomTypes = [
    "Kitchen",
    "Hall",
    "Bedroom",
    "Office",
    "Villa",
  ];

  const styles = [
    "Luxury",
    "Modern",
    "Minimal",
    "Scandinavian",
    "Classic",
    "Dark",
  ];

  const pickRandomImages = (
    images: string[],
    count: number
  ) => {
    const available = [...images];
    const picked: string[] = [];

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

  const roomAssetMap: Record<string, string[]> = {
    Kitchen: [
      kitchenImg,
      kitchen1Img,
      kitchen2Img,
      kitchen3Img,
      kitchen4Img,
      kitchen5Img,
      kitchen6Img,
      kitchen7Img,
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
      bedroom7Img,
    ],
    Office: [
      officeImg,
      office1Img,
      office3Img,
      office4Img,
      office5Img,
      office6Img,
      office7Img,
      offfice2Img,
    ],
    Villa: [
      villaImg,
      villa1Img,
      villa2Img,
      villa3Img,
      villa4Img,
      villa5Img,
      villa6Img,
      villa7Img,
    ],
  };

  const buildDesigns = (currentRoomType: string) => {
    const images =
      roomAssetMap[currentRoomType]?.length > 0
        ? roomAssetMap[currentRoomType]
        : roomAssetMap.Kitchen;

    return pickRandomImages(images, 4).map(
      (src, index) => ({
        id: index,
        label: `${currentRoomType} Design ${index + 1}`,
        src,
        placeholder: false,
      })
    );
  };

  // Demo design effect
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

  return (
    <section className="min-h-screen bg-background py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl border border-border bg-card overflow-hidden shadow-2xl">
          {/* HEADER */}
          <div className="p-6 border-b border-border">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-white" />
              </div>

              <div>
                <h1 className="text-3xl font-bold">
                  Room Designer
                </h1>

                <p className="text-muted-foreground">
                  Choose a room type and style to preview room designs.
                </p>
              </div>
            </div>
          </div>

          {/* BODY */}
          <div className="p-6 space-y-8">
            {/* ROOM TYPE */}
            <div>
              <h3 className="font-semibold mb-4">
                Choose Room Type
              </h3>

              <div className="flex flex-wrap gap-3">
                {roomTypes.map((item) => (
                  <button
                    key={item}
                    onClick={() => setRoomType(item)}
                    className={`px-5 py-2.5 rounded-full border transition-all ${
                      roomType === item
                        ? "bg-violet-600 text-white border-violet-600"
                        : "border-border hover:border-violet-500"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* STYLES */}
            <div>
              <h3 className="font-semibold mb-4">
                Choose Interior Style
              </h3>

              <div className="flex flex-wrap gap-3">
                {styles.map((item) => (
                  <button
                    key={item}
                    onClick={() => setStyle(item)}
                    className={`px-5 py-2.5 rounded-full border transition-all ${
                      style === item
                        ? "bg-violet-600 text-white border-violet-600"
                        : "border-border hover:border-violet-500"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">
                Design Preview
              </h3>

              <div className="rounded-3xl overflow-hidden border border-border bg-muted min-h-[180px] flex items-center justify-center">
                <div className="h-[180px] w-full flex flex-col items-center justify-center text-muted-foreground px-6 text-center">
                  <p className="text-lg font-medium">
                    Select a room type and style, then click Generate.
                  </p>
                  <p className="mt-2 text-sm">
                    New images appear only after button click.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={generateAI}
              disabled={loading}
              className="w-full h-14 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-semibold flex items-center justify-center gap-2 hover:scale-[1.01] transition-all"
            >
              <Wand2 className="w-5 h-5" />

              {loading
                ? "Generating designs..."
                : "Generate designs"}
            </button>

            {generatedDesigns.length > 0 && (
              <div>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-semibold text-lg">
                      {roomType} Design Variations
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {generatedDesigns.length} variations previewed.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {generatedDesigns.map((design) => (
                    <div
                      key={design.id}
                      className="rounded-3xl overflow-hidden border border-border bg-muted h-[180px] relative"
                    >
                      <img
                        src={design.src}
                        alt={design.label}
                        className={`w-full h-full object-cover transition-all duration-700 ${getStyleClass()}`}
                      />

                      <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/10" />

                      <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-black/70 text-white text-[10px] backdrop-blur">
                        {design.label}
                      </div>

                      <a
                        href={design.src}
                        download
                        className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black/90 transition"
                      >
                        <Download className="w-4 h-4" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FEATURES */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="border border-border rounded-2xl p-5">
                <h4 className="font-semibold">
                  Luxury Styles
                </h4>

                <p className="text-sm text-muted-foreground mt-2">
                  Modern, Minimal, Classic,
                  Scandinavian and more.
                </p>
              </div>

              <div className="border border-border rounded-2xl p-5">
                <h4 className="font-semibold">
                  Download Design
                </h4>

                <p className="text-sm text-muted-foreground mt-2">
                  Save redesigned room instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}