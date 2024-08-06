import { View, Text, StatusBar, Platform } from 'react-native'
import React from 'react'

export default function ScreenWrapper({children}) {
    let statusBarHeight = Platform.OS === 'ios' ? (StatusBar.currentHeight ? StatusBar.currentHeight : 45) : 0;
  return (
    <View style={{paddingTop:statusBarHeight}} >
     {children}
    </View>
  )
}