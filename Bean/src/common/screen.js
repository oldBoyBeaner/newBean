/**
 * Created by sunbiao on 2017/7/27.
 */
import React,{Component} from 'react';
import {Dimensions, Platform, PixelRatio} from 'react-native';
export default {
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    onePixel:1/PixelRatio.get(),
    statusBarHeight:(Platform.OS === 'ios'? 20:0)
}