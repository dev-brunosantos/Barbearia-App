export interface Cores {
    txt: string;
    back: string; 
}

export interface Tema {
    tema: Cores;
    alterarTema: (cores: Cores) => void;
}