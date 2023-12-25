import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header>
        {/* <!-- Navigation bar --> */}
        <nav
          className="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
          data-te-navbar-ref
        >
          <div className="flex w-full flex-wrap items-center justify-between px-3">
            <div className="flex items-center">
              {/* <!-- Hamburger menu button --> */}
              <button
                className="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
                type="button"
                data-te-collapse-init
                data-te-target="#navbarSupportedContentY"
                aria-controls="navbarSupportedContentY"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="[&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-7 w-7"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </span>
              </button>
            </div>

            {/* <!-- Navigation links --> */}
            <div
              className="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto"
              id="navbarSupportedContentY"
              data-te-collapse-item
            >
              <ul
                className="mr-auto flex flex-col lg:flex-row"
                data-te-navbar-nav-ref
              >
                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                  <NavLink
                    className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                    to="/"
                    data-te-nav-link-ref
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                  <NavLink
                    className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                    to="/doctorLogin"
                    data-te-nav-link-ref
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Doctor
                  </NavLink>
                </li>
                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
                  <NavLink
                    className="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
                    to='/patientRegistration'
                    data-te-nav-link-ref
                    data-te-ripple-init
                    data-te-ripple-color="light"
                  >
                    Patient
                  </NavLink>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
