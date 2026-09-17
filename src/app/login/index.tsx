import { Pressable, Text, View } from 'react-native';
import GoogleGlogo from '../../../assets/google-logo.svg';
import { router } from 'expo-router';

export default function LoginPage() {

  const handleGoogleLogin = () => {
    console.log('Google Login');
     router.push('./routine');
  };

  return (
    <View className="flex-1 items-center justify-center bg-white px-6">
      
      <Text className="mb-10 text-3xl font-bold">RoutineGochi</Text>
      <Text className="mb-10 text-2xl">::나를 만드는 루틴::</Text>

      <Pressable
        onPress={handleGoogleLogin}
        className="h-12 w-full flex-row items-center justify-center rounded-lg border border-gray-300 bg-white"
      >
         <GoogleGlogo width={20} height={20} />

        <Text className="text-base font-medium text-gray-700">
          Google로 로그인
        </Text>
      </Pressable>

    </View>
  );
}