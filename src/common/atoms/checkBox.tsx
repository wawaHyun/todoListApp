import { Pressable, Text, View } from 'react-native';
import { DeleteButton, ModifyButton } from './button';
import { useState } from 'react';

interface ICheckbox {
    checked: boolean;
    onChange: () => void;
    title: string;
    style?: string;
}

export function Checkbox({ checked, onChange, title, style }: ICheckbox) {
    const [isLongPressed, setIsLongPressed] = useState(false);

    return (
        <Pressable onPress={() => {
            setIsLongPressed(false)
            onChange();
        }}
            onLongPress={() => { setIsLongPressed(true); }}
            delayLongPress={1000}
            className='border border-blue-500 w-full'>
            {isLongPressed ? (
                <View className='flex-row w-full justify-center bg-slate-200'>
                    <ModifyButton click={() => console.log('press the ModifyButton')} style='w-[15%]' />
                    <Text> : </Text>
                    <DeleteButton click={() => console.log('press the DeleteButton')} style='w-[15%]' />
                </View>
            ) : (
                <View className={`flex-row  p-1 ${style} `}>
                    <View className={`w-6 h-6 rounded items-center justify-center ${checked ? 'bg-green-400' : 'bg-white'}`}>
                        {checked && (<Text className="text-white">✓</Text>)}
                    </View>
                    <Text className={`ml-2`}>{title}</Text>
                </View>
            )}
        </ Pressable >
    );
}