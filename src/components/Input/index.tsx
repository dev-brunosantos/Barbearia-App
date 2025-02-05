import { useState } from 'react';
import { View, TextInput, TextInputProps, TouchableOpacity, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { InputStyles } from '@/src/styles/InputStyles';

interface InputProps extends TextInputProps {
    isPassword: boolean;
}

export const InputComponent = ({ isPassword, ...rest }: InputProps) => {

    const [icone, setIcone] = useState('eye-with-line')
    const [seguranca, setSeguranca] = useState(true)

    const verificarSenha = () => {
        icone == 'eye-with-line' ? setIcone('eye') : setIcone('eye-with-line')
        setSeguranca(!seguranca)
    }

    if (isPassword) {

        // const { container, btnIcone, input } = styles
        const { container, btnIcone, input } = InputStyles

        return (
            <View style={container}>
                <TextInput
                    style={input}
                    {...rest}
                    secureTextEntry={seguranca}
                />

                <TouchableOpacity style={btnIcone} onPress={verificarSenha}>
                    <Entypo name={icone} size={35} />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={InputStyles.container}>
            <TextInput
                style={InputStyles.input}
                {...rest}
            />
        </View>
    )
}

// const styles = StyleSheet.create({
//     container: {
//         width: '100%',
//         height: 52,
//         borderWidth: 1,
//         borderRadius: 10,
//         marginVertical: 20,
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     input: {
//         width: '100%',
//         height: '100%',
//         paddingHorizontal: 10,
//         fontSize: 16
//     },
//     btnIcone: {
//         height: '100%',
//         padding: 10,
//         position: 'absolute',
//         right: 15,
//         justifyContent: 'center',
//         alignItems: 'center'
//     }
// })