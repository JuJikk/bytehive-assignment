import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../modules/layout/ui/dashboard-layout";
import LoginPage from "../../pages/login";
import Overview from "../../pages/overview";
import Analytics from "../../pages/analytics";
import Ecommerce from "../../pages/ecommerce";
import Crypto from "../../pages/crypto";
import Products from "../../pages/products";
import Orders from "../../pages/orders";
import Invoices from "../../pages/invoices";
import Logistics from "../../pages/logistics";
import {ProtectedRoute, PublicRoute} from "./route-protection.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <Overview />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
      {
        path: "/ecommerce",
        element: <Ecommerce />,
      },
      {
        path: "/crypto",
        element: <Crypto />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/invoices",
        element: <Invoices />,
      },
      {
        path: "/logistics",
        element: <Logistics />,
      },
    ],
  },

  {
    path: "/login",
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
]);
