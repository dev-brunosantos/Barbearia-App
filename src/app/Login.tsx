import { Text, TouchableOpacity, View } from "react-native";
import { Container } from "../components/container";
import { useLogin } from "../hooks/useLotin";
import { useState } from "react";
import { InputComponent } from "../components/Input";
import { Btn } from "../components/Button";

export default function Login() {
    
    const { erro, login } = useLogin();

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const realizarLogin = () => {
        login(email, senha)
    }

    return(
        <View>
            <Container>
                <InputComponent 
                    isPassword={false}
                    placeholder="Digite seu email ou seu usuário"
                    onChangeText={setEmail}
                />
                
                <InputComponent 
                    isPassword={true}
                    placeholder="Digite sua senha"
                    onChangeText={setSenha}
                />
            </Container>
            
            <Container>
                <Btn onPress={realizarLogin} titulo="Entrar" />
            </Container>
            
            <Container>
                {erro && (
                    <View>
                        <Text>Não possui conta?</Text>
                        
                        <TouchableOpacity>
                            <Text>
                                Clique aqui e cadastre-se
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Container>
        </View>
    )
}