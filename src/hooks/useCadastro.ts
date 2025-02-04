import { useContext } from "react"
import { CadastroContext } from "../contexts/CadastroContext"

export const useCadastro = () => {
    const contexto = useContext(CadastroContext)
    if(!contexto) {
        throw new Error("Não encontramos nenhum contexto de CADASTRO no sistema.")
    }
    return contexto
}