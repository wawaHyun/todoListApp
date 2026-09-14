import { IMenu } from "@/domain/common.model";
import { Link, router } from "expo-router";
import { menuList } from "../data/menu";
import { View,Text, Pressable } from "react-native";

function HamMenu() {
    return (
        <View className="text-center">
        <View className=" bg-slate-100 grid grid-cols-1 grid-rows- text-center w-full cursor-pointer border border-gray-400 rounded-lg overflow-hidden">
          {menuList.map((elem: IMenu) => {
            return (
              <Pressable key={elem.id} onPress={()=>router.push(elem.href)} className="group p-3 text-black hover:bg-gray-500">
               <Text className="text-center group-hover:text-white">{elem.menu}</Text>
              </Pressable>
            );
          })}
        </View>
        </View>
    )
}

export default HamMenu;

