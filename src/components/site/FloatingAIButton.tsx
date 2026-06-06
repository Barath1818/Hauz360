
import { Link } from "@tanstack/react-router";
import {
  Sparkles,
} from "lucide-react";

import { WhatsAppButton } from "./WhatsAppButton";
import { ChatBot } from "./ChatBot";

export default function FloatingButtons() {
  return (
    <>
      {/* FLOATING BUTTONS */}
      <div
        className="
          fixed
          bottom-4
          right-4
          z-[999]
          flex
          flex-col
          items-end
          gap-3
          sm:bottom-6
          sm:right-6
        "
      >
        {/* Room designer button */}
        <Link
          to="/ai-room-designer"
          aria-label="Open room designer"
          className="
            group
            relative
            flex
            items-center
            justify-center
            w-14
            h-14
            sm:w-16
            sm:h-16
            rounded-full
            bg-gradient-to-r
            from-violet-600
            via-fuchsia-600
            to-pink-600
            text-white
            shadow-2xl
            hover:scale-110
            active:scale-95
            transition-all
            duration-300
          "
        >
          <Sparkles className="w-6 h-6 sm:w-7 sm:h-7" />

          {/* PING EFFECT */}
          <span
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-full
              animate-ping
              bg-fuchsia-500/30
            "
          />
        </Link>

        {/* CHATBOT */}
        <div className="relative z-[998]">
          <ChatBot embed />
        </div>

        {/* WHATSAPP */}
        <div className="relative z-[997]">
          <WhatsAppButton />
        </div>
      </div>
    </>
  );
}

