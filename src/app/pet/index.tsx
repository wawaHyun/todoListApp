import { useState } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, Pressable } from 'react-native';

export default function PetPage() {
    const router = useRouter();
    const [message, setMessage] = useState('오늘도 잘했어!');

    const level = 12;
    const exp = 780;
    const nextExp = 1000;
    const expPercent = Math.min((exp / nextExp) * 100, 100);

    const messages = ['오늘도 화이팅!', '안녕! 좋은 아침이야!', '오늘도 나랑 같이 해볼까?', '조금만 더 힘내자!', '루틴 하나 완료할까?', '오늘도 잘하고 있어!'];

    const handlePetPress = () => {
        setMessage(messages[Math.floor(Math.random() * messages.length)]);
    };

    return (
        <View className="flex-1 bg-white px-5 pt-8">
            <View className="flex-row items-center justify-between">
                <Pressable onPress={() => router.push('/')} className="px-2 py-1">
                    <Text className="text-base text-slate-500">← HOME</Text>
                </Pressable>
                <Text className="text-2xl font-bold text-slate-700">Lv. {level}</Text>
                <View className="w-[60px]" />
            </View>

            <View className="items-center justify-center h-[38%]">
                <Pressable onPress={handlePetPress} className="items-center">
                    <Text className="text-8xl">🐣</Text>
                    <Text className="text-xl font-bold text-slate-700 mt-5">My Pet</Text>
                </Pressable>
                <View className="bg-slate-100 rounded-2xl px-5 py-3 mt-4">
                    <Text className="text-base text-slate-600">{message}</Text>
                </View>
            </View>

            <View className="w-full">
                <View className="flex-row justify-between mb-2">
                    <Text className="text-sm font-bold text-slate-600">EXP</Text>
                    <Text className="text-sm text-slate-500">{exp} / {nextExp} EXP</Text>
                </View>
                <View className="w-full h-5 rounded-full bg-slate-200 overflow-hidden">
                    <View className="h-full rounded-full bg-green-400" style={{ width: `${expPercent}%` }} />
                </View>
                <Text className="text-right text-sm text-slate-400 mt-2">Lv.{level + 1}까지 {nextExp - exp} EXP</Text>
            </View>

            <View className="h-px w-full bg-slate-200 my-6" />

            <View>
                <Text className="text-xl font-bold text-slate-700 mb-4">오늘의 성장</Text>
                <View className="flex-row justify-between py-3 border-b border-slate-100">
                    <Text className="text-base text-slate-600">✓ 아침 루틴</Text>
                    <Text className="text-base font-bold text-green-500">+20 EXP</Text>
                </View>
                <View className="flex-row justify-between py-3 border-b border-slate-100">
                    <Text className="text-base text-slate-600">✓ 운동 루틴</Text>
                    <Text className="text-base font-bold text-green-500">+30 EXP</Text>
                </View>
                <View className="flex-row justify-between py-3 border-b border-slate-100">
                    <Text className="text-base text-slate-600">✓ 독서 루틴</Text>
                    <Text className="text-base font-bold text-green-500">+20 EXP</Text>
                </View>
                <View className="flex-row justify-between mt-4">
                    <Text className="text-base font-bold text-slate-700">오늘 획득</Text>
                    <Text className="text-base font-bold text-green-600">+70 EXP</Text>
                </View>
            </View>
        </View>
    );
}