import { AddButton, ModifyButton } from "@/common/atoms/button";
import { Checkbox } from "@/common/atoms/checkBox";
import { WhiteInputBox } from "@/common/atoms/inputBox";
import { todayDate } from "@/common/atoms/today";
import { groupDummy, recordDummy, routineDummy } from "@/common/data/routine.dummy";
import { DateTitle } from "@/component/routine/dateTitle";
import { IRecord, IRoutine } from "@/domain/routine.model";
import { useRoutineViewAction, useRoutineViewStack } from "@/store/routineView.store";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { View, Text } from "react-native";


export default function HomePage() {

  const routineList = routineDummy;
  const recordList = recordDummy;
  const groupList = groupDummy;

   const { date } = useLocalSearchParams<{ date?: string }>();
    const specifiedDate = date ?? todayDate;

  const [todayRecords, setTodayRecords] = useState<IRecord[]>(
    recordList.filter(record => record.date === specifiedDate)
  );

  const routienAct = useRoutineViewAction();
  const routineInfo = useRoutineViewStack();

  const [longPressedId, setLongPressedId] = useState<number | null>(null);

  const handleForm = (name: string, value: string) => {
    routienAct.update({ ...routineInfo, [name]: value });
    console.log('routineInfo : ' + JSON.stringify(routineInfo))
  };


  const handleSubmit = async (e: any) => {
    const data = { ...routineInfo, date: todayDate };
    routienAct.update(data);
    console.log('save routineInfo : ' + JSON.stringify(data))

    // if (routineInfo.name) {
    //       existApi()
    //           .then((res: boolean | { status: number; }) => {
    //               if (typeof res === 'boolean' && res === true) {
    //                   // console.log("existApi page true: "+ res);
    //                   Swal.fire({
    //                       icon: "warning",
    //                       title: "회원가입 실패",
    //                       text: "이미 있는 아이디입니다.\n다시 한번 시도해주세요.",
    //                   })
    //               }

    //               if (typeof res !== 'boolean' || res === false) {
    //                   // console.log("existApi page false: "+res)
    //                   joinApi()
    //                       .then((res: boolean | { status: number; }) => {
    //                           if (res = true) {
    //                               actionJoin.clean()
    //                               Swal.fire({
    //                                   icon: "success",
    //                                   title: "회원가입 완료",
    //                                   text: "회원가입되었습니다.\n로그인 해주십시오.",
    //                               })
    //                               console.log("page : " + res)
    //                               router.push(`/login`)
    //                           }
    //                           if (res = false) {
    //                               Swal.fire({
    //                                   icon: "warning",
    //                                   title: "회원가입 실패",
    //                                   text: "다시 한번 시도해주세요.",
    //                               })
    //                           }
    //                       })
    //                       .catch((error) => {
    //                           console.log("auth page err: ", error)
    //                       })
    //               }
    //           })
    //   } else {
    //       Swal.fire({
    //           icon: "warning",
    //           title: "필수정보 누락",
    //           text: "정보를 입력해주세요.",
    //       })
    // }
  }


  return (
    <View className="flex-1 grid-rows-2">

      {/* <View className="h-[10%] justify-center bg-slate-200"><Text className="text-3xl">{todayDate}</Text></View> */}
      <View className="h-[10%] justify-center bg-slate-200"><DateTitle today={specifiedDate} /></View>
      <View className="min-h-[50%] ">
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
                <AddButton click={() => console.log('press the AddButton')} style="w-[15%]" />
              </View>

              {groupRecords.map((record) => {
                const routine = routineList.find(routine => routine.id === record.routineId);
                return (
                  <View key={record.id} className="flex-row">
                    <Checkbox checked={record.status ?? false} title={routine?.name ?? ''}
                      isLongPressed={longPressedId === record.id} onLongPress={() => setLongPressedId(record.id!)}
                      onChange={() => {
                        setLongPressedId(null); 
                        setTodayRecords(prev => prev.map(item => item.id === record.id ?
                          { ...item, status: !(item.status ?? false) } : item));
                        console.log('recordId:', record.id,'ggroupId:',  group.id);
                      }} />
                  </View>
                );
              })}
              <View className="h-px my-3 w-full bg-gray-300" />
            </View>
          );
        })}
      </View>

      <View>
        <WhiteInputBox click={() => handleSubmit(routineInfo)} onChangeText={(value) => handleForm('name', value)} />
      </View>

      <View className="min-h-[10%] ">
        <View className="h-px my-3 w-full bg-gray-300" />
        <Text className="text-3xl">📋To-Do List</Text>
        <View className="h-px my-2 w-full " />
        {routineList && routineList.map((vv: IRoutine, i: number) =>
          <View key={vv.id} className="flex-row min-h-3 ">
            <Checkbox checked={false} title={vv?.name ?? ''} />
          </View>
        )}
        <AddButton click={() => console.log('press the AddButton')} style='w-[15%] w-full' />
      </View>
    </View>
  );
}