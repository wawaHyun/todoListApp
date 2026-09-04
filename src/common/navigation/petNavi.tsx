import { Pressable} from 'react-native';
import { PetIcon } from '../atoms/Pet';
import { router } from 'expo-router';

export default function PetNavi() {
  return (
    <Pressable onPress={() => router.push('./pet')}
    className="w-[100px] h-[100px] ">
      <PetIcon/>
    </Pressable>
  );
}