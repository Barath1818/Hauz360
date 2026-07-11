import { useEffect } from "react";

const GTM_ID = "GTM-WTH8VXNK";

export default function GoogleTagManager() {
  useEffect(() => {
    if (document.getElementById("gtm-script")) return;

    (window as any).dataLayer = (window as any).dataLayer || [];

    const script = document.createElement("script");
    script.id = "gtm-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;

    document.head.appendChild(script);
  }, []);

  return null;
}