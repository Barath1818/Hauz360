/**
 * Centralized environment configuration accessor
 * All environment variables should be accessed through this module
 */

interface EnvConfig {
  emailjs: {
    serviceId: string;
    templateId: string;
    publicKey: string;
  };
  email: {
    owner: string;
    company: string;
    careers: string;
  };
  site: {
    url: string;
    name: string;
  };
  contact: {
    phone: string;
    address: string;
    mapsQuery: string;
  };
  api: {
    clipdropKey: string;
  };
}

function getRequiredEnv(key: string): string {
  const value = import.meta.env[key];
  if (!value) {
    throw new Error(`Required environment variable ${key} is not set`);
  }
  return value;
}

function getOptionalEnv(key: string, defaultValue: string = ""): string {
  return import.meta.env[key] || defaultValue;
}

export const envConfig: EnvConfig = {
  emailjs: {
    serviceId: getRequiredEnv("VITE_EMAILJS_SERVICE_ID"),
    templateId: getRequiredEnv("VITE_EMAILJS_TEMPLATE_ID"),
    publicKey: getRequiredEnv("VITE_EMAILJS_PUBLIC_KEY"),
  },
  email: {
    owner: getRequiredEnv("VITE_OWNER_EMAIL"),
    company: getRequiredEnv("VITE_COMPANY_EMAIL"),
    careers: getRequiredEnv("VITE_CAREERS_EMAIL"),
  },
  site: {
    url: getOptionalEnv("VITE_SITE_URL", "https://space-cadet-creations.com"),
    name: getOptionalEnv("VITE_SITE_NAME", "Space Cadet Creations"),
  },
  contact: {
    phone: getRequiredEnv("VITE_CONTACT_PHONE"),
    address: getOptionalEnv("VITE_ADDRESS", ""),
    mapsQuery: getOptionalEnv("VITE_MAPS_QUERY", "Hauz360 Bangalore"),
  },
  api: {
    clipdropKey: getOptionalEnv("VITE_CLIPDROP_API_KEY", ""),
  },
};

export default envConfig;
