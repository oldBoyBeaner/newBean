/**
 * Created by sunbiao on 2017/7/24.
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
import api from '../../api';

import SpaceView from '../../widget/SpaceView';


export default class  HomeScene extends PureComponent{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            discounts:[],
            dataList: [],
            refreshing: false,
        };

      }
    static  navigationOptions =({navigation})=>({
        // headerTitle:(
        //     <TouchableOpacity style={styles.search}>
        //         <Image source={require('../../img/Home/search_icon.png')} style={styles.searchIcon}/>
        //
        //         <Paragraph>一点点</Paragraph>
        // </TouchableOpacity>),
        headerTitle:'首页',
        headerLeft:(
            <NavigationItem
                title='上海'
                titleStyle={{color:'white'}}
                onPress={()=>{

                }}
            />
        ),

        headerStyle:{backgroundColor:color.theme}

    })

    render(){

        return (
            <View style={styles.container}>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:color.background
    },
    recommendHeader: {
        height: 35,
        justifyContent: 'center',
        borderWidth: screen.onePixel,
        borderColor: color.border,
        // paddingVertical: 8,
        paddingLeft: 20,
        backgroundColor: 'white'
    },
    search:{
        width:screen.width*0.7,
        height:30,
        borderRadius:15,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        alignSelf:'center',

    },
    searchIcon:{
        width:20,
        height:20,
        margin:5,
    },

})