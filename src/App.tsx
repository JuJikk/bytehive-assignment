import { createBrowserRouter, RouterProvider } from "react-router-dom";
import theme from "./utils/themes.ts";
import LoginPage from "./Components/pages/login-page";
import { ThemeProvider } from "@mui/material";
import DashboardPage from "./Components/pages/dashboard-page";
import { ProtectedRoute, PublicRoute } from "./Components/route-protection";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    ),
  },

  {
    path: "/login",
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
]);
function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
