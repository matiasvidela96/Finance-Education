"use client";
import { createContext, useState } from "react";

// import { useUser } from "@clerk/nextjs";

export const PerfilInversorContext = createContext(null);
// @ts-ignore
function Context({ children }) {
  const [perfilInversor, setPerfilInversor] = useState();
  // const user = useUser();
  // console.log(user.user?.id);

  return (
    // @ts-ignore
    <PerfilInversorContext.Provider
      // @ts-ignore
      value={{ perfilInversor, setPerfilInversor }}
    >
      {children}
    </PerfilInversorContext.Provider>
  );
}
export default Context;
