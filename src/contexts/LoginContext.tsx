import { createContext, ReactNode, useState } from "react"
import { ILogin, UsuarioLogin } from "../interfaces/ILogin"

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

        setUsuario({
            email, senha, nome
        })

        return alert("O usuário pode realizar o login no sistema.")
    }

    return (
        <LoginContext.Provider value={{
            usuario, erro, login
        }}>
            {children}
        </LoginContext.Provider>
    )
}

export { LoginContext, LoginProvider }