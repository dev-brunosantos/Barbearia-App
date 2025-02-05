import { LoginProvider } from "./LoginContext";
import { CadastroProvider } from "./CadastroContext";
import { IReactProps } from "../interfaces/IReactProps";

// export const AppContextProvider = ({ children }: { children: ReactNode }) => {
export const AppContextProvider = ({children}:IReactProps) => {
    return (
        <LoginProvider>
            <CadastroProvider>
                {children}
            </CadastroProvider>
        </LoginProvider>
    )
}