import { useMenuAnimation } from "@/common/animation/menu.Animation";
import { Checkbox } from "@/common/atoms/checkBox";
import { WhiteInputBox } from "@/common/atoms/inputBox";
import { todayDate } from "@/common/atoms/today";
import { AddButton } from "@/common/button/button";
import { HamburgerButton } from "@/common/button/HamburgerButton";
import { groupDummy, recordDummy, routineDummy, todoDummy } from "@/common/data/routine.dummy";
import HamMenu from "@/common/navigation/hamMenu";
import { PetAnimation } from "@/component/pet/petAnimation";
import { DateTitle } from "@/component/routine/dateTitle";
import { IRecord, ITodo } from "@/domain/routine.model";
import { useRoutineViewAction, useRoutineViewStack } from "@/store/routineView.store";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import Animated from 'react-native-reanimated';


export default function RoutinePage() {

  const routineList = routineDummy;
  const recordList = recordDummy;
  const groupList = groupDummy;
  const todoList = todoDummy;

  const { date } = useLocalSearchParams<{ date?: string }>();
  // const specifiedDate = date ?? todayDate;
  const specifiedDate = date ?? '2026-09-30';

  const [todayRecords, setTodayRecords] = useState<IRecord[]>(
    recordList.filter(record => record.date === specifiedDate)
  );

  const [addingTarget, setAddingTarget] = useState<{ type: 'group' | 'ungrouped' | 'todo'; id?: number } | null>(null);
  const [openMenu, setOpenMenu] = useState(false);
  const routienAct = useRoutineViewAction();
  const routineInfo = useRoutineViewStack();

  const [longPressedId, setLongPressedId] = useState<number | null>(null);
  const menuStyle = useMenuAnimation(openMenu);

  const handleForm = (name: string, value: string) => {
    routienAct.update({ ...routineInfo, [name]: value });
    console.log('routineInfo : ' + JSON.stringify(routineInfo))
  };

  const handleRecordPress = (recordId: number) => {
    setLongPressedId(null);
    setTodayRecords(prev => prev.map(item => item.id === recordId ? { ...item, status: !(item.status ?? false) } : item));
  };
  const handleTodoPress = (todoId: number) => {
    setLongPressedId(null);
    setTodayRecords(prev => prev.map(item => item.todoId === todoId ? { ...item, status: !(item.status ?? false) } : item));
  };

  const handleSubmit = async (e: any) => {
    const data = { ...routineInfo, date: todayDate };
    routienAct.update(data);
    console.log('save routineInfo : ' + JSON.stringify(data))
  }
  const handleMenu = async () => {
    setOpenMenu(prev => !prev)
    console.log('menu : ', openMenu)
  }

  return (
    <View className="relative flex-1">
      <View className="z-10">
        <View className="flex-row justify-between items-center bg-slate-200 my-5">
          <DateTitle today={specifiedDate} />
          <View className="relative mr-3">
            <HamburgerButton onPress={handleMenu} isOpen={openMenu} />

            <Pressable onPress={() => router.push('./pet')} className="z-10 absolute top-[70px] right-0 w-[110px] h-[110px]">
              <PetAnimation />
            </Pressable>

            {openMenu && (
              <Animated.View style={menuStyle} className="absolute top-full right-0 z-30 w-[100px] mt-1">
                <HamMenu />
              </Animated.View>
            )}
            
          </View>
        </View>
      </View>


      <ScrollView className="z-0">
        <View className="flex-1">
          <View className="h-px my-3 w-full bg-gray-300" />
          <Text className="text-3xl mt-2">✅ My routine group</Text>

          <View className="h-px my-2 w-full " />

          {groupList.map((group) => {

            const groupRoutines = routineList.filter(routine => routine.ggroupId === group.id);
            const groupRecords = todayRecords.filter(record =>
              groupRoutines.some(routine => routine.id === record.routineId)
            );

            if (groupRecords.length === 0) { return null; }
            return (
              <View key={group.id}>
                <View className="flex-row">
                  <Text className="text-xl font-bold pr-5">{group.name}</Text>
                  <AddButton onPress={() => setAddingTarget({ type: 'group', id: group.id })} style="w-[15%]" />
                </View>

                {groupRecords.map((record) => {
                  const routine = routineList.find(routine => routine.id === record.routineId);
                  return (
                    <View key={record.id} className="flex-row">
                      <Checkbox
                        checked={record.status ?? false}
                        title={routine?.name ?? ''}
                        isLongPressed={longPressedId === record.id}
                        onLongPress={() => setLongPressedId(record.id!)}
                        onPress={() => handleRecordPress(record.id!)}
                      />
                    </View>
                  );
                })}
                {addingTarget?.type === 'group' && addingTarget.id === group.id &&
                  <WhiteInputBox click={() => { handleSubmit(routineInfo), setAddingTarget(null) }} onChangeText={(value) => handleForm('name', value)} />
                }
                <View className="h-px my-3 w-full bg-gray-300" />
              </View>
            );
          })}
        </View>

        <View>
          {addingTarget?.type === 'ungrouped' ?
            <WhiteInputBox click={() => { handleSubmit(routineInfo), setAddingTarget(null) }} onChangeText={(value) => handleForm('name', value)} />
            : <AddButton onPress={() => setAddingTarget({ type: 'ungrouped' })} style="w-[15%] w-full" />}
        </View>

        <View className="">
          <View className="h-px my-3 w-full bg-gray-300" />
          <Text className="text-3xl">📋To-Do List</Text>
          <View className="h-px my-2 w-full " />
          {todoList && todoList.map((todo: ITodo, i: number) => {
            const record = todayRecords.find(record => record.todoId === todo.id);
            if (!record) return null;
            return (
              <View key={todo.id} className="flex-row min-h-3 ">
                <View key={todo.id} className="flex-row">
                  <Checkbox
                    checked={record?.status ?? false}
                    title={todo?.name ?? ''}
                    isLongPressed={longPressedId === todo.id}
                    onLongPress={() => setLongPressedId(todo.id!)}
                    onPress={() => handleTodoPress(todo.id!)}
                  />
                </View>
              </View>)
          }
          )}
          {addingTarget?.type === 'todo' ?
            <WhiteInputBox click={() => { handleSubmit(routineInfo), setAddingTarget(null) }} onChangeText={(value) => handleForm('name', value)} />
            : <AddButton onPress={() => setAddingTarget({ type: 'todo' })} style="w-[15%] w-full" />}
        </View>
      </ScrollView>
    </View >
  );
}