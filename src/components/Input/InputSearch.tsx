import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export const InputSearch = () => {

    const { container, input, btnBusca } = styles

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

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        overflow: 'hidden'
    },
    input: {
        width: '100%',
        height: '100%',
        paddingLeft: 15,
        fontSize: 16,
    },
    btnBusca: {
        height: '100%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})