import React, { useState } from 'react';
import { FlatList, Image, RefreshControl, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import logo from '@/assets/images/logo.png';
import EmptyState from '@/components/EmptyState';
import SearchInput from '@/components/SearchInput';
import Trending from '@/components/Trending';
import { getAllPosts } from '@/lib/appwrite';
import useAppwrite from '@/lib/useAppwrite';

type Post = {
  $id: string;
  title: string;
  // add other properties as needed
};

const Home = () => { 
  const { data: posts, refetch } = useAppwrite(getAllPosts);

  const [refreshing, setRefreshing] = useState(false);
  
  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  return (
    <SafeAreaView className="bg-black h-full">
      <FlatList<Post>
        data={posts}
        //data={[]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <Text className='text-white'>{item.title}</Text>
        )}

        ListHeaderComponent={()=>(
          <View className="my-6 px-4 space-y-4">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-semibold text-sm text-gray-300">Welcome Back</Text>
                <Text className="text-2xl font-semibold text-gray-500">User ABCD</Text>
              </View>

              <View>
                <Image
                  source={logo}
                  className="w-[150px] h-[50px]"
                  resizeMode= 'contain'
                />
              </View>
            </View>

            <SearchInput
              otherStyles="mt-8"
            />

            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-gray-200 text-xl font-semibold mb-3 ml-2">Latest Videos</Text>

              <Trending posts={[{id: '4'}, {id: '5'}, {id: '6'}]} />
            </View>

          </View>
        )}

        ListEmptyComponent={()=>(
          <EmptyState
            title="No Videos Found!"
            subtitle="Try different keywords or check back later."
          />
        )}

        refreshControl = {<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
        
    </SafeAreaView>
  )
}

export default Home