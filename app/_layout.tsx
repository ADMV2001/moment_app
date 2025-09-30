import GlobalProvider from '@/context/GlobalProvider';
import { Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import './globals.css';


SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration:400,
  fade: true,
});

export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    LatoRegular: Lato_400Regular,
    LatoBold: Lato_700Bold,
  });

  useEffect(()=>{
    if(fontsLoaded){
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if(!fontsLoaded){
    return null;
  }

  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </GlobalProvider>
  );
}
