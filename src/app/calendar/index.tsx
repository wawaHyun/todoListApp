import { useRouter } from 'expo-router';
import { Calendar, DateData } from 'react-native-calendars';
import { View, Text, Pressable } from 'react-native';

export default function CalendarPage() {
  const router = useRouter();

  const handleDayPress = (day: DateData) => {
    router.push({ pathname: '/', params: { date: day.dateString } });
  };

  return (
    <View className="flex-1 bg-white">
      <View className="h-[10%] justify-center px-4 border-b border-gray-200">
        <Text className="text-3xl font-bold">Calendar</Text>
      </View>
      <View className="px-3 pt-4">
        <Calendar onDayPress={handleDayPress} />
      </View>
    </View>
  );
}