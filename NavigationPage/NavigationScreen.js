import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainPage from '../Screens/MainPage';
import ProfilePage from '../Screens/ProfilePage'
import VocablaryListPage from '../Screens/VocablaryListPage'
import WelcomePage from '../Screens/WelcomePage';
import LoginPage from '../Screens/LoginPage';
import SignUp from '../Screens/SignUp';




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// BottomTabNavigtion Bölümü
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Anasayfa" component={MainPage} />
      <Tab.Screen name="Liste" component={VocablaryListPage} />
      <Tab.Screen name="Profil" component={ProfilePage} />
    </Tab.Navigator>
  );
};

// Stack Navigation Bölümü
function NavigationScreen() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='Welcome'>
            <Stack.Screen name='Welcome' component={WelcomePage}/>
            <Stack.Screen name='Login' component={LoginPage}/>
            <Stack.Screen name='SignUp' component={SignUp}/>
            <Stack.Screen name="Tabs" component={BottomTabNavigator} />
            </Stack.Navigator>
            
        </NavigationContainer>
    );
}


export default NavigationScreen;