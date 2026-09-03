import { View,Text } from "react-native";

export default function PetPage() {
    return(
        <View className="flex-1 grid-rows-2">
            <View className="flex-1 bg-slate-300"><Text>1</Text></View>
            <View className="flex-1 bg-blue-300"><Text>1</Text></View>
        </View>
    )
}