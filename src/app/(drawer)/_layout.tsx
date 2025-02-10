import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
            <Drawer.Screen name='/index' />
            <Drawer.Screen name='/Usuario' />
            <Drawer.Screen name='/config' />
        </Drawer>
    </GestureHandlerRootView>
  );
}