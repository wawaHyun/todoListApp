
import { Text, View } from "react-native";

interface IPet {
    style?: string;
    select?: boolean;
    status?: 'happy' | 'normal' | 'hungry' | 'sleepy' | 'sad';
}

//Pet icon
//Pet full
//Pet watch full
//Pet warch icon

export function PetIcon({ style = '', select = false, status = 'normal' }: IPet) {
    return (
        <View 
            className={`w-[100px] h-[100px] rounded-full ${style} ${select ? '' : ''}`} >
            <Text className="text-8xl text-center">🐣</Text>
        </View>
    )
}



