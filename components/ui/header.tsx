import Link from "next/link";
import MobileMenu from "./mobile-menu";
import Image from "next/image";
import Logo from "@/public/images/logo.png";

export default function Header() {
  return (
    <header className="w-full z-30 shadow-md py-6 md:py-4 px-4 md:px-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-20 flex items-center justify-center md:justify-between">
          {/* Logo */}
          <div className="mr-4 md:mr-0">
            <a href="/" className="block" aria-label="Cruip" target="_self">
              <Image
                className="max-w-full mx-auto md:max-w-none h-auto mt-8"
                src={Logo}
                width={100}
                height={100}
                alt="header-Logo"
              />
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex justify-end flex-wrap items-center">
              <li className="mt-">{/* <ClerkAuth /> */}</li>
            </ul>
          </nav>
          {/* <MobileMenu /> */}
        </div>
      </div>
    </header>
  );
}
