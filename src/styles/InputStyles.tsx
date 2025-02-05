import { StyleSheet } from "react-native";

export const InputStyles = StyleSheet.create({
    container: {
        width: '100%',
        height: 52,
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 10,
        fontSize: 16
    },
    btnIcone: {
        height: '100%',
        padding: 10,
        position: 'absolute',
        right: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnBusca: {
        height: '100%',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 15
    }
})