import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './_views/Splash_view';
import WelcomeScreen from './_views/Welcome_view';
import SignInScreen from './_views/SignIn_view';
import SignUpScreen from './_views/SignUp_view';
import HomeScreen from './_views/Home_view';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor='#fff'
      // barStyle="dark-content"
      />
      <Stack.Navigator initialRouteName='splash'>
        <Stack.Screen
          name="splash"
          component={SplashScreen}
          options={{
            headerShown: false,
            statusBarHidden: false,
          }}
        />
        <Stack.Screen
          name="welcome"
          component={WelcomeScreen}
          options={{
            headerShown: false
          }} />

        <Stack.Screen
          name="signIn"
          component={SignInScreen}
          options={{
            headerShown: false
          }} />
        <Stack.Screen
          name="signUp"
          component={SignUpScreen}
          options={{
            headerShown: false
          }} />
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{
            headerShown: false
          }} />
      </Stack.Navigator>
    </NavigationContainer >
  );
};

export default App;