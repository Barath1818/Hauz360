import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

type Msg = {
  role: "bot" | "user";
  text: string;
  options?: string[];
};

const QUICK = [
  "Our Services",
  "Book Consultation",
  "Pricing",
  "Portfolio",
  "Office Address",
  "Working Hours",
  "Contact Info",
  "Why Hauz 360?",
];

function reply(input: string): Msg {
  const q = input.toLowerCase().trim();

  if (/^(hi|hello|hey)/.test(q)) {
    return {
      role: "bot",
      text: "Hello 👋 Welcome to Hauz 360 Design Studio. How can I help you today?",
      options: QUICK,
    };
  }

  if (/(service|offer)/.test(q)) {
    return {
      role: "bot",
      text:
        "We provide:\n\n🏠 Interior Design\n📐 Architecture\n🛋️ Modular Kitchen\n🏢 Office Interiors\n🎥 3D Visualization\n🔨 Renovation",
      options: ["Pricing", "Portfolio", "Book Consultation"],
    };
  }

  if (/(pricing|cost|price)/.test(q)) {
    return {
      role: "bot",
      text:
        "💰 Pricing depends on project size, material selection and customization level.\n\nBasic: ₹1200/sqft+\nPremium: ₹1800/sqft+\nLuxury: ₹2800/sqft+",
      options: ["Book Consultation"],
    };
  }

  if (/(contact|phone|email)/.test(q)) {
    return {
      role: "bot",
      text:
        "📞 +91 97898 71626\n✉️ splusaarchitectureandinteriors@gmail.com",
      options: ["Book Consultation"],
    };
  }

  if (/(office|address|location)/.test(q)) {
    return {
      role: "bot",
      text:
        "📍 Chennai Office:\nNo. 9 Railway Colony 3rd Street,\n2nd Main Road, Aminjikarai,\nChennai, Tamil Nadu",
      options: ["Working Hours"],
    };
  }

  if (/(hour|time|open)/.test(q)) {
    return {
      role: "bot",
      text:
        "🕒 Monday - Sunday\n10:30 AM - 8:00 PM",
      options: ["Book Consultation"],
    };
  }

  if (/(portfolio|projects|gallery)/.test(q)) {
    return {
      role: "bot",
      text:
        "✨ We have completed luxury villas, apartments, modular kitchens and office interiors in Chennai & Dubai.",
      options: ["Go to Projects", "Book Consultation"],
    };
  }

  if (/(book|consultation|consult)/.test(q)) {
    return {
      role: "bot",
      text:
        "🎉 You can book a FREE consultation from our Contact page.",
      options: ["Go to Contact"],
    };
  }

  return {
    role: "bot",
    text:
      "I'd love to help 😊 Please choose one of the options below.",
    options: QUICK,
  };
}

export function ChatBot({ embed = false }: { embed?: boolean }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "bot",
      text:
        "Hi 👋 I'm Hauz Assistant. Ask me about pricing, services, projects or consultation.",
      options: QUICK,
    },
  ]);

  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing]);

  const send = (text: string) => {
    const t = text.trim();

    if (!t) return;

    setMessages((m) => [
      ...m,
      {
        role: "user",
        text: t,
      },
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
            text: "Opening Contact Page...",
          },
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
            text: "Opening Projects...",
          },
        ]);

        setTimeout(() => {
          window.location.href = "/projects";
        }, 500);

        return;
      }

      setMessages((m) => [...m, reply(t)]);
    }, 600);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Chat"
        className={
          `
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
        `
        }
      >
        {open ? (
          <X className="w-6 h-6 sm:w-7 sm:h-7" />
        ) : (
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
        )}

        {!open && (
          <span className="absolute top-1 right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
        )}
      </button>

      {/* Chat Window */}
      {open && (
        <div
          className={
            `
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
          `
          }
        >
          {/* Header */}
          <div className="bg-gradient-dark text-white px-4 py-4 flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-gold text-primary font-bold grid place-items-center">
                H
              </div>

              <Sparkles className="w-3 h-3 absolute -top-1 -right-1 text-yellow-300 animate-pulse" />
            </div>

            <div className="flex-1">
              <h3 className="font-semibold text-sm sm:text-base">
                Hauz Assistant
              </h3>

              <p className="text-[11px] opacity-80">
                Online • Replies instantly
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="hover:text-yellow-300"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-3 sm:px-4 py-4 space-y-3 bg-background">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${
                  m.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div className="max-w-[90%] sm:max-w-[85%]">
                  <div
                    className={`
                      px-4
                      py-3
                      rounded-2xl
                      text-sm
                      whitespace-pre-line
                      leading-relaxed

                      ${
                        m.role === "user"
                          ? "bg-primary text-white rounded-br-sm"
                          : "bg-muted border border-border rounded-bl-sm"
                      }
                    `}
                  >
                    {m.text}
                  </div>

                  {m.options && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {m.options.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => send(opt)}
                          className="
                            text-xs
                            px-3
                            py-1.5
                            rounded-full
                            border
                            border-gold/40
                            hover:bg-gradient-gold
                            hover:text-primary
                            transition-all
                          "
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Typing */}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-muted border border-border rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-gold animate-bounce" />
                  <span
                    className="w-2 h-2 rounded-full bg-gold animate-bounce"
                    style={{ animationDelay: "0.15s" }}
                  />
                  <span
                    className="w-2 h-2 rounded-full bg-gold animate-bounce"
                    style={{ animationDelay: "0.3s" }}
                  />
                </div>
              </div>
            )}

            <div ref={endRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="
              border-t
              border-border
              p-3
              flex
              items-center
              gap-2
              bg-card
            "
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              className="
                flex-1
                bg-background
                border
                border-border
                focus:border-gold
                outline-none
                px-4
                py-3
                text-sm
                rounded-xl
                transition-colors
              "
            />

            <button
              type="submit"
              className="
                w-11
                h-11
                rounded-xl
                bg-gradient-gold
                text-primary
                grid
                place-items-center
                hover:shadow-lg
                transition-all
                shrink-0
              "
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}