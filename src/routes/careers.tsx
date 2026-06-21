import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "./about";
import { SectionHeading } from "@/components/site/SectionHeading";

import {
  Briefcase,
  MapPin,
  Clock,
  Mail,
  GraduationCap,
  Users,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/careers")({
  component: Careers,
});

const CAREERS_EMAIL = "hauz360degree@gmail.com";

type Job = {
  title: string;
  type: string;
  location: string;
  experience: string;
  description: string;
};

const jobs: Job[] = [
  {
    title: "Senior Interior Designer",
    type: "Full-time",
    location: "Chennai, India",
    experience: "4–7 Years",
    description:
      "Lead premium residential & commercial interior projects.",
  },
  {
    title: "Architect",
    type: "Full-time",
    location: "Chennai, India",
    experience: "3–6 Years",
    description:
      "Work on architectural planning, elevations & execution drawings.",
  },
  {
    title: "3D Visualizer",
    type: "Full-time",
    location: "Chennai, India",
    experience: "2–5 Years",
    description:
      "Create photorealistic 3D renders and walkthrough animations.",
  },
  {
    title: "Project Manager",
    type: "Full-time",
    location: "Dubai, UAE",
    experience: "5–8 Years",
    description:
      "Manage premium turnkey interior projects and execution.",
  },
  {
    title: "Design Internship",
    type: "Internship",
    location: "Chennai, India",
    experience: "Freshers",
    description:
      "Learn architecture & interiors through live project exposure.",
  },
];

const perks = [
  {
    icon: GraduationCap,
    title: "Learning & Growth",
    text: "Work alongside experienced architects and designers.",
  },
  {
    icon: Users,
    title: "Creative Team",
    text: "Collaborative culture focused on premium design quality.",
  },
  {
    icon: Sparkles,
    title: "Luxury Projects",
    text: "Work on high-end residential & commercial interiors.",
  },
];

function openMail(jobTitle: string, location: string) {
  const subject = `Application — ${jobTitle} (${location})`;

  const body = `
Hi Hauz360 Team,

I would like to apply for the ${jobTitle} position based in ${location}.

Name:
Phone:
Email:
Years of Experience:
Portfolio / LinkedIn:

Please find my resume attached.

Thanks & Regards
`;

  // OPEN GMAIL DIRECTLY IN BROWSER
  const gmailUrl =
    `https://mail.google.com/mail/?view=cm&fs=1` +
    `&to=${CAREERS_EMAIL}` +
    `&su=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;

  window.open(gmailUrl, "_blank");
}

function Careers() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Build Beautiful Spaces With Us"
      />

      {/* WHY JOIN */}
      <section className="py-14 md:py-20">
        <div className="container-luxury px-4">
          <SectionHeading
            eyebrow="Why Hauz360"
            title="A Studio That Invests In People"
          />

          <p className="text-center text-muted-foreground max-w-2xl mx-auto mt-4 text-sm md:text-base leading-relaxed">
            Join our passionate team creating premium interiors across Chennai
            & Dubai.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="
                  bg-card
                  border border-border/60
                  p-6 md:p-8
                  rounded-xl
                  hover:border-gold
                  transition-all
                "
              >
                <perk.icon className="w-10 h-10 text-gold mb-4" />

                <h3 className="font-display text-xl mb-3">
                  {perk.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {perk.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOB LIST */}
      <section className="py-14 md:py-20 bg-secondary/30">
        <div className="container-luxury px-4">
          <SectionHeading
            eyebrow="Open Positions"
            title="Current Opportunities"
          />

          <div className="grid gap-6 mt-12">
            {jobs.map((job) => (
              <div
                key={job.title}
                className="
                  bg-card
                  border border-border/60
                  rounded-xl
                  p-6 md:p-8
                  hover:border-gold
                  transition-all
                "
              >
                <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-6">
                  {/* LEFT CONTENT */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <Briefcase className="w-5 h-5 text-gold shrink-0" />

                      <h3 className="font-display text-2xl">
                        {job.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-5">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-gold" />
                        {job.location}
                      </span>

                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-gold" />
                        {job.type}
                      </span>

                      <span>{job.experience}</span>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {job.description}
                    </p>
                  </div>

                  {/* APPLY BUTTON */}
                  <button
                    onClick={() =>
                      openMail(job.title, job.location)
                    }
                    className="
                      inline-flex items-center justify-center gap-2
                      px-6 py-3
                      bg-gradient-gold
                      text-primary
                      font-medium
                      rounded-lg
                      hover:shadow-gold
                      transition-all
                      w-full
                      sm:w-auto
                    "
                  >
                    <Mail className="w-4 h-4" />
                    Apply via Email
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-14 md:py-20">
        <div className="container-luxury px-4">
          <div
            className="
              bg-gradient-dark
              text-primary-foreground
              p-8 md:p-14
              rounded-2xl
              text-center
            "
          >
            <Mail className="w-12 h-12 text-gold mx-auto mb-5" />

            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Don’t See Your Role?
            </h2>

            <p className="max-w-2xl mx-auto text-primary-foreground/80 leading-relaxed text-sm md:text-base mb-8">
              We’re always looking for talented architects, interior
              designers, visualizers and project managers.
            </p>

            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CAREERS_EMAIL}`}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex items-center justify-center gap-2
                px-7 py-3.5
                bg-gradient-gold
                text-primary
                rounded-lg
                font-medium
                hover:shadow-gold
                transition-all
                w-full
                sm:w-auto
              "
            >
              <Mail className="w-4 h-4" />
              {CAREERS_EMAIL}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
