"use client";
import Link from "next/link";
import { useUser, UserButton } from "@clerk/nextjs";

export default function ClerkAuth() {
  const user = useUser();
  const id = user.user?.id;

  const verifyIfUserExist = async (id: any) => {
    try {
      const res = await fetch("http://localhost:3000/api/hello", {
        method: "POST",
        body: JSON.stringify({ id }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log("Respuesta en CLerkAuth");
      console.log(data);
    } catch (error) {
      console.error("Error al actualizar el perfil inversor:", error);
    }
  };

  if (user.isSignedIn) {
    // Llamar a la función para verificar y crear el usuario
    verifyIfUserExist(id);
  }

  return (
    <div className="text-center">
      {user.isSignedIn ? (
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
