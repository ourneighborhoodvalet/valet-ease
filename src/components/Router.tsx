import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import HomePage from '@/components/pages/HomePage';
import ServicesPage from '@/components/pages/ServicesPage';
import PropertyManagersPage from '@/components/pages/PropertyManagersPage';
import ResidentsPage from '@/components/pages/ResidentsPage';
import CareersPage from '@/components/pages/CareersPage';
import ContactPage from '@/components/pages/ContactPage';

// Layout component that includes ScrollToTop
function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        routeMetadata: {
          pageIdentifier: 'home',
        },
      },
      {
        path: "services",
        element: <ServicesPage />,
        routeMetadata: {
          pageIdentifier: 'services',
        },
      },
      {
        path: "property-managers",
        element: <PropertyManagersPage />,
        routeMetadata: {
          pageIdentifier: 'property-managers',
        },
      },
      {
        path: "residents",
        element: <ResidentsPage />,
        routeMetadata: {
          pageIdentifier: 'residents',
        },
      },
      {
        path: "careers",
        element: <CareersPage />,
        routeMetadata: {
          pageIdentifier: 'careers',
        },
      },
      {
        path: "contact",
        element: <ContactPage />,
        routeMetadata: {
          pageIdentifier: 'contact',
        },
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
