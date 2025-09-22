import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

const TabsLayout = () => {
  return (
    <>
      <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { 
          backgroundColor: 'black',
          borderTopWidth: 1,
          borderTopColor: '#6200EE',
          height: 100,
          paddingTop: 10, 
        },
        headerStyle: { backgroundColor: '#6200EE' },
        headerTitleStyle: { color: '#fff', fontWeight: 'bold' },
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