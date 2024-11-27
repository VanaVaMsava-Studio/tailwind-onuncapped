import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import "../../css/components/navbar.css";
// Import the logo image
import logo from "../../media/assets/logo.svg";

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);

  const handleServicesHover = (isOpen) => {
    setServicesOpen(isOpen);
  };

  return (
    // Navigation
    <section class="bg-gradient-to-r from-purple-100 to-purple-300">
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 shadow-lg">
        <div class="flex h-16 items-center justify-between">
          <div class="flex-1 md:flex md:items-center md:gap-12">
            <a class="block text-purple-600" href="#">
              <span class="sr-only">Home</span>
              {/* Logo goes here */}
              <img src={logo} alt="Logo" class="h-8 w-auto" />
            </a>
          </div>

          <div class="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" class="hidden md:block">
              <ul class="flex items-center gap-6 text-sm">
                <li>
                  <a
                    class="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    <Link to="/home">Home</Link>
                  </a>
                </li>

                <li>
                  <a
                    class="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    <Link to="/about">About</Link>
                  </a>
                </li>

                {/* Services Dropdown */}
                <li
                  className="dropdown"
                  onMouseEnter={() => handleServicesHover(true)}
                  onMouseLeave={() => handleServicesHover(false)}
                >
                  <a
                    class="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    <Link to="/services" className="dropdown-link">
                      Services <FaCaretDown className="dropdown-icon" />
                    </Link>
                  </a>

                  {servicesOpen && (
                    <ul className="dropdown-menu">
                      <li>
                        <a
                          class="text-gray-500 transition hover:text-gray-500/75"
                          href="#"
                        >
                          <Link to="/services/internet">
                            Internet Package & VolP
                          </Link>
                        </a>
                      </li>
                      <li>
                        <a
                          class="text-gray-500 transition hover:text-gray-500/75"
                          href="#"
                        >
                          <Link to="/services/hosting">
                            Hosting & Web Packages{" "}
                          </Link>
                        </a>
                      </li>
                      <li>
                        <a
                          class="text-gray-500 transition hover:text-gray-500/75"
                          href="#"
                        >
                          <Link to="/services/specialized">IOT</Link>
                        </a>
                      </li>
                    </ul>
                  )}
                  <Link
                    to="/services"
                    className="text-gray-500 transition hover:text-gray-500/75"
                  >
                    Services
                  </Link>
                </li>

                <li>
                  <a
                    class="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    <Link to="/partners">Partners</Link>
                  </a>
                </li>
              </ul>
            </nav>

            <div class="flex items-center gap-4">
              <div class="sm:flex sm:gap-4">
                <a
                  class="rounded-md bg-purple-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                  href="#"
                >
                  Login
                </a>

                <div class="hidden sm:flex">
                  <a
                    class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-purple-600"
                    href="#"
                  >
                    Register
                  </a>
                </div>
              </div>

              <div class="block md:hidden">
                <button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
