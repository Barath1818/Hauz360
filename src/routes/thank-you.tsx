import { createFileRoute } from "@tanstack/react-router";
import {
  CheckCircle2,
  Sparkles,
  Home,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You — Hauz360 Design Studio" },
      {
        name: "description",
        content:
          "Thank you for your inquiry. Our team will contact you shortly.",
      },
    ],
  }),
  component: ThankYou,
});

function ThankYou() {
  const searchParams = Route.useSearch() as {
    name?: string;
    email?: string;
    phone?: string;
  };

  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-background to-background/95 flex items-center justify-center px-4 py-12 md:py-20">
      <div className="w-full max-w-2xl">
        {/* MAIN CARD */}
        <div className="bg-card border border-border/60 rounded-3xl overflow-hidden shadow-2xl">
          {/* SUCCESS HEADER */}
          <div className="bg-gradient-to-br from-primary/10 via-transparent to-gold/5 border-b border-border/40 p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              {/* CHECKMARK ICON */}
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold to-gold/60 flex items-center justify-center shadow-lg animate-in fade-in zoom-in duration-500">
                <CheckCircle2 className="w-12 h-12 text-primary" />
              </div>

              {/* SUCCESS BADGE */}
              <div className="flex items-center justify-center gap-2 text-gold text-xs uppercase tracking-[0.25em] font-semibold mb-4">
                <Sparkles className="w-4 h-4" />
                Success
                <Sparkles className="w-4 h-4" />
              </div>

              {/* MAIN HEADING */}
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-primary to-gold bg-clip-text text-transparent">
                Thank You!
              </h1>

              {/* SUBHEADING */}
              <p className="text-base sm:text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
                Your inquiry has been successfully received. We're excited to
                hear from you and will get back to you within 24 hours.
              </p>
            </div>
          </div>

          {/* CONTENT BODY */}
          <div className="p-8 sm:p-10 md:p-12 space-y-8">
            {/* INQUIRY SUMMARY */}
            {searchParams.name && (
              <div className="bg-background/50 border border-border/40 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Mail className="w-5 h-5 text-gold" />
                  <h3 className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">
                    Inquiry Summary
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      Your Name
                    </p>
                    <p className="text-base font-medium text-foreground">
                      {searchParams.name}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      Email Address
                    </p>
                    <p className="text-base font-medium text-foreground break-all">
                      {searchParams.email}
                    </p>
                  </div>

                  {searchParams.phone && (
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                        Phone Number
                      </p>
                      <p className="text-base font-medium text-foreground">
                        {searchParams.phone}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* NEXT STEPS */}
            <div className="bg-gradient-to-br from-gold/10 to-gold/5 border border-gold/20 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-gold" />
                What Happens Next?
              </h3>

              <ol className="space-y-3 text-sm sm:text-base text-muted-foreground">
                <li className="flex gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gold text-primary font-semibold text-xs flex-shrink-0">
                    1
                  </span>
                  <span>
                    Our design team will review your inquiry
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gold text-primary font-semibold text-xs flex-shrink-0">
                    2
                  </span>
                  <span>
                    We'll contact you via phone or email within
                    24 hours
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gold text-primary font-semibold text-xs flex-shrink-0">
                    3
                  </span>
                  <span>
                    We'll schedule a free consultation to
                    discuss your project
                  </span>
                </li>
              </ol>
            </div>

            {/* CONTACT INFO */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex gap-4 p-4 border border-border/40 rounded-xl hover:border-gold/40 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-gold" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    Call Us
                  </p>
                  <a
                    href="tel:+919789871626"
                    className="text-sm font-medium text-foreground hover:text-gold transition-colors"
                  >
                    +91 97898 71626
                  </a>
                </div>
              </div>

              <div className="flex gap-4 p-4 border border-border/40 rounded-xl hover:border-gold/40 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-gold" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                    Email Us
                  </p>
                  <a
                    href="mailto:splusaarchitectureandinteriors@gmail.com"
                    className="text-sm font-medium text-foreground hover:text-gold transition-colors truncate"
                  >
                    s+a@hauz360.com
                  </a>
                </div>
              </div>
            </div>

            {/* GO HOME BUTTON */}
            <button
              onClick={handleGoHome}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-gold/80 text-primary py-4 rounded-xl hover:shadow-lg hover:shadow-gold/40 transition-all font-semibold text-base sm:text-lg group"
            >
              <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Go Back to Home
            </button>

            {/* ADDITIONAL NOTE */}
            <p className="text-center text-xs text-muted-foreground leading-relaxed">
              Check your email (including spam folder) for our confirmation
              message. If you don't hear from us within 24 hours, feel free to
              reach out directly.
            </p>
          </div>
        </div>

        {/* DECORATIVE ELEMENT */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-gold" />
            Based in Chennai • Serving Pan India & UAE
          </p>
        </div>
      </div>
    </section>
  );
}
