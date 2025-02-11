import { useTema } from "@/src/contexts/TemaContext";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Cores } from "@/src/interfaces/ITema";

export default function Config() {

    const { alterarTema } = useTema()

    const [corTxt, setCorTxt] = useState('')
    const [corBack, setCorBack] = useState('')

    useEffect(() => {
        async function buscaTema() {
            const txt = await AsyncStorage.getItem('corTxt')
            const back = await AsyncStorage.getItem('corBack')

            setCorTxt(txt || '#242424') 
            setCorBack(back || '#dadada')
        }
        buscaTema()

    }, [corBack, corTxt])

    function temaClaro() {

        setCorTxt('#242424')
        setCorBack('#dadada')

        alterarTema({
            back: corBack,
            txt: corTxt
        })
    }

    function temaEscuro() {

        setCorTxt('#dadada')
        setCorBack('#242424')

        alterarTema({
            back: corBack,
            txt: corTxt
        })
    }

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: "space-evenly",
            backgroundColor: corBack
        }}>
            <Text>Configurações</Text>

            <View
                style={{
                    width: '80%',
                    height: 120,
                    borderWidth: 1,
                    borderRadius: 10,
                    padding: 10,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: "space-evenly"

                }}
            >
                <TouchableOpacity onPress={async () => {
                    temaClaro()
                    try{
                        await AsyncStorage.setItem('corTxt', corTxt)
                        await AsyncStorage.setItem('corBack', corBack)
                    } catch(e) {
                        console.log("Erro ao salvar as informações do tema.")
                        console.log(e)
                    }
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        textAlign: 'center',
                        color: corTxt
                    }}>
                        CLARO
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={async () => {
                    temaEscuro()
                    try{
                        await AsyncStorage.setItem('corTxt', corTxt)
                        await AsyncStorage.setItem('corBack', corBack)
                    } catch(e) {
                        console.log("Erro ao salvar as informações do tema.")
                        console.log(e)
                    }
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        textAlign: 'center',
                        color: corTxt
                    }}>
                        ESCURO
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}