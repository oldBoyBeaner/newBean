/**
 * Created by sunbiao on 2017/8/16.
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
    ImageBackground
} from 'react-native';
import screen from '../../common/screen';
import color from '../../widget/color';
import NavigationItem from '../../widget/NavigationItem';
import { Paragraph,Heading1,Heading2 } from '../../widget/Text';
export  default class BookVideorecItem extends  PureComponent{
    render(){
        let data = this.props.data;
        return(

                <TouchableOpacity style={styles.container} onPress={()=>this.props.onPress()}>
                    <ImageBackground source={{uri:data.target.cover_url}}
                           style={styles.img}>
                        <View style={{flexDirection:'row',marginLeft:5,marginBottom:5}}>
                            <View style={{padding:3,borderRadius:5,backgroundColor:'#fff'}}>
                             <Paragraph style={{color:'#000'}}>{data.theme.name}</Paragraph>
                            </View>
                            <View/>
                        </View>
                        <View style={styles.discri}>

                            <Heading2 style={{color:'#ffffff'}} numberOfLines={2}>{data.title}</Heading2>

                        </View>
                    </ImageBackground>
                </TouchableOpacity>

        )
    }
}
const styles = StyleSheet.create({

    recomment:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginHorizontal:10,
        height:50
    },
    scrollview:{
        paddingLeft:10,
    },
    container:{
        marginRight:10,

    },
    img:{
        width:screen.width/2.0,
        height:screen.width/2.0,
        justifyContent:'flex-end'
    },
    tip:{
        borderRadius:5,

    },
    discri:{

        backgroundColor:'rgba(0,0,0,0.8)',
        paddingHorizontal:10,
        paddingTop:10,
        paddingBottom:15
    }
})