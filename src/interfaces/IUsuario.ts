interface IUsuario {
    nome: string;
    sobrenome?: string;
    email: string;
    senha: string;
    cargo?: Cargos;
    documentos?: UsuarioDocumentos[]
}

interface UsuarioDocumentos {
    tipo: string;
    documento: string;
    numero: string;
}

interface Cargos {
    id: number;
    nome: string;
}

export { IUsuario, UsuarioDocumentos, Cargos}