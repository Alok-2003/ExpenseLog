import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import AddTripScreen from '../components/AddTripScreen';
import AddExpenseScreen from '../components/AddExpenseScreen';
import TripExpensesScreen from '../screens/TripExpensesScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen options={{headerShown:false}} name="Home" component={HomeScreen} />
        <Stack.Screen options={{headerShown:false}} name="Login" component={LoginScreen} />
        <Stack.Screen options={{headerShown:false}} name="AddTrip" component={AddTripScreen} />
        <Stack.Screen options={{headerShown:false}} name="AddExpense" component={AddExpenseScreen} />
        <Stack.Screen options={{headerShown:false}} name="TripExpenses" component={TripExpensesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
