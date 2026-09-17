import { AddButton } from "@/common/button/button";
import { Checkbox } from "@/common/atoms/checkBox";
import { WhiteInputBox } from "@/common/atoms/inputBox";
import { todayDate } from "@/common/atoms/today";
import { routineViewDummy } from "@/common/data/routine.dummy";
import { PetAnimation } from "@/component/pet/petAnimation";
import { DateTitle } from "@/component/routine/dateTitle";
import { useRoutineViewAction, useRoutineViewStack } from "@/store/routineView.store";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import HamMenu from "@/common/navigation/hamMenu";
import { HamburgerButton } from "@/common/button/HamburgerButton";
import Animated from 'react-native-reanimated';
import { useMenuAnimation } from "@/common/animation/menu.Animation";
import { IRoutineView } from "@/domain/common.model";


export default function RoutinePage() {

  const routineViewDummyData = routineViewDummy;
  const [recordList, setRecordList] = useState<IRoutineView[]>(routineViewDummyData);

  const { date } = useLocalSearchParams<{ date?: string }>();
  const specifiedDate = date ?? todayDate;
  // const specifiedDate = date ?? '2026-09-30';

const [isAddingRoutine, setIsAddingRoutine] = useState(false);
const [isAddingTodo, setIsAddingTodo] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const routienAct = useRoutineViewAction();
  const routineInfo = useRoutineViewStack();

  const [longPressedId, setLongPressedId] = useState<number | null>(null);
  const menuStyle = useMenuAnimation(openMenu);

  const handleForm = (name: string, value: string) => {
    routienAct.update({ ...routineInfo, [name]: value });
    console.log('routineInfo : ' + JSON.stringify(routineInfo))
  };

 const handleRoutinePress = (routineId: number) => {
    setLongPressedId(null);
    setRecordList(prev => prev.map(item => item.routineId === routineId ? { ...item, status: !(item.status ?? false) } : item));
  };
 const handleTodoPress = (todoId: number) => {
    setLongPressedId(null);
    setRecordList(prev => prev.map(item => item.todoId === todoId ? { ...item, status: !(item.status ?? false) } : item));
  };


const handleSubmit = async (e: any) => {
    const data = { ...routineInfo, date: specifiedDate };
    routienAct.update(data);
    console.log('save routineInfo : ' + JSON.stringify(data));
};
  const handleMenu = async () => {
    setOpenMenu(prev => !prev)
    // console.log('menu : ', openMenu)
  }

  return (
    <View className="relative flex-1">
      <View className="relative z-30">
        <View className="flex-row justify-between items-center bg-slate-200 my-5">
          <DateTitle today={specifiedDate} />
          <View className="relative mr-3"><HamburgerButton onPress={handleMenu} isOpen={openMenu} /></View>
        </View>

        {openMenu && (
          <Animated.View style={[menuStyle, { position: 'absolute', top: 80, right: 10, width: 100, zIndex: 50 }]}          >
            <HamMenu />
          </Animated.View>
        )}
      </View>

      <Pressable onPress={() => router.push('./pet')} className="z-20 absolute top-[120px] right-0 w-[120px] h-[120px]">
        <PetAnimation />
      </Pressable>


      <ScrollView>
        <View className="flex-1">
          <View className="h-px my-3 w-full bg-gray-300" />
          <Text className="text-3xl mt-2">✅ My routine group</Text>
          <View className="h-px my-2 w-full " />

          {Object.entries(recordList?.filter((v) =>v.date === specifiedDate &&  v.routineId != null).reduce<Record<string, typeof recordList>>((acc, v) => {
            const key = v.ggroupId != null ? String(v.ggroupId) : 'ungrouped';
            (acc[key] ??= []).push(v);
            return acc;
          }, {}) ?? {}).map(([groupId, routines]) => (
            <View key={groupId}>
              {groupId !== 'ungrouped' && (
                <View className="flex-row justify-between">
                  <Text className="text-xl font-bold">{routines[0].gname}</Text>
                </View>
              )}
              {routines.map((v) => (
                <View key={v.id} className="flex-row">
                  {/* {v.ggroupId! && <View className="w-5" />} */}
                  {v.ggroupId! && <Text> ㄴ</Text>}
                  <Checkbox checked={v.status ?? false} title={v.rname} isLongPressed={longPressedId === v.id}
                    onLongPress={() => setLongPressedId(v.id!)} onPress={() => handleRoutinePress(v.routineId!)} />
                </View>
              ))}
            </View>
          ))}
          <View>
            {isAddingRoutine ?
              <WhiteInputBox click={() => { handleSubmit(routineInfo)}} onChangeText={(value) => handleForm('name', value)} />
              : <AddButton onPress={() => setIsAddingRoutine(true)} style="w-[15%] w-full" />}
          </View>
        </View>

        <View className="min-h-[50vh] ">
          <View className="h-px my-3 w-full bg-gray-300" />
          <Text className="text-3xl">📋To-Do List</Text>
          <View className="h-px my-2 w-full " />
          {recordList && recordList?.map((v) => (
            <View key={v.id}>
              {v.date === specifiedDate && v.routineId == null && (
                <View className="flex-row">
                  <Checkbox checked={v.status ?? false} title={v.tname} isLongPressed={longPressedId === v.id}
                    onLongPress={() => setLongPressedId(v.id!)} onPress={() => handleTodoPress(v.todoId!)} />
                </View>
              )}
            </View>
          ))}
          {isAddingTodo ?
            <WhiteInputBox click={() => { handleSubmit(routineInfo)}} onChangeText={(value) => handleForm('name', value)} />
            : <AddButton onPress={() => setIsAddingTodo(true)} style="w-[15%] w-full" />}
        </View>
      </ScrollView>
    </View>
  );
}