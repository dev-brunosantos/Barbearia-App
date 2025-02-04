import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

export const Container = ({ children }:{children:ReactNode}) => {
    return(
        <View style={styles.container}>
            { children }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        paddingHorizontal: 10,
        paddingVertical: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
})