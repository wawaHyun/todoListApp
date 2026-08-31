import { AddButton, ModifyButton } from "@/common/atoms/button";
import { Checkbox } from "@/common/atoms/checkBox";
import { groupDummy, recordDummy, routineDummy } from "@/common/data/routine.dummy";
import { IGgroup, IRecord } from "@/domain/common.model";
import { IRoutine } from "@/domain/routine.model";
import { View, Text } from "react-native";


export default function HomePage() {

  const routineList = routineDummy;
  const recordList = recordDummy;
  const groupList = groupDummy;

  const today = '2026-08-31';
  const todayRecords = recordList.filter(
    record => record.date === today);

  return (
    <View className="flex-1 grid-rows-2 ">
      <View className="h-[10%] justify-center bg-slate-200"><Text className="text-3xl">{today}</Text></View>

      <View className="min-h-[50%] ">
        <Text className="text-3xl bg-slate-400">✅ My routine group</Text>
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
                    <Checkbox checked={record.status ?? false} onChange={() => console.log(`${routine?.name} Checkbox pressed`)} 
                    title={routine?.name ?? ''} style="`${}`" />
                  </View>
                );
              })}

              <View className="h-px my-3 w-full bg-gray-300" />

            </View>
          );
        })}

      </View>

      <View className="min-h-[10%] ">
        <Text className="text-3xl">📋To-Do List</Text>
        <View className="h-px my-2 w-full " />
        {routineList && routineList.map((vv: IRoutine, i: number) =>
          <View key={vv.id} className="flex-row min-h-3 ">
            <Checkbox key={vv.id} checked={true} onChange={() => console.log(`${vv.name} Checkbox pressed`)} title={vv.name + ''} />
          </View>
        )}
        <AddButton click={() => console.log('press the AddButton')} style='w-[15%] w-full' />
      </View>
    </View>
  );
}