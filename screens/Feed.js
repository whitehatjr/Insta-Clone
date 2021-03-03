import React, { Component } from 'react';
import { Text, View,Image,StyleSheet,SafeAreaView,Platform,StatusBar,renderItem } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-elements';

import FeedCard from './FeedCard'
import { FlatList } from "react-native-gesture-handler";



// let Feed = require("./temp_feed.json");
import * as Feed from './temp_feed.json' 


renderItem = ({item:feed}) => {
   return <FeedCard feed={feed} navigation={this.props.navigation}/>

};

keyExtractor = (item, index) => index.toString();


export default class FeedScreen extends Component {


    
    render() {
        console.log(Feed)
        return (
            
            <View style={styles.mainContainer}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <View style={styles.logoContainer} >
                    <Ionicons name="camera-outline" size ={30}/>
                    <Image source={require('../assets/instagramlogo.png')} style={{width:100,height:30}}></Image>
                    <Ionicons name="paper-plane-outline" size={30}/>
                </View>               
                <View>
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={Feed}
                    // renderItem={this.renderItem}
                    renderItem = {()=>(<View>     
                    </View>)}

                />
                </View>    
            </View>
        )
    }
}


const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    logoContainer:{
        flexDirection:'row', 
        justifyContent:'space-between',
        borderBottomWidth:1,
        margin:4
    }

})