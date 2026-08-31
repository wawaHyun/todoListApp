import { todayDate } from "@/common/atoms/today";
import { Pressable, View,Text } from "react-native";

export function DateTitle(){

    return(
    <Pressable>
        <View className="">
            <Text className="text-3xl">{todayDate}</Text>
        </View>
    </Pressable>  
    )
}