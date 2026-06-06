import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "./about";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    q: "Hauz360 transformed our apartment beautifully. The design quality and execution were outstanding.",
    n: "Arun Kumar",
    role: "3 BHK Apartment, Chennai",
    rating: 5,
  },
  {
    q: "Professional team with excellent creativity. Our office now looks modern and premium.",
    n: "Faisal Rahman",
    role: "Corporate Office, Dubai",
    rating: 4,
  },
  {
    q: "Highly recommended for luxury interiors and modular kitchen designs.",
    n: "Divya Srinivasan",
    role: "Villa Owner, Chennai",
    rating: 5,
  },
  {
    q: "From concept to handover, the team was meticulous. The result exceeded our expectations.",
    n: "Mohammed Ali",
    role: "Penthouse, Dubai",
    rating: 4,
  },
  {
    q: "Loved the 3D visualizations — we knew exactly what we were getting. Beautifully done.",
    n: "Keerthana Raj",
    role: "Apartment Interior, Chennai",
    rating: 5,
  },
  {
    q: "Our showroom now has the perfect ambience our brand needed. Stunning work.",
    n: "Ahmed Khan",
    role: "Retail Showroom, Dubai",
    rating: 4,
  },
];

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      {
        title: "Client Testimonials — Hauz360 Design Studio",
      },
      {
        name: "description",
        content:
          "Read what our clients say about working with Hauz360 Design Studio.",
      },
      {
        property: "og:title",
        content: "Client Testimonials — Hauz360",
      },
      {
        property: "og:description",
        content: "Stories from our happy clients.",
      },
      {
        property: "og:url",
        content: "/testimonials",
      },
    ],

    links: [
      {
        rel: "canonical",
        href: "/testimonials",
      },
    ],

    scripts: [
      {
        type: "application/ld+json",

        children: JSON.stringify({
          "@context": "https://schema.org",

          "@type": "LocalBusiness",

          name: "Hauz360 Design Studio",

          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: 6,
          },

          review: reviews.map((r) => ({
            "@type": "Review",

            reviewRating: {
              "@type": "Rating",
              ratingValue: r.rating,
            },

            author: {
              "@type": "Person",
              name: r.n,
            },

            reviewBody: r.q,
          })),
        }),
      },
    ],
  }),

  component: Testimonials,
});

function Testimonials() {
  return (
    <>
      <PageHeader
        eyebrow="Testimonials"
        title="What Our Clients Say"
      />

      <section className="py-20">
        <div className="container-luxury grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.n}
              className="relative bg-card border border-border/60 p-8 rounded-2xl hover:border-gold hover:shadow-luxury transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gold/15" />

              {/* Rating */}
              <div className="flex gap-1 text-gold mb-4">
                {[...Array(r.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-gold"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="italic leading-relaxed text-foreground/90 mb-6">
                "{r.q}"
              </p>

              {/* Client */}
              <div>
                <div className="font-display text-lg">
                  {r.n}
                </div>

                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                  {r.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}