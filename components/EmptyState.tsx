import React from 'react';
import { Image, Text, View } from 'react-native';

import notfound from '@/assets/images/notfound.png';
import { router } from 'expo-router';
import CustomButton from './CustomButton';

type EmptyStateProps={
  title?: string,
  subtitle?: string
}

const EmptyState = ({ title, subtitle }: EmptyStateProps) => {
  return (
    <View className="justify-center items-center px-4 mt-2">
      <Image 
        source={notfound}
        className="w-[300px] h-[200px] mb-6"
        resizeMode='contain'
      />
      <Text className="text-white text-center">{title}</Text>
      <Text className="text-gray-500 text-center mt-2">{subtitle}</Text>

      <CustomButton 
        title="Create a Moment Now!"
        handlePress={()=> router.push('/create')} 
        otherStyles="font-semibold w-[280px] mt-[25px]"
      />
    </View>
  )
}

export default EmptyState