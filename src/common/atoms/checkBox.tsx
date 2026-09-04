import { Pressable, Text, View } from 'react-native';
import { DeleteButton, ModifyButton } from './button';
import { useState } from 'react';

interface ICheckbox {
    checked: boolean;
    onChange?: () => void;
    onLongPress?: () => void;
    title?: string;
    style?: string;
    isLongPressed?: boolean;
}


export function Checkbox({ checked, onChange, onLongPress, title, style, isLongPressed }: ICheckbox) {
    return (
        <Pressable onPress={onChange} onLongPress={onLongPress} delayLongPress={1000} className="w-full">
            {isLongPressed ? (
                <View className="flex-row w-full justify-center bg-slate-200">
                    <ModifyButton click={() => console.log('press the ModifyButton')} style="w-[15%]" />
                    <Text> : </Text>
                    <DeleteButton click={() => console.log('press the DeleteButton')} style="w-[15%]" />
                </View>
            ) : (
                <View className={`flex-row p-1 ${style ?? ''}`}>
                    <View className={`w-6 h-6 rounded items-center justify-center ${checked ? 'bg-green-400' : 'bg-white border border-slate-300'}`}>
                        {checked && <Text className="text-white">✓</Text>}
                    </View>
                    <Text className="ml-2">{title}</Text>
                </View>
            )}
        </Pressable>
    );
}