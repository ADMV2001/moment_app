import { useRouter } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "@/components/CustomButton";
import cover from '../assets/images/cover.png';
import logo from '../assets/images/logo.png';

import 'react-native-url-polyfill/auto';

export default function Index() {

  const router = useRouter();

  return (
    <SafeAreaView className="bg-black flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1}}>
        <View className="w-full px-8 items-center">
          
          <Image 
            source={logo} 
            className="w-[260px] h-[260px] mt-10"
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

          <CustomButton
            title="Continue with Email"
            handlePress={()=> router.push('/login')}
            textStyles={undefined}
            isLoading={false}
            otherStyles="w-full mt-8 mb-10"
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}