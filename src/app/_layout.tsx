import '../global.css';
import ReactQueryProviders from '@/common/hooks/useReactQuery';
import BottomMenu from '@/common/navigation/bottomMenu';
import PetNavi from '@/common/navigation/petNavi';
import { Slot, usePathname } from 'expo-router';
import { View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

//SplashScreen.preventAutoHideAsync();


function AppLayout() {
  const insets = useSafeAreaInsets();
  const pathname = usePathname();

  return (
    <View
      className="flex-1"
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      
  <View className="z-0 flex-[10] ">
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

// export default function RootLayout() {
//   return (
//     <SafeAreaProvider>
//       <View className="flex-1">
//         <Slot />
//       </View>
//     </SafeAreaProvider>
//   );
// }
