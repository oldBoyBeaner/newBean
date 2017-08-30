/**
 * Created by sunbiao on 2017/8/10.
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
import MineItem from './MIneItem';
import api,{getWxAccess,getMineInfo} from '../../api';
import * as WeChat from 'react-native-wechat';
let that;
export  default  class  MineScene extends PureComponent{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            userInfo:{}
        };
        this.getWXInfo = this.getWXInfo.bind(this);
        this.getMineInfo = this.getMineInfo.bind(this);
        that=this;
      }
    static  navigationOptions =({navigation})=>({
        headerTitle:'我的',
        headerLeft:(
            <NavigationItem
                title='上海'
                titleStyle={{color:'#000'}}
                onPress={()=>{

                }}
            />
        ),
        headerRight:(
            <NavigationItem
                title='微信登录'
                onPress={()=>that.wxLoad()}
            />
        )
        ,

        headerStyle:{backgroundColor:'#fff'}

    })
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
    this.setState({
        userInfo:responseJson
    })
      console.log(this.state.userInfo);
    }
    wxLoad(){
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
                            alert(responseCode.code);
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
    renderHeader(){

        return(
            <View style={styles.headerBg}>
                <View style={styles.left}>
                    <View>
                        <Image source={{uri:this.state.userInfo.headimgurl}} style={{ width:70,
                            height:70,
                            borderWidth:2, borderRadius:35,}}/>
                    </View>

                </View>

                <View style={styles.right}>
                    <View style={{flex:0.5}}/>
                    <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                        <View >
                            <Heading1 style={{fontSize:20,marginBottom:5,color:'#fff'}}>{this.state.userInfo.nickname}</Heading1>
                            <Heading1 style={{color:'#fff'}}>ID:165134565</Heading1>
                        </View>
                        <View style={{flex:1,alignItems:'flex-end',marginRight:20}}>
                            <Heading1 style={{color:'#fff'}}>个人主页></Heading1>
                        </View>
                    </View>
                    <View style={{marginTop:8,height:1,backgroundColor:'#fff'}}/>
                    <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                        <Heading1 style={{color:'#fff',marginRight:15}}>关注 0</Heading1>
                        <Heading1 style={{color:'#fff'}}>被关注 0</Heading1>
                    </View>
                </View>
            </View>
        );
    }
    tip(){
        return(
           <View style={styles.tip}>
               <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>

                   <View style={ {
                       marginLeft:20,
                       marginVertical:10,
                       flexDirection:'row',
                       justifyContent:'center',
                       alignItems:'center',}}>
                       <Image source={require('../../img/ic_mine_notifications_24x24_.png')}/>
                       <Heading1 style={{marginLeft:8}}>提醒</Heading1>
                   </View>
                   <View style={{marginRight:20}}>
                    <Image source={require('../../img/ic_arrow_15x15_.png')}/>
                   </View>
               </View>
                <View style={{height:screen.onePixel,backgroundColor:color.border,marginLeft:20}}/>
               <View style={{ alignItems:'center',paddingTop:10,paddingBottom:20}}>
                   <Paragraph>暂无新提醒</Paragraph>
               </View>
           </View>
        );
    }
    renderItem(){
        let array =['喜欢','日记','相册','我的广播','电影电视','读书','音乐','同城活动','豆瓣时间','豆列','订单','钱包'];

        return(
            <View style={{flexDirection:'row',flexWrap:'wrap',flex:1,justifyContent:'space-around'}}>
                {array.map((item,i)=>(
                    <MineItem
                        icon={require('../../img/ic_tab_group_32x32_.png')}
                        title={item}
                        key={i}
                        index={i}
                        onPress={(i)=>{
                            alert(i)
                        }}
                    />
                ))}
            </View>
        );
    }
    render(){

        return(
            <View style={styles.container}>
                <ScrollView >
                    {this.renderHeader()}
                    <SpaceView/>
                    {this.tip()}
                    <SpaceView/>
                    {this.renderItem()}
                </ScrollView>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection:'row',
        backgroundColor: '#fff'
    },
    headerBg:{
        backgroundColor:color.theme,
        height:120,
       flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    left:{

        justifyContent:'center',
        alignItems:'center',
        marginTop:-10,
        marginHorizontal:20

    },
    header:{
        width:70,
        height:70,
        borderWidth:2,
        borderColor:'#fff',
        borderRadius:35,
        backgroundColor:'#ffef2c'
    },
    right:{
        flex:1,
        marginTop:-10,


    },
    tip:{
        backgroundColor:'#fff',
        // paddingLeft:20,
    }
})