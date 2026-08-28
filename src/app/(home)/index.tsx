import { AddButton, ModifyButton } from "@/common/atoms/button";
import { Checkbox } from "@/common/atoms/checkBox";
import { groupDummy, routineDummy } from "@/common/data/routine.dummy";
import { IGgroup } from "@/domain/common.model";
import { IRoutine } from "@/domain/routine.model";
import { View, Text } from "react-native";


export default function HomePage() {

  const routineList = routineDummy;
  const groupList = groupDummy;

  return (
    <View className="flex-1 grid-rows-2 ">
      <View className="h-[10%] justify-center bg-slate-200"><Text className="text-3xl">2026. 08. 19 (수)</Text></View>

      <View className="min-h-[50%] ">
        <Text className="text-3xl bg-slate-400">✅ My routine group</Text>
        <View className="h-px my-2 w-full " />

        {groupList.map((v: IGgroup, i: number) => {
          return (
            <View key={v.id}>
              <View className="flex-row">
                <Text className="text-xl font-bold pr-5">{v.name}</Text>
                <AddButton click={() => console.log('press the AddButton')} style='w-[15%]' />
              </View>

              {routineList?.filter((vv) => vv.ggroupId === v.id)
                .map((vv) => (
                  <View key={vv.id} className="flex-row">
                    <Checkbox key={vv.id} checked={true} onChange={() => console.log(`${vv.name} Checkbox pressed`)} title={vv.name + ''}/>
                  </View>
                ))}
              <View className="h-px my-3 w-full bg-gray-300" />
            </View>
          );
        })}
      </View>

      <View className="min-h-[10%] ">
        <Text className="text-3xl">📋To-Do List</Text>
        <View className="h-px my-2 w-full " />
        {routineList && routineList.map((vv: IRoutine, i: number) =>
          <View key={vv.id} className="flex-row min-h-3 border border-slate-700">
            <Checkbox key={vv.id} checked={true} onChange={() => console.log(`${vv.name} Checkbox pressed`)} title={vv.name + ''}/>
          </View>
        )}
        <AddButton click={() => console.log('press the AddButton')} style='w-[15%]' />
      </View>
    </View>
  );
}