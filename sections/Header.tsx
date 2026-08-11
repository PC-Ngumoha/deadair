"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import Logo from "@/components/Logo";
import ArrowRight from "@/assets/icons/arrow_right.svg";
import Menu from "@/assets/icons/menu.svg";

export function Header() {
  const [open, setOpen] = useState(false);

  function toggleDropDown() {
    setOpen((prev) => !prev);
  }

  return (
    <header>
      <nav className="p-3 flex items-center justify-between">
        <Logo />
        <ul className="hidden md:flex text-sm gap-3 items-center">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
        </ul>
        <div className="hidden md:flex items-center justify-center gap-1">
          <button className="btn btn-text">Login</button>
          <button className="btn btn-filled">
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        <div className="inline-flex md:hidden" onClick={() => toggleDropDown()}>
          <Menu className="w-10 h-10 stroke-accent fill-transparent" />
        </div>
      </nav>
      {/* dropdown */}
      <div className={twMerge("hidden", open && "flex flex-col md:hidden")}>
        <ul className="flex flex-col text-sm gap-3 items-start px-2">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
        </ul>
        <div className="w-2/3 flex flex-col gap-1 self-center">
          <button className="btn btn-text">Login</button>
          <button className="btn btn-filled gap-2">
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
