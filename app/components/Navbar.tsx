"use client";
import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import Link from "next/link";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav className="navbar bg-red-800">
      <div className="container">
        <div className="logo">
          Zagoal
          {/* <Logo /> */}
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <CgMenuRight />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/service">Services</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
