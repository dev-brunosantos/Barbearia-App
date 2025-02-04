export interface UsuarioLogin {
    nome?: string;
    email: string;
    senha: string;
}

export interface ILogin {
    usuario: UsuarioLogin;
    login: (email: string, senha: string, nome?: string) => void;
    erro: boolean;
}