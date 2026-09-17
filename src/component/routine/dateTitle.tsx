import { router } from "expo-router";
import { Pressable, View, Text,Image} from "react-native";

type DateTitleProps = {
    today: string;
};

export function DateTitle({ today }: DateTitleProps) {

    return (
        <Pressable onPress={() => router.push('./calendar')}>
            <View className="flex-row">
               <Text className="text-3xl"> {today} </Text> <Image source={require('@/assets/calendarIcon.png')} className="w-[25px] h-[25px]" />
            </View>
        </Pressable>
    )
}