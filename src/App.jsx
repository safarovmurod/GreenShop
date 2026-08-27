import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./layout/Layout";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Blogs from "./pages/Blogs";
import PlantCare from "./pages/PlantCare";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "blogs", element: <Blogs /> },
      { path: "plant-care", element: <PlantCare /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
