import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet } from 'react-native';

interface BtnProps extends TouchableOpacityProps {
    titulo: string;
}

export const Btn = ({ titulo, ...rest }:BtnProps) => {

    const { btn, txt } = styles;

    return(
        <TouchableOpacity style={btn} {...rest}>
            <Text style={txt} >{titulo}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: '100%',
        height: 52,
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txt: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})