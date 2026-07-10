import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useCallback, useRef } from "react";
import { PageHeader } from "./about";

// Import main images
import livingImg from "@/assets/hero1.jpg";
import kitchenImg from "@/assets/Kit1.jpg";
import officeImg from "@/assets/off3.jpg";
import bathroomImg from "@/assets/Bath3.jpg";
import villaImg from "@/assets/vilas1.jpg";

// Import additional images for each project
import livingImg2 from "@/assets/hero2.jpg";
import kitchenImg2 from "@/assets/Kit2.jpg";
import officeImg2 from "@/assets/off2.jpg";
import bathroomImg2 from "@/assets/Bath1.jpg";
import villaImg2 from "@/assets/vilas2.jpg";

import livingImg3 from "@/assets/hero3.jpg";
import kitchenImg3 from "@/assets/Kit3.jpg";
import officeImg3 from "@/assets/off4.jpg";
import bathroomImg3 from "@/assets/Bath2.jpg";
import villaImg3 from "@/assets/vilas3.jpg";

import livingImg4 from "@/assets/hero_living2.jpg";
import kitchenImg4 from "@/assets/Kit.jpg";
import officeImg4 from "@/assets/office1.jpg";
import bathroomImg4 from "@/assets/Bath.jpg";
import villaImg4 from "@/assets/vilas.jpg";

// Import specific images for new projects
// Bashyam Crown M1
import bashyamImg1 from "@/assets/bashyam1.jpg";
import bashyamImg2 from "@/assets/bashyam2.jpg";
import bashyamImg3 from "@/assets/bashyam3.jpg";
import bashyamImg4 from "@/assets/bashyam4.jpg";

// Sugal & Damani Lakeside
import sugalImg1 from "@/assets/sugal1.jpg";
import sugalImg2 from "@/assets/sugal2.jpg";
import sugalImg3 from "@/assets/sugal3.jpg";
import sugalImg4 from "@/assets/sugal4.jpg";

// The Ace by Risland
import aceImg1 from "@/assets/ace1.jpg";
import aceImg2 from "@/assets/ace2.jpg";
import aceImg3 from "@/assets/ace3.jpg";
import aceImg4 from "@/assets/ace4.jpg";

// NRC Fresh Cuts
import nrcImg1 from "@/assets/nrc1.jpg";
import nrcImg2 from "@/assets/nrc2.jpg";
import nrcImg3 from "@/assets/nrc3.jpg";
import nrcImg4 from "@/assets/nrc4.jpg";

export const Route = createFileRoute("/projects")({
  component: Projects,
});

// Projects with multiple images
const projects = [
  { 
    id: "bashyam-crown-m1",
    mainImg: bashyamImg1,
    images: [bashyamImg1, bashyamImg2, bashyamImg3, bashyamImg4],
    name: "Bashyam Crown", 
    category: "Bashyam Crown", 
    location: "A6 Tower 4 Baashyam Crowne Residences Koyambedu Chennai - 600107", 
    area: "4,200 sqft", 
    style: "Contemporary Luxury", 
    time: "16 weeks",
    description: "A stunning penthouse with panoramic city views, featuring open-plan living spaces, floor-to-ceiling windows, and premium finishes throughout. The design emphasizes natural light and seamless indoor-outdoor flow.",
    features: [
      "Floor-to-ceiling windows",
      "Open-plan living",
      "Smart home automation",
      "Private terrace garden"
    ]
  },
  { 
    id: "sugal-damani-lakeside",
    mainImg: sugalImg1,
    images: [sugalImg1, sugalImg2, sugalImg3, sugalImg4],
    name: "Sugal & Damani Lakeside", 
    category: "Sugal & Damani", 
    location: "LAKESIDE Surapet Chennai, Kadirvedu Tamil Nadu 600066", 
    area: "6,800 sqft", 
    style: "Classical Modern", 
    time: "22 weeks",
    description: "A magnificent villa blending classical architecture with modern amenities. This property features expansive gardens, a private pool, and meticulously designed interiors that honor traditional craftsmanship.",
    features: [
      "Private swimming pool",
      "Landscaped gardens",
      "Traditional craftsmanship",
      "Entertainment wing"
    ]
  },
  { 
    id: "the-ace-by-risland",
    mainImg: aceImg1,
    images: [aceImg1, aceImg2, aceImg3, aceImg4],
    name: "The Ace by Risland", 
    category: "The Ace", 
    location: "Chennai, India", 
    area: "12,000 sqft", 
    style: "Corporate Modern", 
    time: "18 weeks",
    description: "A state-of-the-art corporate headquarters designed for innovation and collaboration. The space features flexible work zones, cutting-edge technology integration, and sustainable design elements.",
    features: [
      "Flexible work zones",
      "Technology integration",
      "Sustainable design",
      "Collaboration spaces"
    ]
  },
  { 
    id: "nrc-fresh-cuts",
    mainImg: nrcImg1,
    images: [nrcImg1, nrcImg2, nrcImg3, nrcImg4],
    name: "NRC Fresh Cuts", 
    category: "NRC", 
    location: "Chennai, India", 
    area: "320 sqft", 
    style: "Modular Premium", 
    time: "6 weeks",
    description: "A premium modular kitchen that combines functionality with aesthetic excellence. Featuring smart storage solutions, premium appliances, and elegant finishes that make cooking a delight.",
    features: [
      "Smart storage solutions",
      "Premium appliances",
      "Quartz countertops",
      "LED under-cabinet lighting"
    ]
  },
  // Original projects
  { 
    id: "skyline-penthouse",
    mainImg: livingImg,
    images: [livingImg, livingImg2, livingImg3, livingImg4],
    name: "Skyline Penthouse", 
    category: "Luxury Home", 
    location: "Chennai, India", 
    area: "4,200 sqft", 
    style: "Contemporary Luxury", 
    time: "16 weeks",
    description: "A stunning penthouse with panoramic city views, featuring open-plan living spaces, floor-to-ceiling windows, and premium finishes throughout. The design emphasizes natural light and seamless indoor-outdoor flow.",
    features: [
      "Floor-to-ceiling windows",
      "Open-plan living",
      "Smart home automation",
      "Private terrace garden"
    ]
  },
  { 
    id: "heritage-villa",
    mainImg: villaImg,
    images: [villaImg, villaImg2, villaImg3, villaImg4],
    name: "Heritage Villa", 
    category: "Villa", 
    location: "Chennai, India", 
    area: "6,800 sqft", 
    style: "Classical Modern", 
    time: "22 weeks",
    description: "A magnificent villa blending classical architecture with modern amenities. This property features expansive gardens, a private pool, and meticulously designed interiors that honor traditional craftsmanship.",
    features: [
      "Private swimming pool",
      "Landscaped gardens",
      "Traditional craftsmanship",
      "Entertainment wing"
    ]
  },
  { 
    id: "apex-corporate-hq",
    mainImg: officeImg,
    images: [officeImg, officeImg2, officeImg3, officeImg4],
    name: "Apex Corporate HQ", 
    category: "Office", 
    location: "Dubai, UAE", 
    area: "12,000 sqft", 
    style: "Corporate Modern", 
    time: "18 weeks",
    description: "A state-of-the-art corporate headquarters designed for innovation and collaboration. The space features flexible work zones, cutting-edge technology integration, and sustainable design elements.",
    features: [
      "Flexible work zones",
      "Technology integration",
      "Sustainable design",
      "Collaboration spaces"
    ]
  },
  { 
    id: "aurelia-modular-kitchen",
    mainImg: kitchenImg,
    images: [kitchenImg, kitchenImg2, kitchenImg3, kitchenImg4],
    name: "Aurelia Modular Kitchen", 
    category: "Kitchen", 
    location: "Chennai, India", 
    area: "320 sqft", 
    style: "Modular Premium", 
    time: "6 weeks",
    description: "A premium modular kitchen that combines functionality with aesthetic excellence. Featuring smart storage solutions, premium appliances, and elegant finishes that make cooking a delight.",
    features: [
      "Smart storage solutions",
      "Premium appliances",
      "Quartz countertops",
      "LED under-cabinet lighting"
    ]
  },
  { 
    id: "serenity-spa-bathroom",
    mainImg: bathroomImg,
    images: [bathroomImg, bathroomImg2, bathroomImg3, bathroomImg4],
    name: "Serenity Spa Bathroom", 
    category: "Bathroom", 
    location: "Dubai, UAE", 
    area: "280 sqft", 
    style: "Luxury Spa", 
    time: "8 weeks",
    description: "A luxurious spa-inspired bathroom designed for ultimate relaxation. Features include a freestanding soaking tub, rainfall shower, heated floors, and premium marble finishes creating a serene sanctuary.",
    features: [
      "Freestanding soaking tub",
      "Rainfall shower system",
      "Heated flooring",
      "Premium marble finishes",
      "Ambient lighting"
    ]
  },
];

const categories = ["All", "Bashyam Crown", "Sugal & Damani", "The Ace", "NRC", "Luxury Home", "Villa", "Office", "Kitchen", "Bathroom"];

function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const list = filter === "All" ? projects : projects.filter(p => p.category === filter);
  const scrollPositionRef = useRef(0);

  // Handle body scroll lock with proper restoration
  useEffect(() => {
    if (selectedProject) {
      // Save current scroll position
      scrollPositionRef.current = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scroll position
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      // Use requestAnimationFrame to ensure DOM update
      requestAnimationFrame(() => {
        window.scrollTo(0, scrollPositionRef.current);
      });
    }

    return () => {
      // Cleanup on unmount
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const openProject = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = useCallback(() => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  }, [selectedProject]);

  const prevImage = useCallback(() => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  }, [selectedProject]);

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      
      if (e.key === 'Escape') {
        closeProject();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevImage();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextImage();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, nextImage, prevImage]);

  // Handle touch swipe for mobile - improved with passive listeners
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    // Only handle if the touch is on the image container
    const target = e.target as HTMLElement;
    if (target.closest('.image-container')) {
      setTouchStartX(e.touches[0].clientX);
      setIsSwiping(true);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSwiping) return;
    setTouchEndX(e.touches[0].clientX);
    // Prevent page scroll when swiping on image
    e.preventDefault();
  };

  const handleTouchEnd = () => {
    if (!isSwiping) return;
    
    if (touchStartX - touchEndX > 50) {
      nextImage();
    } else if (touchStartX - touchEndX < -50) {
      prevImage();
    }
    
    setTouchStartX(0);
    setTouchEndX(0);
    setIsSwiping(false);
  };

  return (
    <>
      <PageHeader eyebrow="Portfolio" title="Our Recent Projects" />
      <section className="py-16">
        <div className="container-luxury">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2 text-sm tracking-wide border transition-all ${
                  filter === c ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-gold hover:text-gold"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((p) => (
              <article
                key={p.id}
                onClick={() => openProject(p)}
                className="group cursor-pointer bg-card border border-border rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={p.mainImg}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <span className="text-white text-sm font-semibold p-4">
                      {p.images.length} images • Click to view
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-xs tracking-[0.25em] uppercase text-gold">
                    {p.category}
                  </span>

                  <h2 className="font-display text-2xl mt-2 mb-4">
                    {p.name}
                  </h2>

                  <dl className="grid grid-cols-2 gap-y-2 text-sm">
                    <dt className="text-muted-foreground">Location</dt>
                    <dd>{p.location}</dd>

                    <dt className="text-muted-foreground">Area</dt>
                    <dd>{p.area}</dd>

                    <dt className="text-muted-foreground">Style</dt>
                    <dd>{p.style}</dd>

                    <dt className="text-muted-foreground">Duration</dt>
                    <dd>{p.time}</dd>
                  </dl>
                </div>
              </article>
            ))}
          </div>

          {selectedProject && (
            <div 
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4 md:p-6"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  closeProject();
                }
              }}
            >
              <div className="bg-white rounded-2xl max-w-6xl w-full overflow-auto max-h-[98vh] sm:max-h-[95vh] md:max-h-[90vh] relative animate-in fade-in zoom-in duration-300">
                {/* Close Button */}
                <button
                  onClick={closeProject}
                  className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 text-2xl md:text-3xl font-bold text-gray-700 hover:text-gray-900 transition-colors z-20 bg-white/90 hover:bg-white rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg hover:shadow-xl"
                  aria-label="Close project"
                >
                  ×
                </button>

                {/* Image Carousel */}
                <div className="relative bg-black/5">
                  <div 
                    className="image-container aspect-[4/3] sm:aspect-[16/9] md:aspect-[16/10] overflow-hidden flex items-center justify-center bg-gray-100 relative touch-none"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                  >
                    <img
                      src={selectedProject.images[currentImageIndex]}
                      alt={`${selectedProject.name} - Image ${currentImageIndex + 1}`}
                      className="w-full h-full object-contain transition-opacity duration-500 pointer-events-none"
                      draggable="false"
                    />
                  </div>

                  {/* Image Counter */}
                  <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-0.5 sm:px-4 sm:py-1 rounded-full text-xs sm:text-sm font-medium backdrop-blur-sm">
                    {currentImageIndex + 1} / {selectedProject.images.length}
                  </div>

                  {/* Navigation Buttons */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
                        aria-label="Previous image"
                      >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
                        aria-label="Next image"
                      >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </>
                  )}

                  {/* Thumbnail Strip */}
                  {selectedProject.images.length > 1 && (
                    <div className="absolute bottom-10 sm:bottom-14 md:bottom-16 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-black/50 backdrop-blur-sm rounded-lg overflow-x-auto max-w-[90%] sm:max-w-[85%] md:max-w-[80%]">
                      {selectedProject.images.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                            currentImageIndex === idx 
                              ? 'border-white scale-110' 
                              : 'border-transparent hover:border-white/50'
                          }`}
                        >
                          <img
                            src={img}
                            alt={`Thumbnail ${idx + 1}`}
                            className="w-full h-full object-cover"
                            draggable="false"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Project Details */}
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between mb-4 sm:mb-6">
                    <div>
                      <span className="text-xs sm:text-sm tracking-[0.25em] uppercase text-gold font-semibold">
                        {selectedProject.category}
                      </span>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-1 sm:mt-2">
                        {selectedProject.name}
                      </h2>
                    </div>
                    <div className="mt-2 sm:mt-0 bg-gold/10 text-gold px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                      {selectedProject.time}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-xl">
                      <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-1">Location</h4>
                      <p className="text-sm sm:text-base font-semibold">{selectedProject.location}</p>
                    </div>
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-xl">
                      <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-1">Area</h4>
                      <p className="text-sm sm:text-base font-semibold">{selectedProject.area}</p>
                    </div>
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-xl col-span-2 md:col-span-1">
                      <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-1">Style</h4>
                      <p className="text-sm sm:text-base font-semibold">{selectedProject.style}</p>
                    </div>
                  </div>

                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Project Description</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-7 md:leading-8">
                      {selectedProject.description}
                    </p>
                  </div>

                  {selectedProject.features && (
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Key Features</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {selectedProject.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
                            <span className="text-gold text-base sm:text-xl">✦</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Projects;