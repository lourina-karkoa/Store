import "./i18n"; //
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";

// Layouts
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

// Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Shop from "./pages/Shop";

// Auth
import Login from "./pages/Login";
import Register from "./pages/Register";


// ✅ تعريف الراوتر بالطريقة الحديثة
const router = createBrowserRouter(
  [
    // Layout الأساسي (العام)
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "Contact", element: <Contact /> },
        { path: "About", element: <About /> },
        { path: "Shop", element: <Shop /> },
        // { path: "About", element: <About /> },
        // { path: "About", element: <About /> },
        // { path: "About", element: <About /> },
      ],
    },

    // Layout خاص بالـ Auth
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
      ],
    },
  ],
   {
    basename: "/Store",
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
