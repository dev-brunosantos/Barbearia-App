import { ReactNode } from "react";
import { LoginProvider } from "./LoginContext";
import { CadastroProvider } from "./CadastroContext";

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
    return (
        <LoginProvider>
            <CadastroProvider>
                {children}
            </CadastroProvider>
        </LoginProvider>
    )
}