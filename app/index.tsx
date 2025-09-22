import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import cover from '../assets/images/cover.png';
import logo from '../assets/images/logo.png';

export default function Index() {
  return (
    <SafeAreaView className="bg-black flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1}}>
        <View className="w-full h-full px-4 items-center">
          
          <Image 
            source={logo} 
            className="w-[240px] h-[240px] mt-10"
            resizeMode="contain"
          />
          <Image 
            source={cover} 
            className="w-[400px] h-[400px] mt-[-60px]"
            resizeMode="contain"
          />

          <Text className="text-white text-[30px] font-bold">Capture and Post</Text>
          <Text className="text-white text-[30px]  mb-2">Your Mini Moments</Text>
          <Text className="text-white text-[15px] text-center px-[20px]">A place to find the vibe within you, capture and share it, find whose vibe match to yours</Text>

          <TouchableOpacity className="w-[400px] items-center bg-orange-500 px-8 py-4 rounded-[15px] mt-14">
            <Text className="text-white font-bold text-xl">Continue with Email</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
