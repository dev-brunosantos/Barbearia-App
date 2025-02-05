import { TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { InputStyles } from "@/src/styles/InputStyles";

export const InputSearch = () => {
    const { container, input, btnBusca  } = InputStyles

    const buscar = () => {
        return alert('O botão de consulta esta funcionando perfeitamente.')
    }

    return(
        <View style={container}>
            <TextInput 
                style={input}
                placeholder="O que você procura?"
            />

            <TouchableOpacity
                style={btnBusca}
                onPress={buscar}
            >
                <Ionicons name="search" size={35} />
            </TouchableOpacity>
        </View>
    )
}