import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  CompanyAdd  from '../HomeScreen/CompanyAdd'
import  ProductAdd from '../HomeScreen/ProductAdd'
import  ProductList1  from '../HomeScreen/ProductList1'
import  ProductList2  from '../HomeScreen/ProductList2'
import IconM from "react-native-vector-icons/MaterialIcons"



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



const HomeScreenTab = () => {
    return (
        <Tab.Navigator
            initialRouteName="ProductAdd"
            screenOptions={{ tabBarActiveTintColor: "tomato",
            }} >
            <Tab.Screen name="HomeScreenStack" component={HomeScreenStack}
                
                options={{ 
                    headerShown: false, 
                    tabBarLabel: "Listele", 
                    tabBarLabelStyle: { fontSize: 15 },
                    tabBarIcon: ({ color, size }) => (<IconM name="format-list-bulleted" color={color} size={30} />),
                }}
                
            />
            <Tab.Screen name="ProductAdd" component={ProductAdd} options={{
                tabBarLabelStyle: {fontSize: 15,},
                tabBarLabel: "Add",
                headerShown:true,
                headerTitleAlign:"center",
                tabBarIcon: ({ color, size }) => (<IconM name="playlist-add" color={color} size={30} />),


            }} />
            <Tab.Screen name="CompanyAdd" component={CompanyAdd} options={{
                tabBarLabelStyle: {fontSize: 15,},
                tabBarLabel: "Company Add & List",
                headerTitle:"Company Add & List",
                headerShown:false,
                headerTitleAlign:"center",
                headerStyle:{borderColor:"#f00"},
                tabBarIcon: ({ color, size }) => (<IconM name="computer" color={color} size={30} />),

            }} />
        </Tab.Navigator>
    )
}
const HomeScreenStack = () => {
    return (
        <Stack.Navigator initialRouteName="ProductList1" >
            <Stack.Screen name="ProductList1" component={ProductList1} options={{
                headerShown: false
            }}
            />
            <Stack.Screen name="ProductList2" component={ProductList2} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    )
}
const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreenTab" component={HomeScreenTab} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    )
}
export default HomeStack
