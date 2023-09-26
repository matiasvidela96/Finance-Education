import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="h-3/5 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-200">
            Iniciar sesión
          </h2>
        </div>
        <SignIn
          appearance={{
            elements: {
              card: "bg-zinc-950",
              formButtonPrimary: "bg-purple-600 hover:bg-purple-700",
              formFieldInput: "bg-zinc-950",
            },
          }}
        />
      </div>
    </div>
  );
}
