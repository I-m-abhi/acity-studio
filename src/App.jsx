import Body from "./components/Body";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ContactUs from "./pages/ContactUs";
import { createBrowserRouter, RouterProvider } from "react-router";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about-us",
          element: <AboutUs />
        },
        {
          path: "/services",
          element: <Services />
        },
        {
          path: "/projects",
          element: <Projects />
        },
        {
          path: "/contact-us",
          element: <ContactUs />
        },
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
};

export default App;