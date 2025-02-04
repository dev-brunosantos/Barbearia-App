import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";

export const useLogin = () => {
    const contexto = useContext(LoginContext)
    if(!contexto) {
        throw new Error("Não foi encontrado nenhum contexto de LOGIN na aplicação.")
    }
    return contexto
}