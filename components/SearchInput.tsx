import React from 'react';
import { Image, TextInput, TouchableOpacity, View } from 'react-native';

import search from '@/assets/icons/search.png';

type SearchInputProps = {
  title?: string;
  value?: string;
  handleChangeText?: (text: string) => void;
  otherStyles?: string;
};

const SearchInput = ({ title, value, handleChangeText, otherStyles }: SearchInputProps) => {
  return (
    <View
      className={`w-full h-16 bg-gray-800 px-4 rounded-[18px] border border-gray-700 flex-row items-center ${otherStyles}`}
    >
      <TextInput
        className="flex-1 text-white text-base"
        value={value}
        placeholder="Search"
        placeholderTextColor="#7A7A73"
        onChangeText={handleChangeText}
      />

      <TouchableOpacity>
        <Image
          source={search}
          className="w-[27px] h-[27px] mr-1 "
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
