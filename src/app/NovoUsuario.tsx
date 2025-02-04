import { StyleSheet, View } from "react-native";
import { Container } from "../components/container";
import { InputComponent } from "../components/Input";
import { Btn } from "../components/Button";
import { useState } from "react";
import { IUsuario } from "../interfaces/IUsuario";

export default function NovoUsuario() {
    const { page, containerTxt, txt } = styles;

    const [usuario, setUsuario] = useState<IUsuario>({
        nome: '',
        sobrenome: '',
        email: '',
        senha: ''
    });
    
    const [confirmarSenha, setConfirmarSenha] = useState('')

    return (
        <View style={page}>
            <Container>
                <InputComponent
                    isPassword={false}
                    placeholder="Digite seu nome"
                    onChangeText={(txt) => setUsuario((prev) => ({ ...prev, nome: txt }))}
                />
                <InputComponent
                    isPassword={false}
                    placeholder="Digite seu sobrenome"
                    onChangeText={(txt) => setUsuario((prev) => ({ ...prev, sobrenome: txt }))}
                />
                <InputComponent
                    isPassword={false}
                    placeholder="Digite seu email"
                    onChangeText={(txt) => setUsuario((prev) => ({ ...prev, email: txt }))}
                />
                <InputComponent
                    isPassword={true}
                    placeholder="Digite sua senha"
                    onChangeText={(txt) => setUsuario((prev) => ({ ...prev, senha: txt }))}
                />
                <InputComponent
                    isPassword={true}
                    placeholder="Digite sua senha"
                    onChangeText={setConfirmarSenha}
                />
            </Container>

            <Container>
                <Btn
                    titulo="Cadastrar"
                    onPress={() => console.log(usuario)}
                />
            </Container>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    containerTxt: {
        width: '90%',
        height: 'auto',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    txt: {
        fontSize: 16,
        textAlign: 'center'
    }
});
