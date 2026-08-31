import { Pressable, View } from 'react-native';
import { useRouter } from 'expo-router';
import { BottomButton } from '../atoms/button';

export default function BottomMenu() {

    const router = useRouter();

  return (
    <Pressable onPress={() => router.push('/')}className="items-center">
      <View className="flex-row ">
        <View className="flex-1">
          <BottomButton style="text-black w-full h-full text-center " click={()=>router.push('/')} >HOME</BottomButton>
        </View>
           <View className="flex-1">
          <BottomButton style="text-black w-full h-full text-center " click={()=>router.push('/')} >Routine List</BottomButton>
        </View>
           <View className="flex-1">
          <BottomButton style="text-black w-full h-full text-center " click={()=>console.log('To-Do list 버튼 클릭')} >My Gochi</BottomButton>
        </View>
      </View>
    </Pressable>
  );
}