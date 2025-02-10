import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Container } from "../components/container";
import { useLogin } from "../hooks/useLogin";
import { useState } from "react";
import { InputComponent } from "../components/Input";
import { Btn } from "../components/Button";
import { router } from "expo-router";
import { useTema } from "../contexts/TemaContext";

export default function Login() {

    const { erro, login } = useLogin()
    const { tema } = useTema()

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const realizarLogin = () => {
        login(email, senha)
    }

    const { page, containerTxt, txt } = styles

    return(
        <View style={[page, { backgroundColor: tema.back }]}>

            <Container>
                <InputComponent 
                    isPassword={false}
                    placeholder="Digite seu usuário ou email"
                    onChangeText={setEmail}
                />
                
                <InputComponent 
                    isPassword={true}
                    placeholder="Digite sua senha"
                    onChangeText={setSenha}
                />
            </Container>

            <Container>
                <Btn 
                    titulo="Entrar"
                    onPress={realizarLogin}
                />
            </Container>

            <Container>
                {erro && (
                    <View style={containerTxt}>
                        <Text style={[txt, { color: tema.txt }]}>
                            Não possui conta ?
                        </Text>

                        <TouchableOpacity onPress={() => router.push('/NovoUsuario')}>
                            <Text style={[txt , { color: tema.txt }]}>
                                Clique aqui para cadastrar-se
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Container>

        </View>
    )
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
})