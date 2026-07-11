import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GoogleTagManager from "../components/GoogleTagManager";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import { type ReactNode } from "react";

import appCss from "../styles.css?url";

import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";

import FloatingButtons from "../components/site/FloatingAIButton";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-gold">404</h1>

        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>

        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground hover:bg-gradient-gold hover:text-primary transition-all"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error(error);

  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl">This page didn't load</h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try refreshing or go back home.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="px-5 py-2.5 bg-primary text-primary-foreground hover:bg-gradient-gold hover:text-primary transition-all"
          >
            Try again
          </button>

          <a
            href="/"
            className="px-5 py-2.5 border border-border hover:border-gold transition-colors"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Hauz360 Design Studio — Luxury Interior Design",
      },
      {
        name: "description",
        content: "Premium interior design studio for homes, offices and commercial spaces.",
      },
    ],

    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap",
      },
      // FAVICON
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon.png",
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
    <head>
  {/* Test Meta Tag */}
  <meta name="test-root" content="working" />

  {/* Google Tag Manager */}
  <script
    dangerouslySetInnerHTML={{
      __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;
f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WTH8VXNK');
      `,
    }}
  />

  <HeadContent />
</head>

      <body>
        {/* Google Tag Manager (noscript) - Immediately after opening body tag */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WTH8VXNK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {children}
        <Scripts />
      </body>
    </html>
  );
}



function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>

      <GoogleTagManager />

      <div className="flex min-h-screen flex-col overflow-x-hidden bg-background text-foreground">
        <Header />

        <main className="flex-1 pt-20">
          <Outlet />
        </main>

        <Footer />

        <FloatingButtons />
      </div>
    </QueryClientProvider>
  );
}