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
import api,{getWxAccess,getMineInfo} from '../../api';

export default class LoginScene extends PureComponent{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
          this.getWXInfo = this.getWXInfo.bind(this);
          this.getMineInfo = this.getMineInfo.bind(this);
      }
    static navigationOptions = (navigation)=>({
        header:null,
    })
    loginSuccess(response){
        storage.save({
            key: 'loginState',  // 注意:请不要在key中使用_下划线符号!
            data: response,

            // 如果不指定过期时间，则会使用defaultExpires参数
            // 如果设为null，则永不过期
            // 8个小时后过期
            expires: 1000 * 3600 * 8
        });
        global.user.loginState = true;//设置登录状态
        global.user.userData = response;//保存用户数据

        setTimeout(()=>{
            this.props.navigation.navigate('Tab')//跳转到用户页面
        },1000)
    }
    wxLogin(){
        let scope = 'snsapi_userinfo';
        let state = 'wechat_sdk_demo';
        //判断微信是否安装
        WeChat.isWXAppInstalled()
            .then((isInstalled) => {
                if (isInstalled) {
                    //发送授权请求
                    WeChat.sendAuthRequest(scope, state)
                        .then(responseCode => {
                            //返回code码，通过code获取access_token
                            // this.getAccessToken(responseCode.code);
                            console.log(responseCode.code)
                            this.getWXInfo(responseCode.code);
                        })
                        .catch(err => {
                            Alert.alert('登录授权发生错误：', err.message, [
                                {text: '确定'}
                            ]);
                        })
                } else {
                    Platform.OS == 'ios' ?
                        Alert.alert('没有安装微信', '是否安装微信？', [
                            {text: '取消'},
                            {text: '确定', onPress: () => this.installWechat()}
                        ]) :
                        Alert.alert('没有安装微信', '请先安装微信客户端在进行登录', [
                            {text: '确定'}
                        ])
                }
            })
    }
    async getWXInfo(code) {
        try {
            // 注意这里的await语句，其所在的函数必须有async关键字声明
            let response = await fetch(getWxAccess(code));
            let responseJson = await response.json();
            this.getMineInfo(responseJson.access_token,responseJson.openid)

        } catch(error) {
            console.error(error);
        }
    }
    async getMineInfo (token,openid){
        let response = await fetch(getMineInfo(token,openid));
        let responseJson = await response.json();

        this.loginSuccess(responseJson)
        console.log(this.state.userInfo);
    }
    render(){
        return(
            <View style={styles.container} >
                <TouchableOpacity onPress={()=>this.wxLogin()}>
                    <Image source={require('../../img/ic_wechat_login_21x21_.png')}/>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})