import Link from "next/link";
import { auth, UserButton } from "@clerk/nextjs";

export default function ClerkAuth() {
  const { userId }: { userId: string | null } = auth();
  return (
    <div className="text-center">
      {userId ? (
        <div className="flex items-center justify-center flex-wrap">
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
                Sign In
              </Link>
            </li>
            <li>
              <Link
                href="/sign-up"
                className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
