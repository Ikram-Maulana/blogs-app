import { DarkThemeToggle, Flowbite, Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

import "./style/navbarapp.css";

const NavbarApp = () => {
  return (
    <Navbar fluid={true} rounded={true}>
      <div className="navbarBrand">
        <Link to="/" className="flex items-center">
          <img
            src="/logo192.png"
            className="mr-3 h-6 sm:h-9 bg-slate-900 rounded-md"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Ikram Web
          </span>
        </Link>
      </div>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <li className="flex items-center">
          <Link to="/" className="nav-item">
            Home
          </Link>
        </li>
        <li className="flex items-center">
          <Link to="/profile" className="nav-item">
            Profile
          </Link>
        </li>
        <li className="flex items-center">
          <Link to="/blog" className="nav-item">
            Blog
          </Link>
        </li>
        <li className="flex items-center">
          <Link to="/contact" className="nav-item">
            Contact
          </Link>
        </li>
        <Flowbite>
          <DarkThemeToggle />
        </Flowbite>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarApp;
