import { useState } from 'react';
import { View, TextInput, TextInputProps, TouchableOpacity } from 'react-native';
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
