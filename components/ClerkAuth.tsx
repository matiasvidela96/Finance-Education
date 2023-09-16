import Link from "next/link";
import { auth, UserButton } from "@clerk/nextjs";
import { prisma } from "@/libs/prisma";

export default function ClerkAuth() {
  const { userId }: { userId: string | null } = auth();
  const dataToSend = {
    id: userId,
    income: 0,
    riskProfile: "Profile",
  };
  async function getData() {
    const res = await fetch("http://localhost:3000/api/getAuth");
    const data = await res.json();
    console.log(data);
  }
  async function createUser(dataToSend: {
    id: string | null;
    income: number;
    riskProfile: string;
  }) {
    const res = await fetch("http://localhost:3000/api/getAuth", {
      method: "POST",
      body: JSON.stringify(dataToSend),
      headers: { "Content-Type": "application/json" },
    });
    const responseJson = await res.json();
    console.log({ responseJson });
  }

  async function user(dataToSend: { id: string | null }) {
    const res = await fetch(
      `http://localhost:3000/api/getAuth/${dataToSend.id}}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const responseJson = await res.json();
    console.log({ responseJson });
  }

  const handleSignIn = async () => {
    if (userId) {
      try {
        // Verifica si el usuario ya existe en la base de datos
        const existingUser = await prisma.user.findUnique({
          where: { id: userId },
        });

        if (!existingUser) {
          // El usuario no existe, créalo en la base de datos
          createUser(dataToSend);
        } else {
          console.log("Usuario ya existe");
          getData();
          user(dataToSend);
        }
      } catch (error) {
        console.error("Error al interactuar con la base de datos:", error);
      }
    }
  };

  handleSignIn();

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
