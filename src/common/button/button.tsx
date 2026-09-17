import { Pressable, Text, Image } from "react-native";

export interface IButton {
    children?: React.ReactNode;
    onPress: () => void;
    style?: string;
    select?: boolean;
    isOpen?: boolean;
}

export function BottomButton({ children, onPress, style = '', select = false }: IButton) {
    return (
        <Pressable onPress={onPress}
            className={`rounded-t-lg pressed:text-slate-500 bg-slate-100 ${style} ${select ? 'bg-white' : ''}`} >
            <Text className="text-4xl">{children}</Text>
        </Pressable>
    )
}
export const RoundButton = ({ children, onPress, style = '', select = false }: IButton) => {
    return (
        <Pressable onPress={onPress}
            className={`min-w-12.5 min-h-[30px] pressed:outline-none font-medium rounded-full border border-slate-500 shadow-lg hover:shadow-md text-sm text-center ${style} ${select ? 'bg-slate-300' : ''}`}>
            <Text>{children}</Text>
        </Pressable>
    )
}
export const ModifyButton = ({ children, onPress, style = '', select = false }: IButton) => {
    return (
        <Pressable onPress={onPress} className={`w-[15%] justify-center ${style} ${select ? 'bg-slate-500' : ''}`}>
            <Image source={require('@/assets/edit-icon.png')} className="w-[25px] h-[25px]" />
        </Pressable>
    )
}
export const AddButton = ({ children, onPress, style = '', select = false }: IButton) => {
    return (
        <Pressable onPress={onPress} className={`w-[15%] ${style} ${select ? 'bg-slate-500' : ''}`}>
            <Text className="text-center text-4xl">+</Text>
        </Pressable>
    )
}
export const DoneButton = ({ children, onPress, style = '', select = false }: IButton) => {
    return (
        <Pressable onPress={onPress} className={`w-[15%] ${style} ${select ? 'bg-slate-500' : ''}`}>
            <Text className="text-center text-2xl">✓</Text>
        </Pressable>
    )
}
export const DeleteButton = ({ onPress, style = '', select = false }: IButton) => {
    return (
        <Pressable onPress={onPress} className={`w-[15%] ${style} ${select ? 'bg-slate-300' : ''}`}>
            <Text className="text-center text-2xl mt-1">X</Text>
        </Pressable>
    )
}