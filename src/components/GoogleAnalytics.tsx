// src/components/GoogleAnalytics.tsx
import { useEffect } from "react";

const GA4_ID = "G-C08XQ5R8SL";

export default function GoogleAnalytics() {
  useEffect(() => {
    // Check if already loaded to prevent duplicates
    if (document.getElementById("ga4-script")) return;

    // Initialize dataLayer if not exists
    (window as any).dataLayer = (window as any).dataLayer || [];

    // Load GA4 script
    const script = document.createElement("script");
    script.id = "ga4-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
    document.head.appendChild(script);

    // Initialize gtag function and config
    const gtagScript = document.createElement("script");
    gtagScript.id = "ga4-config";
    gtagScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA4_ID}');
    `;
    document.head.appendChild(gtagScript);
  }, []);

  return null;
}
