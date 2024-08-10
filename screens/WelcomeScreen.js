import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, { useEffect } from 'react';
import ScreenWrapper from '../components/ScreenWrapper';
import {colors} from '../theme';
import {useNavigation} from '@react-navigation/native';
// import statusCodes along with GoogleSignin
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {GoogleAuthProvider, signInWithCredential} from 'firebase/auth';
import { auth } from '../config/firebase';
import FastImage from 'react-native-fast-image';


GoogleSignin.configure({
  webClientId:
    '525762256837-gp5ljnhlk835tqbic32o11s7ljotqr1c.apps.googleusercontent.com',
});

export default function WelcomeScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:'525762256837-gp5ljnhlk835tqbic32o11s7ljotqr1c.apps.googleusercontent.com',
    })
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {idToken} = await GoogleSignin.signIn();
      const googleCredentials = GoogleAuthProvider.credential(idToken);
      await signInWithCredential(auth,googleCredentials);
    } catch (error) {
      console.log("Got Erro",error.message)
      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.SIGN_IN_CANCELLED:
            // user cancelled the login flow
            break;
          case statusCodes.IN_PROGRESS:
            // operation (eg. sign in) already in progress
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            // play services not available or outdated
            break;
          default:
          // some other error happened
        }
      } else {
        // an error that's not related to google sign in occurred
      }
    }
  };
  return (
    <ScreenWrapper>
      <View className="h-full flex justify-around">
        <View className="flex-row justify-center mt-10">
          <Image
            source={require('../assets/images/welcome.gif')}
            className="h-96 w-96 shadow-xl"
          />
        </View>
        <View className="mx-5 mb-20">
          <Text
            className={`${colors.heading} text-center font-bold text-4xl mb-2`}>
            ExpenseLog
          </Text>
          <Text
            className={`${colors.heading} text-center font-ligth text-xl mb-10`}>
            Made with love by Alok Kumar Yadav
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignIn')}
            className="shadow p-3 rounded-full mb-7"
            style={{backgroundColor: colors.button}}>
            <Text
              className={`${colors.heading} text-center text-white font-bold text-lg `}>
              Sign In
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            className="shadow p-3 rounded-full mb-7"
            style={{backgroundColor: colors.button}}>
            <Text
              className={`${colors.heading} text-center text-white font-bold text-lg `}>
              Sign Up
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => signIn()}
            className="shadow p-3 rounded-full bg-white">
            <View className="flex-row justify-center items-centers space-x-3">
              <Image
                source={require('../assets/images/googleIcon.png')}
                className="h-7 w-7"
              />
              <Text
                className={`${colors.heading} text-center text-gray-600 font-bold text-lg `}>
                Sign In with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
}
