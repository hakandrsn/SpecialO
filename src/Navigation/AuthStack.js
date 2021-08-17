import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LoginScreen from '../AuthScreen/LoginScreen'



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const AuthScreen = () => {
    return (
<Stack.Navigator>
    <Stack.Screen name="Login" component={LoginScreen} options={{
        headerShown:false
    }} />
</Stack.Navigator>
    )
};

export default AuthScreen
