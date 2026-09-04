import { Pressable,Text } from "react-native";

interface IButton {
    children?: React.ReactNode;
    click: () => void;
    style?: string;
    select?: boolean;
}

export function BottomButton({ children, click, style='', select=false}: IButton) {
    return (
        <Pressable onPress={click}
            className={`rounded-t-lg pressed:text-slate-500 bg-slate-100 ${style} ${select ? 'bg-white' : ''}`} >
            <Text className="text-4xl">{children}</Text>
        </Pressable>
    )
}

export const RoundButton = ({ children, click, style='', select=false}: IButton) => {
    return (
        <Pressable onPress={click}
            className={`min-w-12.5 min-h-[30px] pressed:outline-none font-medium rounded-full border border-slate-500 shadow-lg hover:shadow-md text-sm text-center ${style} ${select ? 'bg-slate-300' : ''}`}>
            <Text>{children}</Text>
        </Pressable>
    )
}

export const ModifyButton = ({ children, click, style='', select=false}: IButton) => {
    return (
        <Pressable onPress={click} className={`w-[15%] ${style} ${select ? 'bg-slate-500' : ''}`}>
            <Text className="text-center text-2xl">✏️</Text>
        </Pressable>
    )
}

export const AddButton = ({ children, click, style='', select=false}: IButton) => {
    return (
        <Pressable onPress={click} className={`w-[15%] ${style} ${select ? 'bg-slate-500' : ''}`}>
            <Text className="text-center text-2xl">+</Text>
        </Pressable>
    )
}

export const DeleteButton = ({ click, style='', select=false}: IButton) => {
    return (
        <Pressable onPress={click}
            className={`w-[15%] ${style} ${select ? 'bg-slate-300' : ''}`}>
            <Text className="text-center text-2xl mt-1">X</Text>
        </Pressable>
    )
}