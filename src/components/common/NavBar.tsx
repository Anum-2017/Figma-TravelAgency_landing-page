"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";
import MainButton from "./MainButton";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <div className="md:sticky md:top-0 z-20">
      {/* DESKTOP NAV */}
      <div className="hidden lg:block animate-in fade-in zoom-in p-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={120}
              height={40}
              priority
            />
          </div>

          {/* Nav Items */}
          <div className="flex gap-5 xl:gap-10 text-semibold items-center select-none">
            {["Destinations", "Hotels", "Flights", "Bookings"].map((item) => (
              <p
                key={item}
                className="hover:text-primary text-navText font-semibold cursor-pointer"
              >
                {item}
              </p>
            ))}

            <Link
              href="/auth/login"
              className="hover:text-primary text-navText font-semibold"
            >
              Login
            </Link>

            <MainButton
              text="Sign up"
              classes="bg-transparent text-navText font-semibold shadow-none rounded-md border border-navText hover:border-none hover:text-white"
            />

            <div className="flex gap-2 items-center cursor-pointer">
              <p className="font-bold">EN</p>
              <Image
                src="/images/chevron-down.png"
                alt="Language Selector"
                width={16}
                height={16}
              />
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE NAV */}
      <div
        className={`block lg:hidden fixed top-0 w-full z-[999] py-4 ${
          menu ? "bg-primary" : "bg-white shadow-sm"
        }`}
      >
        <div className="flex justify-between px-4">
          {/* Logo */}
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={112}
            height={40}
            priority
          />

          {/* Hamburger Icon */}
          <div className="flex items-center">
            {menu ? (
              <X
                className="cursor-pointer text-black"
                size={28}
                onClick={toggleMenu}
              />
            ) : (
              <Image
                src="/images/hamburger.svg"
                alt="Open Menu"
                width={24}
                height={24}
                className="cursor-pointer"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {menu && (
          <div className="mt-8 px-4 animate-in slide-in-from-right">
            <div className="flex flex-col gap-6">
              {["Destinations", "Hotels", "Flights", "Bookings"].map((item) => (
                <p
                  key={item}
                  className="hover:text-white text-navText font-semibold"
                >
                  {item}
                </p>
              ))}

              <Link
                href="/auth/login"
                className="hover:text-white text-navText font-semibold"
              >
                Login
              </Link>

              <MainButton
                text="Sign up"
                classes="bg-secondary text-navText font-semibold rounded-md hover:text-white"
              />

              <div className="flex gap-2 items-center cursor-pointer">
                <p className="font-bold">EN</p>
                <Image
                  src="/images/chevron-down.png"
                  alt="Language Selector"
                  width={16}
                  height={16}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
