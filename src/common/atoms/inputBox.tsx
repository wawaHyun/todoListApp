import { Pressable, TextInput, View, Text } from "react-native";
import { AddButton } from "./button";

interface Iinputbox {
    children?: React.ReactNode;
    click: () => void;
    style?: string;
    select?: boolean;
}


export const WhiteInputBox = ({ children, click, style = '', select = false }: Iinputbox) => {
    return (
        <View className="flex-row gap-2">
            <TextInput
                placeholder="루틴을 작성하세요."
                className="flex-1 bg-white rounded-lg px-4 py-3"
            />
                <AddButton click={click}/>
        </View>
    )
}