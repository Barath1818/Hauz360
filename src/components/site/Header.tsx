// src/components/site/Header.tsx
import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { ClickConsultPopup } from "./ClickConsultPopup";
import { useIsMobile } from "@/hooks/use-mobile";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/process", label: "Process" },
  { to: "/gallery", label: "Gallery" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const isMobile = useIsMobile();

  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !isHome;

  useEffect(() => {
    if (!isMobile && open) {
      setOpen(false);
    }
  }, [isMobile, open]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          solid ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-black/30 backdrop-blur-sm"
        }`}
      >
        <div className="container-luxury flex items-center justify-between h-14 sm:h-16 md:h-20 px-3 sm:px-4 md:px-6">
          <Link to="/" className="flex items-center group shrink-0">
            <Logo light={!solid} className="text-base sm:text-xl md:text-2xl" />
          </Link>

          {/* Desktop Navigation - Hidden on mobile/tablet */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-7">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-xs xl:text-sm font-medium tracking-wide hover:text-gold transition-colors whitespace-nowrap ${
                  solid ? "text-foreground" : "text-white drop-shadow-md"
                }`}
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Free Consultation Button */}
          <button
            onClick={() => setIsPopupOpen(true)}
            className={`hidden lg:inline-flex items-center px-3 xl:px-5 py-1.5 xl:py-2.5 text-xs xl:text-sm font-medium tracking-wide transition-all duration-300 ${
              solid
                ? "bg-primary text-white hover:bg-gradient-gold hover:text-primary hover:text-white hover:shadow-lg hover:-translate-y-0.5"
                : "bg-gradient-gold text-primary hover:shadow-gold hover:-translate-y-0.5"
            }`}
          >
            Free Consultation
          </button>

          {/* Mobile/Tablet Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden p-2 rounded-md transition-colors ${
              solid ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
            }`}
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile/Tablet Navigation Drawer */}
        {open && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setOpen(false)}
            />
            {/* Drawer */}
            <div className="fixed left-0 right-0 top-14 sm:top-16 md:top-20 bg-background border-t shadow-xl z-40 max-h-[calc(100vh-3.5rem)] overflow-y-auto animate-slide-down">
              <nav className="container-luxury py-3 sm:py-4 flex flex-col">
                {links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="text-base sm:text-lg py-3 sm:py-4 px-4 border-b border-border/50 hover:text-gold hover:bg-muted/50 transition-colors"
                    activeProps={{ className: "text-gold font-medium" }}
                    activeOptions={{ exact: l.to === "/" }}
                  >
                    {l.label}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    setOpen(false);
                    setIsPopupOpen(true);
                  }}
                  className="text-base sm:text-lg py-3 sm:py-4 px-4 mt-3 bg-gradient-gold text-primary font-medium text-center hover:shadow-gold transition-all rounded-md"
                >
                  Free Consultation
                </button>
              </nav>
            </div>
          </>
        )}
      </header>

      <ClickConsultPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
}