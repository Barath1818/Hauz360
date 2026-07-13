// src/components/GoogleAnalytics.tsx
import { useEffect } from "react";

const GA4_ID = "G-C08XQ5R8SL";

export default function GoogleAnalytics() {
  useEffect(() => {
    console.log("🔍 GoogleAnalytics component mounted");

    // Check if GA4 is already loaded
    if (document.querySelector('script[src*="gtag/js?id=G-C08XQ5R8SL"]')) {
      console.log("✅ GA4 script already exists");
      return;
    }

    // Initialize dataLayer if not exists
    if (!(window as any).dataLayer) {
      (window as any).dataLayer = [];
    }

    console.log("📦 Injecting GA4 script...");

    // Method 1: Create and inject the script
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
    script.id = "ga4-script";
    
    script.onload = () => {
      console.log("✅ GA4 script loaded successfully!");
      
      // Initialize gtag after script loads
      const gtagScript = document.createElement("script");
      gtagScript.id = "ga4-config";
      gtagScript.textContent = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA4_ID}');
        console.log('✅ GA4 configured');
      `;
      document.head.appendChild(gtagScript);
    };
    
    script.onerror = (error) => {
      console.error("❌ Failed to load GA4 script:", error);
    };

    document.head.appendChild(script);
    
    console.log("📦 GA4 script injection initiated");
    
    // Cleanup function (optional)
    return () => {
      // Don't remove scripts on unmount to avoid breaking tracking
    };
  }, []);

  return null;
}