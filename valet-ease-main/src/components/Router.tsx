import { MemberProvider } from "@/integrations";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ScrollToTop } from "@/lib/scroll-to-top";
import ErrorPage from "@/integrations/errorHandlers/ErrorPage";
import HomePage from "@/components/pages/HomePage";
import ServicesPage from "@/components/pages/ServicesPage";
import PropertyManagersPage from "@/components/pages/PropertyManagersPage";
import ResidentsPage from "@/components/pages/ResidentsPage";
import CareersPage from "@/components/pages/CareersPage";
import ContactPage from "@/components/pages/ContactPage";
import TermsPage from "@/components/pages/TermsPage";
import PrivacyPage from "@/components/pages/PrivacyPage";
import DoNotSellPage from "@/components/pages/DoNotSellPage";
import NotFoundPage from "@/components/pages/NotFoundPage";
import { Toaster } from "@/components/ui/toaster";

// Layout component that includes ScrollToTop + Toaster
function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
      <Toaster />
    </>
  );
}

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "services", element: <ServicesPage /> },
        { path: "property-managers", element: <PropertyManagersPage /> },
        { path: "residents", element: <ResidentsPage /> },
        { path: "careers", element: <CareersPage /> },
        { path: "contact", element: <ContactPage /> },
        { path: "terms", element: <TermsPage /> },
        { path: "privacy", element: <PrivacyPage /> },
        { path: "do-not-sell", element: <DoNotSellPage /> },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_NAME,
  }
);

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
