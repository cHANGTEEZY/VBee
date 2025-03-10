import { useState, useEffect } from "react";
import { ModeToggle } from "../mode-toggle";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { VBeeBlack, VBeeWhite } from "@/assets";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("vite-ui-theme") || "light"
  );
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const updateTheme = () => {
      const currentTheme = localStorage.getItem("vite-ui-theme") || "light";
      setTheme(currentTheme);
    };

    updateTheme();

    const handleStorageChange = (e) => {
      if (e.key === "vite-ui-theme") {
        updateTheme();
      }
    };
    window.addEventListener("storage", handleStorageChange);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          const isDarkMode =
            document.documentElement.classList.contains("dark");
          setTheme(isDarkMode ? "dark" : "light");
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      observer.disconnect();
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleServicesClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const servicesSection = document.getElementById("services");
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (location.pathname === "/" && location.hash === "#services") {
      setTimeout(() => {
        const servicesSection = document.getElementById("services");
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <header className="sticky top-0 z-20">
      <nav className="flex items-center justify-between px-6 py-4 md:px-10 relative">
        <Link to={"/"} onClick={scrollToTop}>
          <span className="text-3xl md:text-5xl font-semibold text-gray-900 dark:text-white">
            <img
              src={theme === "dark" ? VBeeWhite : VBeeBlack}
              alt="company-logo"
              className="h-8 md:h-10"
            />
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={toggleMenu}
          className="md:hidden focus:outline-none hover:cursor-pointer"
          aria-label="Toggle Menu"
        >
          <svg
            className="h-6 w-6 text-gray-800 dark:text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-800 dark:text-white">
          <li>
            <Button variant="ghost" className="hover:cursor-pointer">
              <Link to={"/about-us"}>About Us</Link>
            </Button>
          </li>
          <li>
            <Button
              variant="ghost"
              className="cursor-pointer"
              onClick={handleServicesClick}
            >
              Our Services
            </Button>
          </li>
          <li>
            <Link to={"/contact"}>
              <Button variant="ghost" className="hover:cursor-pointer">
                Contact
              </Button>
            </Link>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>

        {isOpen && (
          <ul className="md:hidden flex flex-col items-center absolute top-full left-0 w-full bg-[rgb(245,245,255)] dark:bg-[rgb(15,25,45)]  py-4 px-6 space-y-2 shadow-md z-10">
            <li>
              <Button variant="ghost" className="hover:cursor-pointer">
                <Link to={"/about-us"}>About Us</Link>
              </Button>
            </li>
            <li>
              <Button
                variant="ghost"
                className="cursor-pointer"
                onClick={handleServicesClick}
              >
                Our Services
              </Button>
            </li>
            <li>
              <Link to={"/contact"}>
                <Button variant="ghost" className="hover:cursor-pointer">
                  Contact
                </Button>
              </Link>
            </li>
            <li>
              <ModeToggle />
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
