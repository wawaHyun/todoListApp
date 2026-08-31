import { Pressable} from 'react-native';
import { PetIcon } from '../atoms/Pet';

export default function PetNavi() {
  return (
    <Pressable onPress={() => console.log('PetIcon clik')}
    className="w-[100px] h-[100px] ">
      <PetIcon/>
    </Pressable>
  );
}