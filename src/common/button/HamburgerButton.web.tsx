import { Pressable, Text } from "react-native"
import { IButton } from "./button"

export const HamburgerButton = ({ onPress, style='', select=false}: IButton) => {
    return (
        <Pressable onPress={onPress}
            className={`w-[100px] items-center ${style} ${select ? 'bg-slate-300' : ''}`}>
            <Text className="text-5xl my-1">☰</Text>
        </Pressable>    
    )
}   