import ReactQueryProviders from '@/common/hooks/useReactQuery';
import '../global.css';
import { Slot } from 'expo-router';
import { View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

//SplashScreen.preventAutoHideAsync();


function AppLayout() {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="flex-1"
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      
  <View className="relative z-0 flex-[10]">
    <Slot />
  </View>

</View>
  );
}


export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ReactQueryProviders>
        <AppLayout />
      </ReactQueryProviders>
    </SafeAreaProvider>
  );
}
