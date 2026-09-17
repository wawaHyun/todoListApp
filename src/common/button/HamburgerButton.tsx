import LottieView from "lottie-react-native";
import { Pressable } from "react-native";
import { IButton } from "./button";
import { useRef } from "react";

export const HamburgerButton = ({ onPress, isOpen, style = '', select = false }: IButton) => {
    const lottieRef = useRef<LottieView>(null);

    const handlePress = () => {
        { isOpen ? lottieRef.current?.play(35, 70) : lottieRef.current?.play(0, 35) }
        onPress();
    };

    return (
        <Pressable onPress={handlePress}
            className={`w-[100px] items-center ${style} ${select ? 'bg-slate-300' : ''}`}>
            <LottieView ref={lottieRef} source={require('@/assets/hamburger-button.json')} autoPlay={false} loop={false} style={{ width: 20, height: 20 }} />
        </Pressable>
    )
}