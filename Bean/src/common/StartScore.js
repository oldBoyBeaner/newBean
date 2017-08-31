/**
 * Created by QQ756312633 on 2017/5/12.
 * http://blog.csdn.net/yeputi1015/article/
 */
'use strict'

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    WebView,
    Alert,
    ListView,
    ScrollView,
    InteractionManager,
    TextInput,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';

var {width, height} = Dimensions.get('window');

export default class StarScore extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            totalScore: 5, // 总分值
            currentScore: 3, // 分值
        };
    }

    componentDidMount() {
        this.setState({
            currentScore:this.props.currentScore
        })
    }
    render() {
        return (
            <View style={[{flexDirection: 'row', width: width, height: 20},this.props.style ]}>
                {this._renderBody()}
            </View>
        );
    }

    _renderBody() {
        let images = [];
        for (var i = 1; i <= this.state.totalScore; i++) {
            let currentCount = i;
            images.push(
                <View key={"i" + i}>
                    <TouchableOpacity onPress={(i) => {this._score(currentCount)}}>
                        <Image source={require('../img/ic_rate_medium_empty_15x15_.png')}
                               style={{width: 10, height: 10}}/>
                        {this._renderYellowStart(i)}
                    </TouchableOpacity>
                </View>
            );
        }
        return images;
    }

    _renderYellowStart(count) {
        if (count <= this.state.currentScore) {
            return (
                <Image source={require('../img/ic_rate_medium_full_15x15_.png')}
                       style={{width: 10, height: 10, position: 'absolute'}}/>
            );
        }
    }

    _score(i) {
        //只显示的时候可以注释、、//需要打分的时候要打开
        // this.setState({
        //     currentScore: i
        // });
        this.props.selectIndex(i);
    }

}