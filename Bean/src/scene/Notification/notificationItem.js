/**
 * Created by sunbiao on 2017/8/11.
 */
import React, { PureComponent } from 'react'
import { View,Text,Image,Button,StyleSheet,TouchableHighlight } from 'react-native'
import screen from '../../common/screen';

export default class NotificationItem extends PureComponent{
    _onPressButton(){
      alert("test")
    }
    render(){
        return(
          <View style={styles.container}>
            <View style={styles.author}>
              <Image
                source={require('../../img/ic_navibar_chat_24x24_.png')}
                style={styles.author_img}
              />
              <View style={styles.author_info}>
                <Text style={styles.author_infoText}>昵称</Text>
                <Text style={styles.author_infoText}>429人关注</Text>
              </View>
              <TouchableHighlight>
                <Text style={styles.author_btn} onPress={this._onPressButton}>关注</Text>
              </TouchableHighlight>
              <Image
                source={require('../../img/guide_close_30x30_.png')}
                style={styles.author_close}
              />
            </View >
            <View style={styles.content}>
              <Text >今年是爱丁堡艺术节其实周年，BBC音乐回顾了影月结的历史，并</Text>
            </View>
            <View style={styles.user}>
              <Image
                source={require('../../img/ic_liked_20x20_.png')}
              />
              <Text style={styles.user_num}>23</Text>
              <Image
                source={require('../../img/ic_comment_0_20x20_.png')}
                style={styles.user_comment}
              />
              <Text style={styles.user_num}>54</Text>
            </View>
          </View>
        );
    }
}
const styles =StyleSheet.create({
    container:{
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        borderRadius:5,
        backgroundColor:'white',
        //以下是阴影属性：
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 1,
        shadowRadius: 5,
        shadowColor: 'black',
        //注意：这一句是可以让安卓拥有灰色阴影
        elevation: 4,
        zIndex: 1
    },
    author:{
        backgroundColor:'white',
        marginLeft:10,
        marginTop:10,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        width:screen.width-20,
        flexDirection:'row',
    },
    author_img:{
        width:60,
        height:60,
        margin:10,
        borderRadius:40,
        overlayColor:'black',
    },
    author_info:{
        width:140,
    },
    author_close:{
        marginRight:5,
    },
    author_btn:{
      justifyContent:"flex-end",
        height:40,
        width:120,
        textAlign:"center",
        textAlignVertical:"center",
        marginTop:20,
        marginRight:5,
        color:"white",
        backgroundColor:"green",
        textShadowRadius:5,
        borderRadius:5,
    },
    author_infoText:{
        marginTop:10,
        fontWeight: '700',
    },
    content:{
        backgroundColor:'white',
        marginLeft:90,
        marginRight:10,
        marginTop:0,
        marginBottom:10,
    },
    user:{
        marginLeft:90,
        marginRight:10,
        marginTop:0,
        marginBottom:10,
        flexDirection:'row',
    },
    user_comment:{
        marginLeft:15,
    },
    user_num:{
        marginLeft:5,
    }
})
