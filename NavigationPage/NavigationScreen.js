import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainPage from '../Screens/MainPage';
import ProfilePage from '../Screens/ProfilePage';
import VocablaryListPage from '../Screens/VocablaryListPage';
import WelcomePage from '../Screens/WelcomePage';
import LoginPage from '../Screens/LoginPage';
import SignUp from '../Screens/SignUp';
import Search from '../Images/Svg/search';
import List from '../Images/Svg/list';
import User from '../Images/Svg/user';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text } from 'react-native';
import SongLyric from '../Screens/SongLyric';

import { FIREBASE_AUTH } from '../authentication/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// BottomTabNavigtion Bölümü
const BottomTabNavigator = () => {
  return (
    <LinearGradient colors={['#e5b2cacc', '#cf86dc4d']} style={styles.linear}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
            opacity: 0.6,
            padding: 5,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
          tabBarHideOnKeyboard: true,
        }}
      >
        <Tab.Screen
          name='Anasayfa'
          component={MainPage}
          options={{
            tabBarLabel: ({ focused }) => (<Text style={{ color: focused ? "#E5B2CA" : "grey", fontSize: focused ? 14 : 10 }}>Home</Text>),
            tabBarIcon: ({ color, size, }) => <Search width={size} height={size} fill={color} />,
          }}
        />
        <Tab.Screen
          name='Liste'
          component={VocablaryListPage}
          options={{
            tabBarLabel: ({ focused }) => (<Text style={{ color: focused ? "#E5B2CA" : "grey", fontSize: focused ? 14 : 10 }}>Word List</Text>),
            tabBarIcon: ({ color, size }) => <List width={size} height={size} fill={color} />,
          }}
        />
        <Tab.Screen
          name='Profil'
          component={ProfilePage}
          options={{
            tabBarLabel: ({ focused }) => (<Text style={{ color: focused ? "#E5B2CA" : "grey", fontSize: focused ? 14 : 10 }}>Profile</Text>),
            tabBarIcon: ({ color, size }) => <User width={size} height={size} fill={color} />,
          }}
        />
      </Tab.Navigator>
    </LinearGradient>
  );
};

// Stack Navigation Bölümü
function NavigationScreen() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (auth) => {
      setUser(auth);
    });
  }, [user]);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Welcome'>
        <Stack.Screen name='Welcome' component={WelcomePage} />
        <Stack.Screen name='Login' component={LoginPage} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='Tabs' component={BottomTabNavigator} />
        <Stack.Screen name='SongLyric' component={SongLyric} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationScreen;

const styles = StyleSheet.create({
  linear: {
    flex: 1,
  },
});
