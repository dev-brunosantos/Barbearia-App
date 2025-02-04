import { ReactNode } from "react";
import { LoginProvider } from "./LoginContext";

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
    return (
        <LoginProvider>
            {children}
        </LoginProvider>
    )
}