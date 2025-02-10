import { Btn } from "@/src/components/Button";
import { Container } from "@/src/components/container";
import { useLogin } from "@/src/hooks/useLogin";
import { router } from "expo-router";
import { Image, Text, View } from "react-native";

export default function Usuario() {

    const { usuario } = useLogin()

    return(
        <View>
            <Text>Tela do usuário</Text>

            <Container>
                <Image 
                    src={'https://cdn-icons-png.flaticon.com/512/3106/3106921.png'}
                />

                <Text>{usuario.email}</Text>
            </Container>

            <Container>
                <Text>Alterar perfil</Text>
                <Text>Alterar senha</Text>
            </Container>

            <Btn 
                titulo="Sair"
                onPress={() => router.push('../Login')}
            />
        </View>
    )
}