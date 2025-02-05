import { LoginProvider } from "./LoginContext";
import { CadastroProvider } from "./CadastroContext";
import { IReactProps } from "../interfaces/IReactProps";
import { TemaProvider } from "./TemaContext";

// export const AppContextProvider = ({ children }: { children: ReactNode }) => {
export const AppContextProvider = ({ children }: IReactProps) => {
    return (
        <TemaProvider>
            <LoginProvider>
                <CadastroProvider>
                    {children}
                </CadastroProvider>
            </LoginProvider>
        </TemaProvider>
    )
}