import * as React from 'react';
import { Home, Profile, Wishlist, Notification, AddProductForm, EditProductForm, Register, Login, SplashScreen } from './src/screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Heart, Home3, ProfileCircle } from 'iconsax-react-native';
import DetailProduct from './src/screens/detailProduct';

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const Bottom = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#674D7A', tabBarStyle: { paddingBottom: 10, paddingTop: 10, height: 60 } }}>
      <Tab.Screen options={{ headerShown: false, tabBarLabel: 'Home', tabBarIcon: ({ focused, color }) => (<Home3 variant={focused ? 'Bold' : 'Linear'} size={24} color={color} />) }} name='Home' component={Home} />
      <Tab.Screen options={{ headerShown: false, tabBarLabel: 'Wishlist', tabBarIcon: ({ focused, color }) => (<Heart variant={focused ? 'Bold' : 'Linear'} size={24} color={color} />) }} name='Wishlist' component={Wishlist} />
      <Tab.Screen options={{ headerShown: false, tabBarLabel: 'Profile', tabBarIcon: ({ focused, color }) => (<ProfileCircle variant={focused ? 'Bold' : 'Linear'} size={24} color={color} />) }} name='Profile' component={Profile} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SplashScreen'>
        <Stack.Screen options={{ headerShown: false }} name='Bottom' component={Bottom} />
        <Stack.Screen options={{ headerShown: false }} name='Notification' component={Notification} />
        <Stack.Screen options={{ headerShown: false }} name='AddProduct' component={AddProductForm}/>
        <Stack.Screen options={{ headerShown: false }} name='DetailProduct' component={DetailProduct}/>
        <Stack.Screen options={{ headerShown: false }} name='editProduct' component={EditProductForm}/>
        <Stack.Screen options={{ headerShown: false }} name='Register' component={Register}/>
        <Stack.Screen options={{ headerShown: false }} name='Login' component={Login}/>
        <Stack.Screen options={{ headerShown: false }} name='SplashScreen' component={SplashScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};