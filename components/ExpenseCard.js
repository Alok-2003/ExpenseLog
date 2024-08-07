import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { categoryBG, colors } from '../theme';

export default function ExpenseCard({item}) {
  return (
    <View style={{backgroundColor: categoryBG[item.category]}} className="flex-row justify-between items-center p-3 px-5 mb-3 rounded-2xl">
      <View>
        {/* <Image source={randomImage()} className="w-36 h-36" /> */}
        <Text className={`${colors.heading} font-bold`} >{item.title}</Text>
        <Text className={`${colors.heading} text-xs`} >{item.category}</Text>
      </View>
      <View>
        <Text className="">${item.amount}</Text>
      </View>
    </View>
  );
}
