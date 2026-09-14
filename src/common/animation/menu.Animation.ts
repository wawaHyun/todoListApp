import { useAnimatedStyle, withTiming } from 'react-native-reanimated';

export const useMenuAnimation = (open: boolean) => {
  return useAnimatedStyle(() => ({
    opacity: withTiming(open ? 1 : 0, {
      duration: 1000,
    }),
    transform: [
      {
        translateY: withTiming(open ? 0 : -10, {
          duration: 1000,
        }),
      },
    ],
  }));
};