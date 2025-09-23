import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import hide from '../assets/icons/hide.png';
import view from '../assets/icons/view.png';

type FormFieldProps = {
    title: string;
    value: string;
    handleChangeText: (text: string) => void;
    otherStyles?: string;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad' | 'decimal-pad' | 'visible-password' | undefined;
}

const FormField = ({ title, value, handleChangeText, otherStyles, keyboardType }: FormFieldProps) => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 mx-2  ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-medium mb-2 ml-1 text-[16px]">{title}</Text>
      
      <View className="w-full h-16 bg-gray-800 px-4 py-3 rounded-[18px] border-[1px]  focus:border-yellow-400 relative">
        <TextInput 
            className="flex-1 text-white text-base justify-center items-center py-2"
            value={value}
            placeholder={title}
            placeholderTextColor="#7A7A73"
            onChangeText={handleChangeText}
            secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" &&(
            <TouchableOpacity onPress={()=> setShowPassword(!showPassword)}>
                <Image 
                    source={!showPassword ? hide : view}
                    className="w-6 h-6 absolute right-2 bottom-[5px] "
                    resizeMode="contain"
                />
            </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField;
