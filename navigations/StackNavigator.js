import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import ProfileScreen from "../screens/Profile";

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Home" component={TabNavigator} />
            <Stack.Screen name="Profile Screen" component={ProfileScreen} />
        </Stack.Navigator>
    );
};

export default StackNavigator;