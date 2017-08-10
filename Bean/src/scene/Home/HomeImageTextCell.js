/**
 * Created by sunbiao on 2017/8/10.
 */
import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Heading1, Heading2, Paragraph } from '../../widget/Text'
import screen from '../../common/screen';
import  color  from '../../widget/color';
import Seperator from '../../widget/Separator';
import SpaceView from '../../widget/SpaceView';
export default class HomeImageTextCell extends  PureComponent{

    render(){
        let feed = this.props.feed.feed;

        return(
            <TouchableOpacity style={styles.container}>
                <View style={styles.upContainer}>
                    <View style={styles.upLeftContainer}>
                        <Heading1 numberOfLines={2} style={{marginBottom:8}}>{feed.title}</Heading1>
                        <Paragraph numberOfLines={2}>{feed.target.desc}</Paragraph>
                    </View>
                    <View style={styles.upRightContainer}>
                        <Image source={{uri:feed.target.cover_url}} style={styles.image}/>
                    </View>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.bottomLeft}>
                    <Image source={{uri:feed.target.author.avatar}} style={styles.avatar}/>
                    <Heading2>{feed.target.author.name}</Heading2>
                    </View>
                    <TouchableOpacity style={{marginRight:15}}>
                        <Paragraph>...</Paragraph>
                    </TouchableOpacity>
                </View>
                <SpaceView/>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({

    container:{

        backgroundColor:'white'
    },
    upContainer:{
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    upLeftContainer:{
        flex:0.8,
        
    },
    upRightContainer:{
         flex:0.2,
        alignItems:'flex-end'
    },
    bottom:{
       flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:10
    },
    bottomLeft:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',

    },
    image:{
        width:60,
        height:60,
        marginHorizontal:15
    },
    avatar:{
        width:30,
        height:30,
        borderRadius:15,
        marginHorizontal:10,

    }
})