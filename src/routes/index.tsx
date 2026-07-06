import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Phone,
  Sparkles,
  Home,
  Briefcase,
  ChefHat,
  Bed,
  Sofa,
  Store,
  LayoutGrid,
  Box,
  Hammer,
  Star,
  CheckCircle2,
} from "lucide-react";

// Import all project images
import livingImg from "@/assets/hero1.jpg";
import kitchenImg from "@/assets/Kit1.jpg";
import officeImg from "@/assets/off2.jpg";
import bathroomImg from "@/assets/Bath3.jpg";
import villaImg from "@/assets/vilas1.jpg";
import livingImg2 from "@/assets/hero2.jpg";
import kitchenImg2 from "@/assets/Kit2.jpg";
import officeImg2 from "@/assets/off3.jpg";
import bathroomImg2 from "@/assets/Bath1.jpg";
import villaImg2 from "@/assets/vilas2.jpg";
import hero from "@/assets/hero-living.jpg";

// Import images for the 4 new projects
import bashyamImg1 from "@/assets/bashyam1.jpg";
import sugalImg1 from "@/assets/sugal1.jpg";
import aceImg1 from "@/assets/ace4.jpg";
import nrcImg1 from "@/assets/nrc1.jpg";

import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Hauz360 Design Studio — Luxury Interior Design",
      },
      {
        name: "description",
        content:
          "Premium interior designers creating elegant, functional spaces for homes, offices, modular kitchens and commercial environments.",
      },
      {
        property: "og:title",
        content:
          "Hauz360 Design Studio — Luxury Interior Design",
      },
      {
        property: "og:description",
        content:
          "Elegant, functional, and inspiring interiors.",
      },
      {
        property: "og:url",
        content: "/",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),

  component: Index,
});

const services = [
  {
    icon: Home,
    title: "Residential Interiors",
    desc: "Beautiful, functional interiors for apartments, villas and homes.",
  },
  {
    icon: Briefcase,
    title: "Office Interiors",
    desc: "Modern office designs that boost productivity and brand image.",
  },
  {
    icon: ChefHat,
    title: "Modular Kitchen",
    desc: "Smart, stylish and space-efficient kitchen solutions.",
  },
  {
    icon: Bed,
    title: "Bedroom Interiors",
    desc: "Elegant, comfortable bedroom concepts with custom furniture.",
  },
  {
    icon: Sofa,
    title: "Living Room Design",
    desc: "Stylish living spaces with modern aesthetics and premium finishes.",
  },
  {
    icon: Store,
    title: "Commercial Interiors",
    desc: "Retail shops, showrooms, cafes and commercial spaces.",
  },
  {
    icon: LayoutGrid,
    title: "Space Planning",
    desc: "Optimized layouts for better functionality and flow.",
  },
  {
    icon: Box,
    title: "3D Design & Visualization",
    desc: "Realistic 3D interior concepts before execution.",
  },
  {
    icon: Hammer,
    title: "Renovation & Remodeling",
    desc: "Transform old spaces into modern, luxurious environments.",
  },
];

const stats = [
  {
    value: "150+",
    label: "Projects Delivered",
  },
  {
    value: "12+",
    label: "Years Experience",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
  },
  {
    value: "40+",
    label: "Expert Designers",
  },
];

// Updated projects with the 4 new projects first, then the original ones
const projects = [
  // 4 New Projects (displayed first)
  {
    img: bashyamImg1,
    title: "Bashyam Crown M1",
    tag: "Bashyam Crown",
  },
  {
    img: sugalImg1,
    title: "Sugal & Damani Lakeside",
    tag: "Sugal & Damani",
  },
  {
    img: aceImg1,
    title: "The Ace by Risland",
    tag: "The Ace",
  },
  {
    img: nrcImg1,
    title: "NRC Fresh Cuts",
    tag: "NRC",
  },
  // Original projects
  {
    img: livingImg,
    title: "Skyline Penthouse",
    tag: "Luxury Home",
  },
  {
    img: villaImg,
    title: "Heritage Villa",
    tag: "Villa",
  },
  {
    img: officeImg,
    title: "Apex Corporate HQ",
    tag: "Office",
  },
  {
    img: kitchenImg,
    title: "Aurelia Modular Kitchen",
    tag: "Kitchen",
  },
  {
    img: bathroomImg,
    title: "Serenity Spa Bathroom",
    tag: "Bathroom",
  },
  {
    img: livingImg2,
    title: "Modern Living Space",
    tag: "Residential",
  },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative -mt-20 min-h-screen flex items-center text-primary-foreground overflow-hidden">
        <img
          src={hero}
          alt="Luxury interior design by Hauz360"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/40" />

        <div className="container-luxury relative z-10 px-4 sm:px-6 py-28 sm:py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 sm:w-10 bg-gold" />
              <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-gold">
                Hauz360 Design Studio
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-5">
              Luxury Interior Design For{" "}
              <span className="text-gold italic">
                Modern
              </span>{" "}
              Homes & Offices
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-primary-foreground/80 max-w-2xl leading-relaxed mb-8">
              We create elegant, functional and inspiring
              interiors for homes, offices, commercial spaces
              and luxury environments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-gold text-primary px-6 py-3.5 font-medium rounded-xl hover:shadow-gold transition-all"
              >
                Get Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 border border-white/40 px-6 py-3.5 rounded-xl hover:border-gold hover:text-gold transition-all"
              >
                View Our Projects
              </Link>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="absolute bottom-0 inset-x-0 bg-background/95 backdrop-blur">
          <div className="container-luxury grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {stats.map((s) => (
              <div
                key={s.label}
                className="py-5 sm:py-6 text-center"
              >
                <div className="font-display text-2xl sm:text-3xl md:text-4xl text-gold">
                  {s.value}
                </div>
                <div className="text-[10px] sm:text-xs tracking-widest uppercase text-muted-foreground mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-luxury px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              src={villaImg}
              alt="Hauz360 design studio"
              className="w-full h-[320px] sm:h-[420px] lg:h-[520px] object-cover rounded-2xl shadow-luxury"
            />

            <div className="absolute bottom-4 right-4 sm:-bottom-6 sm:-right-6 bg-gradient-gold text-primary p-4 sm:p-6 rounded-xl max-w-[220px]">
              <Sparkles className="w-5 h-5 mb-2" />
              <p className="font-display text-base sm:text-lg leading-tight">
                Crafted with passion since day one
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Welcome"
              title="Premium Interior Design Studio"
            />

            <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
              Hauz360 Design Studio is a premium interior
              design company specializing in residential and
              commercial interiors.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8 text-sm sm:text-base">
              From modern apartments to luxury villas and
              corporate offices, we design spaces that reflect
              personality, comfort and sophistication.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                "Customized Solutions",
                "Premium Materials",
                "Transparent Pricing",
                "On-Time Delivery",
              ].map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2 text-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all"
            >
              Learn more about us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/40">
        <div className="container-luxury px-4 sm:px-6">
          <SectionHeading
            center
            eyebrow="What We Do"
            title="Our Signature Services"
            subtitle="End-to-end interior solutions tailored to your lifestyle and budget."
          />

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
            {services.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group bg-card p-6 sm:p-8 border border-border/60 hover:border-gold hover:shadow-luxury transition-all rounded-2xl"
              >
                <div className="w-14 h-14 bg-gradient-gold rounded-xl grid place-items-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="font-display text-xl mb-2">
                  {title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-luxury px-4 sm:px-6">
          <SectionHeading
            center
            eyebrow="Portfolio"
            title="Recent Projects"
            subtitle="A glimpse into spaces we've designed and crafted."
          />

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
            {projects.map((p) => (
              <Link
                key={p.title}
                to="/projects"
                className="group relative overflow-hidden aspect-[4/5] rounded-2xl block"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-primary-foreground">
                  <span className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-gold">
                    {p.tag}
                  </span>

                  <h3 className="font-display text-xl sm:text-2xl mt-1">
                    {p.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-foreground/30 rounded-xl hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-dark text-primary-foreground">
        <div className="container-luxury px-4 sm:px-6">
          <SectionHeading
            center
            light
            eyebrow="Testimonials"
            title="Words From Our Clients"
          />

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                q: "Hauz360 transformed our home beautifully.",
                n: "Priya & Rohan",
              },
              {
                q: "Professional team with excellent creativity.",
                n: "Anand Mehta",
              },
              {
                q: "Highly recommended for luxury interiors.",
                n: "Sneha Kapoor",
              },
            ].map((t) => (
              <div
                key={t.n}
                className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl backdrop-blur"
              >
                <div className="flex gap-1 text-gold mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-gold"
                    />
                  ))}
                </div>

                <p className="italic leading-relaxed text-white/90 text-sm sm:text-base">
                  "{t.q}"
                </p>

                <div className="mt-6 font-display text-gold">
                  — {t.n}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-luxury px-4 sm:px-6">
          <div className="relative overflow-hidden bg-gradient-gold rounded-3xl p-8 sm:p-12 lg:p-20 text-center">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary mb-4 leading-tight">
              Ready to design your dream space?
            </h2>

            <p className="text-primary/80 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
              Book a free consultation with our design
              experts and bring your vision to life.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-xl hover:bg-charcoal transition-colors"
              >
                <Phone className="w-4 h-4" />
                Book Consultation
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3.5 rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Index;