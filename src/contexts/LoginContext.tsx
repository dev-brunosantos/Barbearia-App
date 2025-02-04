import { createContext, ReactNode, useState } from "react";
import { ILogin, UsuarioLogin } from "../interfaces/ILogin";

const LoginContext = createContext<ILogin | null>(null)

const LoginProvider = ({ children }: { children: ReactNode }) => {

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

        return alert("Usuário pode realizar o login.")
    }

    <LoginContext.Provider value={{usuario, login, erro}}>
        { children }
    </LoginContext.Provider>
} 