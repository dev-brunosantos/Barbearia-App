import { createContext, ReactNode, useState } from "react";
import { ILogin, UsuarioLogin } from "../interfaces/ILogin";
import { IReactProps } from "../interfaces/IReactProps";
import { router } from "expo-router";

// interface LoginContextProps {
//     children: ReactNode;
// }

const LoginContext = createContext< ILogin | null>(null)

// const LoginProvider  = ({ children }:LoginContextProps) => {
const LoginProvider  = ({ children }:IReactProps) => {
    
    const [usuario, setUsuario] = useState<UsuarioLogin>({
        email: '', senha: '', nome: ''
    })

    const [erro, setErro] = useState(false)

    const login = (email: string, senha: string, nome?: string) => {
        if(email.trim() == "" || senha.trim() == "") {
            setErro(true)
            return alert("Todos os campos devem ser preenchidos.")
        }

        setErro(false)

        setUsuario({ email, senha, nome })

        // return alert("O usuário está habilitado para realizar o login.")
        return router.push('/(drawer)')
    }

    return(
        <LoginContext.Provider value={{ usuario, erro, login }}>
            {children}
        </LoginContext.Provider>
    )
}

export { LoginContext, LoginProvider }