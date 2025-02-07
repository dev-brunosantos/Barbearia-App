import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface BtnTemaProps {
    tema: string;
}

export const BtnTema = ({ tema }:BtnTemaProps) => {
    
    if(tema == 'claro' || tema == 'Claro' || tema == 'CLARO') {
        return(
            <TouchableOpacity>
                <Feather name='sun' size={35} />
            </TouchableOpacity>
        )
    }
    
    return(
        <TouchableOpacity>
            <Feather name='moon' size={35} />
        </TouchableOpacity>
    )
}