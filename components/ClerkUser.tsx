// "use client";
// import { useUser } from "@clerk/nextjs";

// export default function Example() {
//   const { isLoaded, isSignedIn, user } = useUser();
//   console.log(isLoaded, isSignedIn, user);

//   if (!isLoaded || !isSignedIn) {
//     return null;
//   }

//   return (
//     <div className=" p-4  shadow-md text-center">
//       <h1 className="text-2xl font-semibold text-purple-700">
//         Hola, {user.firstName} {user.lastName}!
//       </h1>
//       <p className="text-gray-600">Bienvenido a Finance Education</p>
//     </div>
//   );
// }
