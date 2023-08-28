import { createContext, useState } from "react";
export const PerfilInversorContext = createContext(null);
// @ts-ignore
function Context({ children }) {
    const [perfilInversor, setPerfilInversor] = useState();

    return (
        // @ts-ignore
        <PerfilInversorContext.Provider value={{ perfilInversor, setPerfilInversor }}>
            {children}
        </PerfilInversorContext.Provider>
    );
}
export default Context;