import { createContext, useState } from "react";
export const PerfilInversorContext = createContext(null);
function Context({ children }) {
    const [perfilInversor, setPerfilInversor] = useState();

    return (
        <PerfilInversorContext.Provider value={{ perfilInversor, setPerfilInversor }}>
            {children}
        </PerfilInversorContext.Provider>
    );
}
export default Context;