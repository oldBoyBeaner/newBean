/**
 * Created by sunbiao on 2017/8/30.
 */
import React, { PureComponent } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TextInput,
    ScrollView,
    FlatList,
    SectionList,
    Button,
    Alert,
    TouchableOpacity,
    StatusBar,
    Platform
} from 'react-native';
import screen from '../../common/screen';
import color from '../../widget/color';
import NavigationItem from '../../widget/NavigationItem';
import { Paragraph,Heading1 } from '../../widget/Text';
import SpaceView from '../../widget/SpaceView';
import  Seprator from '../../widget/Separator';

import * as WeChat from 'react-native-wechat';
export default class LoginScene extends PureComponent{
    login(){
        storage.save({
            key: 'loginState',  // 注意:请不要在key中使用_下划线符号!
            data: {
                userid: '1001',
                userName:'userName',
                token: 'token'
            },

            // 如果不指定过期时间，则会使用defaultExpires参数
            // 如果设为null，则永不过期
            // 8个小时后过期
            expires: 1000 * 3600 * 8
        });
        global.user.loginState = true;//设置登录状态
        global.user.userData = { userid: '1001', userName:'userName', token: 'token'};//保存用户数据

        setTimeout(()=>{
            this.props.navigation.navigate('Tab')//跳转到用户页面
        },2000)
    }
    render(){
        return(
            <View>
                <Button title="登录" onPress={()=>this.login()}/>
            </View>
        );
    }
}