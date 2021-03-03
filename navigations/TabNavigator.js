import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeedScreen from "../screens/Feed";
import NewPostScreen from "../screens/NewPost";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            labeled={false}
            barStyle={styles.bottomTabStyle}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Feed') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === 'New Post') {
                        iconName = focused ? 'add-circle' : 'add-circle-outline';
                    }
                    return <Ionicons name={iconName} size={30} color={color} style={{ width: 30 }} />;
                },
            })}
            activeColor={'black'}
            inactiveColor={'gray'}
        >
            <Tab.Screen name="Feed" component={FeedScreen} />
            <Tab.Screen name="New Post" component={NewPostScreen} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    bottomTabStyle: {
        backgroundColor: "white",
        height: "8%",
        overflow: 'hidden',
        position: 'absolute'
    }
});

export default BottomTabNavigator