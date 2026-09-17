import { TextInput, View } from "react-native";
import { DoneButton } from "../button/button";

interface Iinputbox {
    children?: React.ReactNode;
    click: () => void;
    onChangeText?: (text: string) => void;
    value?: string;
    style?: string;
    select?: boolean;
}


export const WhiteInputBox = ({ children, click, onChangeText, value, style = '', select = false }: Iinputbox) => {
    return (
        <View className="flex-row gap-2">
            <TextInput placeholder="You can do it everythings!" className="flex-1 bg-white rounded-lg px-4 py-3 border border-slate-400"
                onChangeText={onChangeText} value={value} />
            <DoneButton onPress={click} />
        </View>
    )
}