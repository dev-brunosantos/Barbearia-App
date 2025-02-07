interface Cores {
    txt: string;
    back: string; 
}

interface Tema {
    tema: Cores;
    alterarTema: (cores: Cores) => void;
}