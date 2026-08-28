
import { Text } from "expo-router/build/react-navigation";
import { TabButton } from "../atoms/button";
import { MainMenus, SalesMenus, UsersMenus } from "../data/menu";
import { Pressable, View } from "react-native";

function Sidebar() {

    const mainMenus = MainMenus
    const salesMenus = SalesMenus
    const usersMenus = UsersMenus

    return (
        // <View className={`h-full flex flex-col bg-slate-200`}>

        //     <View className={` h-full`}>
        //         <View className="flex flex-col items-center py-3">
        //             <View className="text-black"><Pressable onPress={()=>'/'}><Text> HOME</Text></Pressable></View>
        //             <View></View>
        //             <View className="text-center  text-xs hover:text-blue-500">
        //                <Text> Viewfe is simple.  </Text> 
        //             </View>
        //         </View>



        //         <View className="h-full mx-2">
        //             <View className="w-full">
        //                 <TabButton style="text-black w-full h-[40px] " click={() => 1} >공동판매 관리</TabButton>
        //                 <View className="mb-3 p-2 scroll-smooth overflow-y-auto scroll-hidden rounded-b-lg border border-t-0">{salesMenus.map((v, i) => (<View key={v.id} className="p-2"><Pressable onPress={()=>v.href}>{v.title}</Pressable></View>))}</View>
        //             </View>
        //             <View className="w-full">
        //                 <TabButton style="text-black w-full h-[40px] " click={() => 0} >상품 관리</TabButton>
        //                 <View className="mb-3 p-2 scroll-smooth overflow-y-auto scroll-hidden rounded-b-lg border border-t-0">{mainMenus.map((v, i) => (<View key={v.id} className="p-2"><Pressable onPress={()=>v.href}>{v.title}</Pressable></View>))} </View>
        //             </View>
        //             <View className="w-full">
        //                 <TabButton style="text-black w-full h-[40px] " click={() => 1} >고객 관리</TabButton>
        //                 <View className="mb-3 p-2 scroll-smooth overflow-y-auto scroll-hidden rounded-b-lg border border-t-0">{usersMenus.map((v, i) => (<View key={v.id} className="p-2"><Pressable onPress={()=>v.href}>{v.title}</Pressable></View>))}</View>
        //             </View>
        //         </View>

        //         <View className="h-full">
        //         </View>
        //     </View>
        // </View >
        <View>
            <Text>menu!</Text>
        </View>
    )
}

export default Sidebar;