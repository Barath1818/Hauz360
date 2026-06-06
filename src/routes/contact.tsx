import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "./about";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

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

const OWNER_EMAIL = "barathraj1818@gmail.com";

type FormState = {
  name: string;
  phone: string;
  email: string;
  type: string;
  location: string;
  message: string;
};

function Contact() {
  const [sent, setSent] = useState(false);

  const [submitted, setSubmitted] =
    useState<FormState | null>(null);

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
        "service_hzvz8ke",
        "template_f13xyki",
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
          publicKey: "u0RzhM5NwbGls8J4d",
        }
      );

      setSubmitted(form);
      setSent(true);

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
            {/* LEFT SIDE */}
            <div className="lg:col-span-2 space-y-5">
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
                    "splusaarchitectureandinteriors@gmail.com",
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

            {/* RIGHT SIDE */}
            <div className="lg:col-span-3">
              {sent && submitted ? (
                <ThankYouCard
                  data={submitted}
                  onReset={() => {
                    setSent(false);
                    setSubmitted(null);
                  }}
                />
              ) : (
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
              )}
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
                src="https://www.google.com/maps?q=Railway+Colony+3rd+Street+2nd+Main+Road+Aminjikarai+Chennai&output=embed"
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

function ThankYouCard({
  data,
  onReset,
}: {
  data: FormState;
  onReset: () => void;
}) {
  return (
    <div className="bg-card border border-gold/40 rounded-3xl overflow-hidden shadow-luxury">
      {/* TOP */}
      <div className="bg-gradient-dark text-primary-foreground p-6 sm:p-10 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,var(--gold)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,var(--gold)_0%,transparent_50%)]" />

        <div className="relative z-10">
          <div className="w-20 h-20 rounded-full bg-gradient-gold mx-auto flex items-center justify-center shadow-gold mb-5">
            <CheckCircle2 className="w-10 h-10 text-primary" />
          </div>

          <div className="flex items-center justify-center gap-2 text-gold text-xs uppercase tracking-[0.25em] mb-3">
            <Sparkles className="w-3 h-3" />
            Enquiry Received
            <Sparkles className="w-3 h-3" />
          </div>

          <h2 className="font-display text-3xl sm:text-5xl mb-3">
            Thank You!
          </h2>

          <p className="text-sm sm:text-base text-primary-foreground/80 max-w-lg mx-auto">
            Your enquiry has been delivered successfully.
            Our team will contact you within 24 hours.
          </p>
        </div>
      </div>

      {/* BODY */}
      <div className="p-5 sm:p-8 space-y-6">
        <div className="border border-border/60 rounded-2xl p-5 bg-background/40">
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">
            Enquiry Summary
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <SummaryRow
              label="Name"
              value={data.name}
            />

            <SummaryRow
              label="Phone"
              value={data.phone}
            />

            <SummaryRow
              label="Email"
              value={data.email}
              full
            />

            {data.type && (
              <SummaryRow
                label="Project Type"
                value={data.type}
              />
            )}

            {data.location && (
              <SummaryRow
                label="Location"
                value={data.location}
              />
            )}
          </div>
        </div>

        <button
          onClick={onReset}
          className="w-full py-3.5 rounded-xl bg-gradient-gold text-primary font-medium hover:shadow-gold transition-all"
        >
          Send Another Enquiry
        </button>
      </div>
    </div>
  );
}

function SummaryRow({
  label,
  value,
  full,
}: {
  label: string;
  value: string;
  full?: boolean;
}) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
        {label}
      </div>

      <div className="font-medium break-words">
        {value}
      </div>
    </div>
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