import LottieView from "lottie-react-native";

export function PetAnimation() {
  return <LottieView source={require('@/assets/Loadercat.json')} autoPlay loop style={{ width: 150, height: 150 }} />
}