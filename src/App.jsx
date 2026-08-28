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
import BlogPost from "./pages/BlogPost";
import MyAccount from "./pages/MyAccount";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "shop/:id", element: <Shop /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "blogs", element: <Blogs /> },
      { path: "blogs/:id", element: <BlogPost /> },
      { path: "plant-care", element: <PlantCare /> },
      { path: "login", element: <Login /> },
      { path: "my-account", element: <MyAccount /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
