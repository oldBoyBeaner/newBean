/**
 * Created by sunbiao on 2017/8/11.
 */
import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Heading1, Heading2, Paragraph } from '../../widget/Text'
import screen from '../../common/screen';
import  color  from '../../widget/color';
import Seperator from '../../widget/Separator';
import SpaceView from '../../widget/SpaceView';
export default class HomeRecommendItem extends PureComponent{

    render(){
        let index = this.props.index;
        return(
            <TouchableOpacity style={styles.container} onPress={()=>this.props.onPress(index)}>
                <Image source={this.props.icon} style={styles.img}/>
                <Heading2>{this.props.title}</Heading2>
            </TouchableOpacity>
        );
    }
}
const styles =StyleSheet.create({
    container:{
        backgroundColor:'white',
        width:screen.width/4,
        height:screen.width/4,
        justifyContent:'center',
        alignItems:'center',
    },
    img:{
        width:screen.width/7,
        height:screen.width/7,
        margin:5,
    }
})