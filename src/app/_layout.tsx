import { Stack } from 'expo-router';

export default function AppLayout() {
    return(
        <Stack>
            <Stack.Screen name='Login' />
            <Stack.Screen name='NovoUsuario' />
        </Stack>
    )
}