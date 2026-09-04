import { todayDate } from "@/common/atoms/today";
import { router } from "expo-router";
import { Pressable, View,Text } from "react-native";

type DateTitleProps = {
    today: string;
};

export function DateTitle({ today }: DateTitleProps){

    return(
    <Pressable onPress={()=>router.push('./calendar')}>
        <View className="">
            <Text className="text-3xl">{today}</Text>
        </View>
    </Pressable>  
    )
}