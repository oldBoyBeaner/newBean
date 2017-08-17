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

        headerStyle:{backgroundColor:color.theme}

    })
    render(){

        return(
            <View style={styles.container}>
                <ScrollView style={{flex:0.8}}
                            onScrollBeginDrag={()=>{
                                alert('start');
                            }}
                            // onMomentumScrollEnd={()=>{
                            //     alert('end')
                            // }}
                            // onScroll={()=>{
                            //     alert('change')
                            // }}
                >
                <TouchableOpacity style={{padding:5,borderRadius:5,backgroundColor:'red'}}>

                <Text>1234sdfsdfsfsdfadfasdfaf56</Text>
                <Image source={require('../../img/ic_album_cover_65x65_.png')}/>
              </TouchableOpacity>
                    <TouchableOpacity style={{padding:5,borderRadius:5,backgroundColor:'red'}}>

                        <Text>1234sdfsdfsfsdfadfasdfaf56</Text>
                        <Image source={require('../../img/ic_album_cover_65x65_.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding:5,borderRadius:5,backgroundColor:'red'}}>

                        <Text>1234sdfsdfsfsdfadfasdfaf56</Text>
                        <Image source={require('../../img/ic_album_cover_65x65_.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding:5,borderRadius:5,backgroundColor:'red'}}>

                        <Text>1234sdfsdfsfsdfadfasdfaf56</Text>
                        <Image source={require('../../img/ic_album_cover_65x65_.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding:5,borderRadius:5,backgroundColor:'red'}}>

                        <Text>1234sdfsdfsfsdfadfasdfaf56</Text>
                        <Image source={require('../../img/ic_album_cover_65x65_.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{padding:5,borderRadius:5,backgroundColor:'red'}}>

                        <Text>1234sdfsdfsfsdfadfasdfaf56</Text>
                        <Image source={require('../../img/ic_album_cover_65x65_.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{padding:5,borderRadius:5,backgroundColor:'red'}}>

                        <Text>1234sdfsdfsfsdfadfasdfaf56</Text>
                        <Image source={require('../../img/ic_album_cover_65x65_.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{padding:5,borderRadius:5,backgroundColor:'red'}}>

                        <Text>1234sdfsdfsfsdfadfasdfaf56</Text>
                        <Image source={require('../../img/ic_album_cover_65x65_.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{padding:5,borderRadius:5,backgroundColor:'red'}}>

                        <Text>1234sdfsdfsfsdfadfasdfaf56</Text>
                        <Image source={require('../../img/ic_album_cover_65x65_.png')}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={{padding:5,borderRadius:5,backgroundColor:'red'}}>

                        <Text>1234sdfsdfsfsdfadfasdfaf56</Text>
                        <Image source={require('../../img/ic_album_cover_65x65_.png')}/>
                    </TouchableOpacity>

                </ScrollView>
                <View style={{flex:0.2,backgroundColor:'#FFFF65'}}>
                    <Text>底部按钮</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection:'row',
        backgroundColor: 'orange'
    },
})