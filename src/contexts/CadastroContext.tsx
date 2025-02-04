import { createContext, ReactNode, useState } from "react";
import { Cargos, IUsuario, UsuarioDocumentos } from "../interfaces/IUsuario";
import { router } from "expo-router";

interface ContextProps {
    children: ReactNode
}

interface CadastroProps {
    usuario: IUsuario;
    validarFormulario: (
        nome: string,
        email: string,
        senha: string,
        // cargo?: Cargos,
        // sobrenome?: string,
        // documentos?: UsuarioDocumentos[]
    ) => void;
    verificarSenha: (senha: string, confirmacao: string) => void;
    cadastrar: (nome: string, email: string, senha: string, confirmacao: string) => void;
}

const CadastroContext = createContext<CadastroProps | null>(null)

const CadastroProvider = ({ children }: ContextProps) => {

    const [usuario, setUsuario] = useState<IUsuario>({
        nome: '', sobrenome: '', email: '', senha: ''
    })

    const validarFormulario = (nome: string, email: string, senha: string) => {
        if(nome.trim() === "" || email.trim() === "" || senha.trim() === "") {
            return alert("Todos os campos devem ser preenchidos")
        }
    }

    const verificarSenha = (senha: string, confirmacao: string) => {
        if (senha !== confirmacao) {
            return alert("As senhas não são iguais. Por favor, verificar.")
        }
    }

    const cadastrar = (nome: string, email: string, senha: string, confirmacao: string) => {
        validarFormulario(nome, email, senha)
        verificarSenha(senha, confirmacao)

        return router.push('Login')
    }

    return (
        <CadastroContext.Provider value={{ usuario, validarFormulario, verificarSenha, cadastrar }}>
            {children}
        </CadastroContext.Provider>
    )
}

export { CadastroContext, CadastroProvider }