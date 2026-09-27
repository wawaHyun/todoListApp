import { ScrollView, Text, View, Pressable } from 'react-native';
import { useState } from 'react';
import { petDummy } from '@/common/data/pet.dummy';
import { myPageMenu } from '@/common/data/menu';
import { router } from 'expo-router';

export default function MyPage() {
    const [nickname, setNickname] = useState('고치유저');

    const routineSuccessRate = 82;
    const todayComplete = 7;
    const todayTotal = 9;
    const totalComplete = 328;

    return (
        <ScrollView className="flex-1 bg-white" contentContainerStyle={{ paddingBottom: 40 }}>
            <View className="px-5 pt-14">
                <Text className="text-3xl font-bold">마이페이지</Text>
                <Text className="mt-2 text-gray-500">나의 RoutineGochi</Text>

                <View className="mt-8 rounded-3xl bg-gray-50 p-5">
                    <View className="flex-row items-center justify-between">
                        <View>
                            <Text className="text-sm text-gray-500">닉네임</Text>
                            <Text className="mt-1 text-xl font-bold">{nickname}</Text>
                        </View>

                        <Pressable className="rounded-xl bg-white px-4 py-2">
                            <Text className="font-semibold text-gray-700">수정</Text>
                        </Pressable>
                    </View>
                </View>

                <View className="mt-8 flex-row items-center justify-between">
                    <View>
                        <Text className="text-xl font-bold">나의 펫</Text>
                        <Text className="mt-1 text-sm text-gray-500">함께 성장하고 있는 펫이에요</Text>
                    </View>

                    <Text className="text-sm text-gray-400">{petDummy.length}마리</Text>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-4">
                    {petDummy.map((pet) => {
                        const expPercent = Math.min((pet.exp / pet.nextExp) * 100, 100);

                        return (
                            <View key={pet.id} className="mr-4 w-52 rounded-3xl bg-gray-50 p-5">
                                <View className="flex-row items-center justify-between">
                                    <Text className="text-xs font-semibold text-gray-400">
                                        {pet.isRepresentative ? '대표 펫' : '보유 펫'}
                                    </Text>

                                    {pet.isRepresentative && (
                                        <View className="rounded-full bg-black px-2 py-1">
                                            <Text className="text-xs font-semibold text-white">대표</Text>
                                        </View>
                                    )}
                                </View>

                                <View className="items-center py-5">
                                    <Text className="text-7xl">{pet.image}</Text>
                                    <Text className="mt-3 text-lg font-bold">{pet.name}</Text>
                                    <Text className="mt-1 text-sm text-gray-500">Lv.{pet.level}</Text>
                                </View>

                                <View>
                                    <View className="mb-2 flex-row justify-between">
                                        <Text className="text-xs text-gray-500">EXP</Text>
                                        <Text className="text-xs font-semibold text-gray-700">
                                            {pet.exp} / {pet.nextExp}
                                        </Text>
                                    </View>

                                    <View className="h-2 overflow-hidden rounded-full bg-gray-200">
                                        <View
                                            className="h-full rounded-full bg-black"
                                            style={{ width: `${expPercent}%` }}
                                        />
                                    </View>

                                    <Text className="mt-2 text-xs text-gray-400">
                                        다음 레벨까지 {pet.nextExp - pet.exp} EXP
                                    </Text>
                                </View>

                                {!pet.isRepresentative && (
                                    <Pressable className="mt-4 rounded-xl bg-white py-3">
                                        <Text className="text-center text-sm font-semibold text-gray-700">
                                            대표 펫으로 설정
                                        </Text>
                                    </Pressable>
                                )}
                            </View>
                        );
                    })}
                </ScrollView>

                <View className="mt-8">
                    <Text className="text-xl font-bold">루틴 성공률</Text>
                    <Text className="mt-1 text-sm text-gray-500">지금까지 나의 루틴 기록이에요</Text>

                    <View className="mt-4 rounded-3xl bg-gray-50 p-5">
                        <View className="flex-row items-end justify-between">
                            <View>
                                <Text className="text-sm text-gray-500">전체 성공률</Text>
                                <Text className="mt-1 text-4xl font-bold">{routineSuccessRate}%</Text>
                            </View>

                            <Text className="text-sm text-gray-500">
                                오늘 {todayComplete}/{todayTotal}
                            </Text>
                        </View>

                        <View className="mt-5 h-3 overflow-hidden rounded-full bg-gray-200">
                            <View
                                className="h-full rounded-full bg-black"
                                style={{ width: `${routineSuccessRate}%` }}
                            />
                        </View>

                        <View className="mt-5 flex-row">
                            <View className="flex-1">
                                <Text className="text-xs text-gray-400">오늘 완료</Text>
                                <Text className="mt-1 text-lg font-bold">{todayComplete}개</Text>
                            </View>

                            <View className="flex-1">
                                <Text className="text-xs text-gray-400">오늘 전체</Text>
                                <Text className="mt-1 text-lg font-bold">{todayTotal}개</Text>
                            </View>

                            <View className="flex-1">
                                <Text className="text-xs text-gray-400">누적 완료</Text>
                                <Text className="mt-1 text-lg font-bold">{totalComplete}개</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View className="mt-8">
                    <Text className="text-xl font-bold">RoutineGochi</Text>
                    <View className="mt-4 overflow-hidden rounded-3xl bg-gray-50">
                    {myPageMenu.map((v) => (
                        <Pressable key={v.id} onPress={() => router.push(v.href)} className="flex-row items-center justify-between border-b border-gray-200 px-5 py-4">
                            <Text className="text-base">{v.menu}</Text>
                            <Text className="text-gray-400">›</Text>
                        </Pressable>
                    ))}
                        
                    </View>
                </View>

                <Text className="mt-8 text-center text-xs text-gray-400">
                    RoutineGochi · 나를 키우는 루틴
                </Text>
            </View>
        </ScrollView>
    );
}