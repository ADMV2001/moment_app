import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

type CustomButtonProps={
  title :any,
  handlePress:any,
  textStyles?:any,
  isLoading?:boolean,
  otherStyles?:string
}

const customButton = ({ title, handlePress, textStyles, isLoading=false, otherStyles }: CustomButtonProps) => {
  return (
    <TouchableOpacity 
      className={"items-center bg-orange-500 px-8 py-4 rounded-[18px] mt-14 " +
        (isLoading ? 'opacity-50' : '') + (otherStyles ? ` ${otherStyles}` : '')}
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}
    >

      <Text className={"text-white font-semibold text-xl"}>{title}</Text>

    </TouchableOpacity>
  )
}

export default customButton