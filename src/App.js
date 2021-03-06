/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useState, useEffect } from 'react';
import { StatusBar, useColorScheme, View, } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer, DefaultTheme, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { firebase } from '../firebase';


import RegisterScreen from './screens/RegisterScreen';
import ChatAreaScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginPage from './screens/LoginPage';

import { Provider, useSelector } from 'react-redux';
import ChatDetailScreen from './screens/ChatDetailScreen';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import { LogBox } from 'react-native';
import ChatHistoryScreen from './screens/ChatHistoryScreen';
import AppointmentScreen from './screens/AppointmentScreen';
import AskDoctorScreen from './screens/AskDoctorScreen';
import DoctorNotesScreen from './screens/DoctorNotesScreen';
import AppointmentDetailScreen from './screens/AppointmentDetailScreen';
import { MMKV } from 'react-native-mmkv';
import DoctorDetailScreen from './screens/DoctorDetailScreen';
import DoctorNotesQuesioner from './screens/DoctorNotesQuesioner';
import EditProfileScreen from './screens/EditProfileScreen';
import SplashScreen from 'react-native-splash-screen';
import FileScreen from './screens/FileScreen';


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    background: 'white'
  },
};

const App = () =>
{
  useEffect(() =>
  {
    SplashScreen.hide()
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])


  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


  const globalState = useSelector(state => state)
  const AuthStack = createStackNavigator();
  const Tab = createMaterialBottomTabNavigator();
  const GuardedStack = createStackNavigator();

  const AuthStackScreen = () =>
  {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
        <AuthStack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
      </AuthStack.Navigator>
    )
  }

  const GuardedScreen = () =>
  {

    return (
      <GuardedStack.Navigator>
        <GuardedStack.Screen name="HomeTab" component={TabScreen} options={{ headerShown: false, title: "" }} />
        <GuardedStack.Screen name="AppointmentScreen" component={AppointmentScreen} options={{ title: 'Buat Janji' }} />
        <GuardedStack.Screen name="AppointmentDetail" component={AppointmentDetailScreen} options={({ route }) => ({ title: route.params.name })} />

        <GuardedStack.Screen name="AskDoctorScreen" component={AskDoctorScreen} options={({ route }) => ({ title: 'Pertanyaan' })} />

        <GuardedStack.Screen name="DoctorNotesScreen" component={DoctorNotesScreen} options={({ route }) => ({ title: 'Quesioner' })} />
        <GuardedStack.Screen name="DoctorNotesQuesionerScreen" component={DoctorNotesQuesioner} options={({ route }) => ({ title: 'Quesioner' })} />

        <GuardedStack.Screen name="ChatScreen" component={HomeScreen} options={{ headerShown: false }} />
        <GuardedStack.Screen name="ChatDetail" component={ChatDetailScreen} options={({ route }) => ({ title: route.params.name })} />
        <GuardedStack.Screen name="DoctorDetailScreen" component={DoctorDetailScreen} options={{ title: "Profil Dokter", headerTitleAlign: 'center' }} h />

        <GuardedStack.Screen name="FileScreen" component={FileScreen} options={{ title: "Materi" }} />

        <GuardedStack.Screen name="EditProfileScreen" component={EditProfileScreen} options={{ title: "Edit Profile" }} />
        {/* <GuardedStack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} /> */}
      </GuardedStack.Navigator>
    )
  }


  const TabScreen = ({ navigation }) =>
  {
    return (
      <Tab.Navigator
        activeColor="tomato"
        inactiveColor="grey"

        barStyle={{
          backgroundColor: '#ffffff',
          padding: 5,
          elevation: 24, shadowRadius: 5, shadowOpacity: 0.4, shadowOffset: { width: 2, height: -1 }, shadowColor: 'black'
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size = 22 }) =>
          {
            let iconName;

            if (route.name === 'HomeScreen') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'ProfileScreen') {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            } else if (route.name === 'ChatScreen') {
              iconName = focused ? 'chatbubbles' : 'chatbubbles-outline'
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}>
        {MMKV.getNumber('type') == 1 ? <Tab.Screen name="HomeScreen" component={HomeScreen} options={{ tabBarLabel: 'Home' }} /> : null}
        {/* {<Tab.Screen name="HomeScreen" component={HomeScreen} options={{ tabBarLabel: 'Home' }} />} */}
        <Tab.Screen name="ChatScreen" component={ChatHistoryScreen} options={{ headerShown: true, tabBarLabel: 'Chats' }} />
        <Tab.Screen name="ProfileScreen" component={ProfileScreen} options={{ tabBarLabel: 'Profile' }} />

      </Tab.Navigator>

    )
  }

  return (
    <NavigationContainer theme={MyTheme}>
      {globalState.reducers.isLogin ? <GuardedScreen /> : <AuthStackScreen />}

      {/* <Tab.Navigator>
        <Tab.Screen name="Login" component={LoginPage} />
        <Tab.Screen name="Register" component={RegisterScreen} />
      </Tab.Navigator>
        <Button onPress={tes} title="tes" />  */}
    </NavigationContainer>
  );
};

export default App;
