import Body from "./components/Body";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ContactUs from "./pages/ContactUs";
import { createBrowserRouter, RouterProvider } from "react-router";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      mirror: "true",
    });
  }, []);

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