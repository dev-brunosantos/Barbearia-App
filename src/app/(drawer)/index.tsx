import { InputSearch } from "@/src/components/Input/InputSearch";
import { Text, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function Home() {

    const buscaTema = async ():Promise<any> => {
        try {
            const txt = await AsyncStorage.getItem('corTxt')
            // const back = await AsyncStorage.getItem('corBack')

            if(!txt) {
                console.log("Não existe nenhum tema salvo no LocalStorage")
            } 

            return txt
        } catch (error) {
            console.log("Erro interno.")
            console.log(error)
        }
    }

    var dados = await buscaTema()

    return (
        <View style={{ backgroundColor: dados}}>
            <View>
                <InputSearch />
            </View>

            <Text>
                Tela HOME
            </Text>
        </View>
    )
}