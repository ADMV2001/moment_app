import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-primary font-sans text-[28px] font-bold">
        Moments
      </Text>
      <Link href="/profile" style={{ color: "blue"  }}>Go to Profile</Link>
    </View>
  );
}
