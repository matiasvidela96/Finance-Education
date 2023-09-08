"use client";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function ClerkUser() {
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <div className="text-center">
      <div className="text-gray-500 mb-2 text-lg">
        Bienvenido a Finance Education
      </div>
      {isSignedIn ? (
        <div className="flex items-center justify-center flex-wrap">
          <div className="text-2xl font-semibold ">
            ¡Hola, {user.firstName}!
          </div>
          <div className="ml-2">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      ) : (
        <div>
          <ul className="flex justify-center mt-3">
            <li className="mr-3">
              <Link
                href="/sign-in"
                className="text-white hover:text-purple-600"
              >
                Sign in
              </Link>
            </li>
            <li>
              <Link
                href="/sign-up"
                className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4"
              >
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
