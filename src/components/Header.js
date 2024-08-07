import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../layouts/Button";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showNav, setShowNav] = useState(true); // Changed default to true
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;

    if (currentPosition > scrollPosition) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }

    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const isActive = (path) =>
    location.pathname === path
      ? "text-hovercolor font-bold"
      : "hover:text-hovercolor";

  return (
    <>
      <header
        className={`fixed top-0 w-full transition-transform duration-300 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        } ${
          scrollPosition > 50 ? "bg-brightcolor" : "bg-brightcolor" //show or not depends on screen position
        } bg-opacity-75 text-basecolor p-4 z-50`}
      >
        {/* nav bar */}
        <nav className="max-w-screen-xl mx-auto px-8 flex justify-between items-center relative">
          <h1 className="text-3xl font-bold main-title">SUPER SUSHI</h1>
          <button
            className="block lg:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖️" : "☰"}
          </button>
          <div className={`hidden lg:flex lg:items-center lg:space-x-6`}>
            <Link to="/" className={`text-base ${isActive("/")}`}>
              Home
            </Link>
            <Link to="/menu" className={`text-base ${isActive("/menu")}`}>
              Menu
            </Link>
            <Link to="/about" className={`text-base ${isActive("/about")}`}>
              About
            </Link>
            <Button href="mailto:example@example.com" title="Contact Us" />
          </div>
        </nav>
      </header>

      {/* Full-screen menu overlay for small screens */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-darkcolor bg-opacity-75 text-white transform transition-transform duration-300 ease-in-out z-40 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="flex flex-col h-full p-8">
          {/* Close button for small screens */}
          {menuOpen && (
            <button
              className="absolute top-4 right-4 text-2xl text-white"
              onClick={() => setMenuOpen(false)}
              style={{ zIndex: 50 }}
            ></button>
          )}
          <ul className="flex flex-col h-full justify-center items-center space-y-6 p-8 bg-darkcolor bg-opacity-90">
            <li>
              <Link to="/" className={`text-lg font-semibold ${isActive("/")}`}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className={`text-lg font-semibold ${isActive("/menu")}`}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`text-lg font-semibold ${isActive("/about")}`}
              >
                About
              </Link>
            </li>
            <li>
              <Button
                href="mailto:example@example.com"
                title="Contact Us"
                className="mt-4"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
