import React, { useState } from 'react'
import { Alert, Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import CustomButton from '@/components/CustomButton'
import FormField from '@/components/FormField'
import { login } from '@/lib/appwrite'
import { Link, router } from 'expo-router'
import { AppwriteException } from 'react-native-appwrite'
import logo from '../../assets/images/logo.png'

const Login = () => {

  const [form, setForm] = useState({
    email: '',
    password:''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitForm = async () => {
    if(!form.email || !form.password){
      Alert.alert("Error", "All fields are required!");
      return;
    }

    setIsSubmitting(true);

    try{
      const result = await login(form.email, form.password);
      console.log(result);
      Alert.alert("Success", "Login successfully");

      router.push('/home');
    }
    catch(error: unknown){
      if (error instanceof AppwriteException) {
            switch (error.code) {
                case 409: 
                    Alert.alert("Error", "An account with this email already exists.");
                    break;
                case 400: 
                    if (error.message.includes("Password must be at least")) {
                        Alert.alert("Error", "Password is too weak. Please use at least 8 characters.");
                    } else {
                        Alert.alert("Error", error.message);
                    }
                    break;
                default:
                    Alert.alert("Error", `An Appwrite error occurred: ${error.message}`);
                    break;
            }
        } else {
            // General fallback for non-Appwrite errors
            Alert.alert("Error", "Something went wrong. Please try again later.");
        }
    } finally {
        setIsSubmitting(false);
    }
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

          <Link href="/home" className='text-yellow-400 font-semibold'>Go to Home</Link>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login