import { createContext, useContext, useState } from "react";
import { IReactProps } from "../interfaces/IReactProps";

interface Cores {
    txt: string;
    back: string; 
}

interface Tema {
    tema: Cores;
    alterarTema: (cores: Cores) => void;
}

const TemaContext = createContext<Tema | null>(null)

const TemaProvider = ({ children }: IReactProps) => {
    
    const [tema, setTema] = useState<Cores>({ txt: '#242424', back: '#eaeaea' })


    const alterarTema = (cores:Cores) => {
        setTema({
            txt: cores.txt,
            back: cores.back
        })    
    }

    return (
        <TemaContext.Provider value={{tema, alterarTema}}>
            {children}
        </TemaContext.Provider>
    )
}

export { TemaContext, TemaProvider }

export const useTema = () => {
    const contexto = useContext(TemaContext)
    if(!contexto) {
        throw new Error("Nao existe nenhum contexto de TEMA no sistema.")
    }
    return contexto
}