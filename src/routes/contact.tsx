import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { PageHeader } from "./about";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
} from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import envConfig from "../lib/env";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Hauz360 Design Studio" },
      {
        name: "description",
        content:
          "Get in touch with Hauz360 Design Studio. Book a free consultation for your interior design project.",
      },
    ],
  }),
  component: Contact,
});

const OWNER_EMAIL = "hauz360degree@gmail.com";
const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(envConfig.contact.mapsQuery)}&output=embed`;

type FormState = {
  name: string;
  phone: string;
  email: string;
  type: string;
  location: string;
  message: string;
};

function Contact() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    type: "",
    location: "",
    message: "",
  });

  const update =
    (k: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement
      >
    ) =>
      setForm((f) => ({
        ...f,
        [k]: e.target.value,
      }));

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.email) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_ad5fhxh",
        "template_c39s7pr",
        {
          name: form.name,
          phone: form.phone,
          email: form.email,
          type: form.type || "Not Provided",
          location: form.location || "Not Provided",
          message: form.message || "No Message",
          owner_email: OWNER_EMAIL,
          time: new Date().toLocaleString(),
        },
        {
          publicKey: "HTKACiAJ_BZXqVubc",
        }
      );

      // Navigate to thank you page with user info
      navigate({
        to: "/thank-you",
        search: {
          name: form.name,
          email: form.email,
          phone: form.phone,
        },
      });

      setForm({
        name: "",
        phone: "",
        email: "",
        type: "",
        location: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send enquiry");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Let's Design Together"
      />

      <section className="py-12 md:py-20">
        <div className="container-luxury px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* RIGHT SIDE - Book Consultation Form (Shows first on mobile) */}
            <div className="lg:col-span-3 order-first lg:order-last">
              <form
                onSubmit={handleSubmit}
                className="bg-card border border-border/60 p-5 sm:p-8 md:p-10 rounded-3xl shadow-luxury"
              >
                <h2 className="font-display text-2xl sm:text-3xl mb-2">
                  Book Free Consultation
                </h2>

                <p className="text-sm text-muted-foreground mb-6">
                  Fill the form and our team will contact
                  you shortly.
                </p>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field
                      label="Full Name"
                      name="name"
                      required
                      value={form.name}
                      onChange={update("name")}
                    />

                    <Field
                      label="Phone"
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={update("phone")}
                    />
                  </div>

                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={update("email")}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field
                      label="Project Type"
                      name="type"
                      placeholder="Apartment / Villa / Office"
                      value={form.type}
                      onChange={update("type")}
                    />

                    <Field
                      label="Location"
                      name="location"
                      placeholder="Chennai / Dubai"
                      value={form.location}
                      onChange={update("location")}
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-widest text-muted-foreground">
                      Project Details
                    </label>

                    <textarea
                      rows={5}
                      value={form.message}
                      onChange={update("message")}
                      placeholder="Tell us about your project..."
                      className="mt-2 w-full bg-background border border-border focus:border-gold outline-none px-4 py-3 text-sm rounded-xl resize-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white py-3.5 rounded-xl hover:bg-[oklch(0.55_0.12_70)] transition-all font-medium"
                  >
                    {loading
                      ? "Sending..."
                      : "Send Inquiry"}

                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-center text-muted-foreground">
                    Your enquiry will be securely delivered
                    to our email team.
                  </p>
                </div>
              </form>
            </div>

            {/* LEFT SIDE - Visit Our Studio (Shows second on mobile) */}
            <div className="lg:col-span-2 space-y-5 order-last lg:order-first">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl mb-3">
                  Visit Our Studio
                </h2>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Drop by our studio or reach out — we'd love
                  to hear about your project.
                </p>
              </div>

              {[
                {
                  Icon: MapPin,
                  label: "Office Address",
                  value:
                    "No. 9, Railway Colony 3rd Street, 2nd Main Road, Aminjikarai, Chennai",
                },
                {
                  Icon: Phone,
                  label: "Phone",
                  value: "+91 97898 71626",
                },
                {
                  Icon: Mail,
                  label: "Email",
                  value:
                    "hauz360degree@gmail.com",
                },
                {
                  Icon: Clock,
                  label: "Working Hours",
                  value:
                    "Monday – Sunday : 10:30 AM – 8:00 PM",
                },
              ].map(({ Icon, label, value }) => (
                <div
                  key={label}
                  className="flex gap-4 p-4 sm:p-5 border border-border/60 rounded-2xl bg-card hover:border-gold transition-all"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-gold flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  <div className="min-w-0">
                    <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                      {label}
                    </div>

                    <div className="font-medium mt-1 text-sm sm:text-base break-words">
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MAP */}
          <div className="mt-14 md:mt-20">
            <h2 className="font-display text-2xl sm:text-3xl text-center mb-6">
              Find Us On Map
            </h2>

            <div className="overflow-hidden rounded-3xl border border-border/60 shadow-luxury aspect-[16/9] sm:aspect-[16/8]">
              <iframe
                title="Hauz360 Location"
                src={MAP_EMBED_URL}
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">
        {label}

        {required && (
          <span className="text-gold"> *</span>
        )}
      </label>

      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="mt-2 w-full bg-background border border-border focus:border-gold outline-none px-4 py-3 text-sm rounded-xl transition-all"
      />
    </div>
  );
}