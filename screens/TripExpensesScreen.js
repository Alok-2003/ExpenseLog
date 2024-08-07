import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import {colors} from '../theme';
import randomImage from '../assets/images/randomImage';
import EmptyList from '../components/EmptyList';
import {useNavigation} from '@react-navigation/native';
import BackButton from '../components/BackButton';
import ExpenseCard from '../components/ExpenseCard';

var items = [
  {id: 1, title: 'Ate sandwitch', amount: 4, category: 'food'},
  {id: 2, title: 'Bought a jacket', amount: 50, category: 'shopping'},
  {id: 3, title: 'Watched a movie', amount: 100, category: 'entertainment'},
];

export default function TripExpensesScreen(props) {
//   console.log('props', props);
  const {id,place,country}=props.route.params;
  const navigation = useNavigation();
  return (
    <ScreenWrapper className="flex-1">
      <View className="px-4">
        <View className="relative mt-5">
          <View className="absolute top-2 left-0">
            <BackButton />
          </View>
          <View>
            <Text
              className={`${colors.heading} text-xl font-bold text-center  `}>
              {' '}
              {place}
            </Text>
            <Text className={`${colors.heading} text-xs text-center  `}>
              {' '}
              {country}
            </Text>
          </View>
        </View>

        <View className="flex-row justify-center items-center rounded-xl  mb-4">
          <Image
            source={require('../assets/images/7.png')}
            className="w-80 h-80"></Image>
        </View>

        <View className=" space-y-3">
          <View className="flex-row justify-between items-center mb-4">
            <Text className={`${colors.heading} font-bold text-xl`}>
              Expenses
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('AddExpense')}
              className="p-2 px-3 bg-white border border-gray-700 rounded-full">
              <Text className={colors.heading}>Add Expense</Text>
            </TouchableOpacity>
          </View>
          <View style={{height: 430}}>
            <FlatList
              data={items}
              ListEmptyComponent={
                <EmptyList message={"You haven't recorded any expenses yet"} />
              }
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              className="mx-1 "
              renderItem={({item}) => {
                return <ExpenseCard item={item} />;
              }}
            />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}
