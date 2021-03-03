import React, { Component } from 'react';
import { Text, View,Image,StyleSheet,SafeAreaView,Platform,StatusBar,Scrol } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar } from 'react-native-elements';


export default class FeedCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        let feed = this.props.feed
        console.log(feed)
        return (
            <View style={styles.mainContainer}>
                <SafeAreaView style={styles.droidSafeArea}/>             
                <View style={{margin:5,flexDirection:'row',}}>
                <Avatar
                    rounded
                    size="medium"
                    title="NT"
                    source={require('../assets/post1.jpg')}
                    />
                    <Text style={{margin:8,}}>{this.props.feed.user_name}</Text>
                    {/* <Ionicons name="ellipsis-vertical-outline" size={25} style={{alignItems:'flex-end'}}/> */}
                 </View>

                 <View style={{flex:0.75}}>
                    <Image source={require('../assets/post1.jpg')} style={{width:'100%',height:'100%',margin:1, resizeMode: 'stretch',}}></Image>
                 </View>

                 <View style={{flexDirection:'row',margin:2,}}>
                 <Ionicons name="heart-outline" size={30} style={{margin:2}}/>
                 <Ionicons name="chatbubble-outline" size={29} style={{margin:2}}/>
                 <Ionicons name="paper-plane-outline" size={30} style={{margin:2}}/>
                    {/* <View style={{alignItems:'flex-end'}}>
                 <Ionicons name="paper-plane-outline" size={30} style={{margin:2,alignItems:'flex-end',}}/>
                    </View> */}
                 </View>

                 <View style={{flexDirection:'row'}}>
                 <Avatar
                    rounded
                    size="small"
                    title="NT"
                    source={{
                        uri:
                        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                    }}
                    />
                    <Text style={{margin:5}}>Liked by /*one_man*/ and Others </Text>
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