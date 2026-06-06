import { useState, useEffect } from "react";
import {
  X,
  Sparkles,
  Send,
  CheckCircle2,
} from "lucide-react";
import emailjs from "@emailjs/browser";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const OWNER_EMAIL = "barathraj1818@gmail.com";

export function ClickConsultPopup({
  isOpen,
  onClose,
}: PopupProps) {
  const [sent, setSent] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    type: "",
    location: "",
    message: "",
  });

  const [submittedName, setSubmittedName] =
    useState("");

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setSent(false);

        setForm({
          name: "",
          phone: "",
          email: "",
          type: "",
          location: "",
          message: "",
        });

        setSubmittedName("");
      }, 300);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.phone ||
      !form.email
    ) {
      alert("Please fill required fields");
      return;
    }

    try {
      await emailjs.send(
        "service_hzvz8ke",
        "template_f13xyki",
        {
          subject: "🏡 Hauz360 Interior Enquiry",
          name: form.name,
          phone: form.phone,
          email: form.email,
          type: form.type || "Not Provided",
          location:
            form.location || "Not Provided",
          message:
            form.message || "No Message",
          owner_email: OWNER_EMAIL,
          time: new Date().toLocaleString(),
        },
        {
          publicKey: "u0RzhM5NwbGls8J4d",
        }
      );

      setSubmittedName(form.name);
      setSent(true);
    } catch (error) {
      console.error("EMAILJS ERROR:", error);

      alert(
        "Failed to send enquiry. Please try again."
      );
    }
  };

  const handleNewEnquiry = () => {
    setSent(false);

    setForm({
      name: "",
      phone: "",
      email: "",
      type: "",
      location: "",
      message: "",
    });

    setSubmittedName("");
  };

  // SUCCESS POPUP
  if (sent) {
    return (
      <div
        className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm flex items-center justify-center px-3 sm:px-4 py-5"
        onClick={onClose}
      >
        <div
          className="
            relative
            w-[92%]
            sm:w-full
            max-w-[340px]
            sm:max-w-md
            bg-card
            border
            border-gold/30
            rounded-2xl
            shadow-2xl
            overflow-hidden
            animate-popup
          "
          onClick={(e) =>
            e.stopPropagation()
          }
        >
          {/* CLOSE */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 text-muted-foreground hover:text-gold transition"
          >
            <X className="w-5 h-5" />
          </button>

          {/* HEADER */}
          <div className="relative bg-gradient-dark text-primary-foreground px-5 py-8 sm:px-8 sm:py-10 text-center overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,var(--gold)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,var(--gold)_0%,transparent_50%)]" />

            <div className="relative z-10">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-gold flex items-center justify-center mx-auto mb-5 shadow-gold">
                <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>

              <div className="flex items-center justify-center gap-2 text-gold text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-3">
                <Sparkles className="w-3 h-3" />
                Enquiry Received
                <Sparkles className="w-3 h-3" />
              </div>

              <h2 className="font-display text-2xl sm:text-4xl mb-3">
                Thank You,
                {" "}
                {submittedName.split(" ")[0]}!
              </h2>

              <p className="text-primary-foreground/80 text-sm sm:text-base leading-relaxed max-w-sm mx-auto">
                Your enquiry has been delivered
                successfully.
              </p>
            </div>
          </div>

          {/* BODY */}
          <div className="p-5 sm:p-7 space-y-5">
            <div className="border border-border/60 rounded-xl p-4 bg-background/40">
              <h3 className="text-[11px] uppercase tracking-[0.2em] text-gold mb-4">
                Enquiry Summary
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground text-xs uppercase">
                    Name
                  </p>

                  <p className="font-medium break-all">
                    {form.name}
                  </p>
                </div>

                <div>
                  <p className="text-muted-foreground text-xs uppercase">
                    Phone
                  </p>

                  <p className="font-medium break-all">
                    {form.phone}
                  </p>
                </div>

                <div className="sm:col-span-2">
                  <p className="text-muted-foreground text-xs uppercase">
                    Email
                  </p>

                  <p className="font-medium break-all">
                    {form.email}
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={handleNewEnquiry}
              className="w-full h-11 sm:h-12 rounded-xl bg-gradient-gold text-primary font-medium hover:text-white hover:shadow-gold transition-all"
            >
              Send Another Enquiry
            </button>
          </div>
        </div>

        <style>{`
          @keyframes popup {
            from {
              opacity: 0;
              transform: scale(0.95);
            }

            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          .animate-popup {
            animation: popup 0.25s ease;
          }
        `}</style>
      </div>
    );
  }

  // FORM POPUP
  return (
    <div
      className="fixed inset-0 z-[200] bg-black/70 backdrop-blur-sm flex items-center justify-center px-3 sm:px-4 py-5"
      onClick={onClose}
    >
      <div
        className="
          relative
          w-[92%]
          sm:w-full
          max-w-[340px]
          xs:max-w-[360px]
          sm:max-w-md
          md:max-w-xl
          bg-card
          border
          border-gold/30
          rounded-2xl
          shadow-2xl
          overflow-hidden
          animate-popup
        "
        onClick={(e) =>
          e.stopPropagation()
        }
      >
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-muted-foreground hover:text-gold transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* HEADER */}
        <div className="relative bg-gradient-dark text-primary-foreground px-5 py-7 sm:px-8 sm:py-9 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,var(--gold)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,var(--gold)_0%,transparent_50%)]" />

          <div className="relative z-10">
            <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-gold mx-auto mb-3" />

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl mb-2">
              Free Consultation
            </h2>

            <p className="text-primary-foreground/80 text-xs sm:text-sm md:text-base max-w-md mx-auto leading-relaxed">
              Fill in your details and our
              design expert will contact you.
            </p>
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="p-4 sm:p-6 md:p-7 space-y-4 sm:space-y-5"
        >
          {/* NAME + PHONE */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full h-11 sm:h-12 rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-gold"
            />

            <input
              type="tel"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full h-11 sm:h-12 rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-gold"
            />
          </div>

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full h-11 sm:h-12 rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-gold"
          />

          {/* TYPE + LOCATION */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full h-11 sm:h-12 rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-gold"
            >
              <option value="">
                Select Project Type
              </option>

              <option value="Residential">
                Residential
              </option>

              <option value="Villa">
                Villa
              </option>

              <option value="Office">
                Office
              </option>

              <option value="Commercial">
                Commercial
              </option>

              <option value="Kitchen">
                Modular Kitchen
              </option>
            </select>

            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Location"
              className="w-full h-11 sm:h-12 rounded-xl border border-border bg-background px-4 text-sm outline-none focus:border-gold"
            />
          </div>

          {/* MESSAGE */}
          <textarea
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-gold resize-none"
          />

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full h-11 sm:h-12 rounded-xl bg-gradient-gold text-primary font-medium hover:text-white hover:shadow-gold transition-all flex items-center justify-center gap-2"
          >
            Send Enquiry

            <Send className="w-4 h-4" />
          </button>

          <p className="text-center text-[10px] sm:text-[11px] text-muted-foreground leading-relaxed">
            Your enquiry will be securely sent
            to our team.
          </p>
        </form>
      </div>

      <style>{`
        @keyframes popup {
          from {
            opacity: 0;
            transform: scale(0.95);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-popup {
          animation: popup 0.25s ease;
        }
      `}</style>
    </div>
  );
}