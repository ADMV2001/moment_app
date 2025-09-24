import React, { useState } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import CustomButton from '@/components/CustomButton'
import FormField from '@/components/FormField'
import { Link } from 'expo-router'
import logo from '../../assets/images/logo.png'

const Login = () => {

  const [form, setForm] = useState({
    email: '',
    password:''
  })

  const submitForm = () => {
    {/* Handle the submission logic here */}
  }

  return (
    <SafeAreaView className="bg-black flex-1 h-full">
      <ScrollView>
        <View className="w-full justify-center px-4 pt-4">

          <Image 
            source={logo} 
            className="w-[300px] h-[150px] justify-center mx-auto mt-[90px]"
            resizeMode="contain"
          />

          <Text className="text-white text-[25px] font-bold mx-2 mt-10 mb-4">Login Page</Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e:string)=> setForm({...form, email: e})}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e:string)=> setForm({...form, password: e})}
            otherStyles="mt-7"
            keyboardType="default"
          />

          <View className="flex-row justify-end mx-2 mt-2">
            <CustomButton 
            title="Login"
            handlePress={submitForm}
            otherStyles='flex-1 justify-center items-center mt-8 mb-4'
          />
          </View>

          <View>
            <Text className="text-gray-300 text-center text-[16px]">Don&apos;t have an account?  <Link href="/signup" className="text-yellow-400 font-semibold">Sign Up</Link></Text>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login