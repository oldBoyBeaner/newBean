/**
 * Created by sunbiao on 2017/7/28.
 */
import React, { PureComponent } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import color from './color'
import screen from '../common/screen';

export default class SpaceView extends PureComponent{
    render(){
        return(
            <View style={styles.container}></View>
        );
    }
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:color.background,
        height:15,
        width:screen.width
    }
})