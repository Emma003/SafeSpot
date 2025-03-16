import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/Homepage/homepage";
import RootLayout from "./layouts/rootLayout/rootLayout";
import DashboardLayout from "./layouts/dashboardLayout/DashboardLayout";
import DashboardPage from "./components/dashboardPage/DashboardPage";
const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      { path: "/dashboard", element: <DashboardPage /> },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
