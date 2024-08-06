import {View, Text} from 'react-native';
import React from 'react';
import ScreenWrapper from './ScreenWrapper';
import BackButton from './BackButton';

export default function AddTripScreen() {
  return (
    <ScreenWrapper>
      <BackButton />
      <Text>AddTripScreen</Text>
    </ScreenWrapper>
  );
}
