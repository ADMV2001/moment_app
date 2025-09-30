import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { StatusBar } from 'react-native';

const TabsLayout = () => {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="black" />
      <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { 
          backgroundColor: 'black',
          borderTopWidth: 0.5,
          borderTopColor: '',
          height: 75,
          paddingTop: 10, 
        },
        headerStyle: { backgroundColor: 'black' },
        headerTitleStyle: { color: '#fff', fontWeight: 'semibold' },
      }}
      >
        <Tabs.Screen 
          name="home" 
          options={{ headerShown: false, title: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color}/>
            ),
          }} 
        />

        <Tabs.Screen
          name="create"
          options={{ headerShown: false,title: 'Create',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="add-circle" size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="bookmark"
          options={{
            headerShown: false,
            title: 'Bookmark',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="bookmark" size={size} color={color} />
            ),
          }}
        />
      
        <Tabs.Screen 
          name="profile" 
          options={{ headerShown: false, title: 'Profile', tabBarLabel: 'Profile', tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color}/>
          )}} 
        />
      
      </Tabs>
    </>
  )
}

export default TabsLayout