"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RiMenu4Line } from "react-icons/ri";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState(false);

  const router = useRouter();
  useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <Link href="/">
              <Image src="/assets/Logo.png" width="80" height="80" alt="logo" />
            </Link>
          </div>
          <nav
            className={open ? "openMenu" : "closeMenu"}
            onClick={() => setOpen(null)}
          >
            <Link
              href="/"
              className={activeLink == "/" ? "activeLink" : "none"}
            >
              Home
            </Link>
            <Link
              href="/agency"
              className={activeLink == "/agency" ? "activeLink" : "none"}
            >
              About
            </Link>
            <Link
              href="/services"
              className={activeLink == "/services" ? "activeLink" : "none"}
            >
              Services
            </Link>
            <Link
              href="/showcase"
              className={activeLink == "/showcase" ? "activeLink" : "none"}
            >
              Showcase
            </Link>
            <Link
              href="/contact"
              className={activeLink == "/contact" ? "activeLink" : "none"}
            >
              <button className="button-primary">Contact</button>
            </Link>
          </nav>
          <button className="menucontrol" onClick={() => setOpen(!open)}>
            {open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
