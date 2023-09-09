import Link from "next/link";
import MobileMenu from "./mobile-menu";
import Image from "next/image";
import Logo from "@/public/images/logo.png";

import ClerkAuth from "../ClerkAuth";
// import ClerkUser from "../ClerkUser";

export default function Header() {
  return (
    <header className=" w-full z-30 shadow-md py-2 md:py-4 px-4 md:px-6 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="shrink-0 mr-4">
            <Link href="/" className="block" aria-label="Cruip">
              <Image
                className="max-w-full mx-auto md:max-w-none h-auto mt-8"
                src={Logo}
                width={100}
                height={100}
                alt="header-Logo"
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li className="mt-">
                <ClerkAuth />
                {/* <ClerkUser /> */}
              </li>
            </ul>
          </nav>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
