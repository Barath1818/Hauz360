// src/components/site/Footer.tsx
import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-gradient-dark text-primary-foreground mt-16 sm:mt-20 md:mt-24">
      <div className="container-luxury py-8 sm:py-12 md:py-16 grid gap-8 sm:gap-10 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 sm:px-6">
        <div>
          <div className="mb-4"><Logo light /></div>
          <p className="text-xs sm:text-sm text-primary-foreground/70 leading-relaxed">
            Architecture and interior solutions for modern living. Premium design
            for homes, offices and commercial spaces across Chennai & Dubai.
          </p>
          <div className="flex gap-3 mt-6">
            <a
              href="https://www.instagram.com/splusa_architecturechennai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 sm:w-9 sm:h-9 grid place-items-center border border-primary-foreground/20 hover:bg-gold hover:text-primary hover:border-gold transition-all"
            >
              <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-gold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h4>
          <ul className="space-y-2 text-xs sm:text-sm text-primary-foreground/80">
            {[
              ["/", "Home"], ["/about", "About"], ["/services", "Services"],
              ["/projects", "Projects"], ["/gallery", "Gallery"], ["/careers", "Careers"], ["/contact", "Contact"],
            ].map(([to, l]) => (
              <li key={to}><Link to={to} className="hover:text-gold transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-gold text-base sm:text-lg mb-3 sm:mb-4">Our Services</h4>
          <ul className="space-y-2 text-xs sm:text-sm text-primary-foreground/80">
            {["Interior Design", "Architectural Design", "Construction", "Modular Kitchens", "Custom Furniture", "3D Visualization"].map(s => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-gold text-base sm:text-lg mb-3 sm:mb-4">Contact</h4>
          <ul className="space-y-3 text-xs sm:text-sm text-primary-foreground/80">
            <li className="flex gap-2 sm:gap-3"><MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-gold shrink-0 mt-0.5" /><span className="text-xs sm:text-sm">No. 9, Railway Colony 3rd Street, 2nd Main Road, Aminjikarai, Chennai, Tamil Nadu</span></li>
            <li className="flex gap-2 sm:gap-3"><Phone className="w-3 h-3 sm:w-4 sm:h-4 text-gold shrink-0 mt-0.5" /><a href="tel:+919789871626" className="hover:text-gold text-xs sm:text-sm">+91 97898 71626</a></li>
            <li className="flex gap-2 sm:gap-3"><Mail className="w-3 h-3 sm:w-4 sm:h-4 text-gold shrink-0 mt-0.5" /><a href="mailto:hauz360degree@gmail.com" className="hover:text-gold break-all text-xs sm:text-sm">hauz360degree@gmail.com</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-luxury py-4 sm:py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] sm:text-xs text-primary-foreground/60 px-4 sm:px-6">
          <p>&copy; {new Date().getFullYear()} Hauz360 - All rights reserved.</p>
          <p className="italic font-display text-gold/80 text-center">"Architecture and Interior Solutions."</p>
        </div>
      </div>
    </footer>
  );
}