import { router } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function app() {

    useEffect(() => {
        function alterarTela() {
            setTimeout(() => {
                return router.push('Login')
            }, 1000);
        }

        alterarTela()
    },[])

    return(
        <View>
            <Text>
                INICIO
            </Text>
        </View>
    )
}