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
} from 'react-native';
import screen from '../../common/screen';
import color from '../../widget/color';
import NavigationItem from '../../widget/NavigationItem';
import { Paragraph,Heading1 } from '../../widget/Text';
import SpaceView from '../../widget/SpaceView';
import  Seprator from '../../widget/Separator';
import MineItem from './MIneItem';

export  default  class  MineScene extends PureComponent{
    static  navigationOptions =({navigation})=>({
        headerTitle:'我的',
        headerLeft:(
            <NavigationItem
                title='上海'
                titleStyle={{color:'white'}}
                onPress={()=>{

                }}
            />
        ),

        headerStyle:{backgroundColor:'#fff'}

    })
    renderHeader(){
        return(
            <View style={styles.headerBg}>
                <View style={styles.left}>
                    <View style={styles.header}/>

                </View>

                <View style={styles.right}>
                    <View style={{flex:0.5}}/>
                    <View style={{flexDirection:'row',alignItems:'flex-end'}}>
                        <View >
                            <Heading1 style={{fontSize:20,marginBottom:5,color:'#fff'}}>名字</Heading1>
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