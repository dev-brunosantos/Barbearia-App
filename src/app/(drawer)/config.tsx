import { useTema } from "@/src/contexts/TemaContext";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Config() {

    const { alterarTema } = useTema()

    const [corTxt, setCorTxt] = useState('')
    const [corBack, setCorBack] = useState('')

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
                <TouchableOpacity onPress={temaClaro}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        textAlign: 'center',
                        color: corTxt
                    }}>
                        CLATO
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={temaEscuro}>
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