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
    constructor(props) {
      super(props);
      // 初始状态
      this.state = {};
    }
    imageDefault(images){
        if(images.length>0){
          switch (images.length) {
            case 2:
                return (
                  <View style={styles.content_ontainer}>
                  <Image
                    source={{uri: images[0].normal.url}}
                    style={styles.content_image2}
                    resizeMode='stretch'
                    resizeMethod='scale'
                  />
                  <Image
                    source={{uri: images[1].normal.url}}
                    style={styles.content_image2}
                    resizeMode='stretch'
                    resizeMethod='scale'
                  />
                  </View>
                )
                break;
            default:
              return (
                <View style={styles.content_ontainer}>
                <Image
                  source={{uri: images[0].normal.url}}
                  style={styles.content_image1}
                  resizeMode='stretch'
                  resizeMethod='scale'
                />
                </View>
              )
          }
        }
    }
    render(){
      let feed = this.props.item.item;
        return(
          <View style={styles.container}>
            <View style={styles.author}>
              <Image
                source={{uri: feed.author.avatar}}
                style={styles.author_img}
              />
              <View style={styles.author_info}>
                <Text style={styles.author_infoText_title}>{feed.author.name}</Text>
                <Text style={styles.author_infoText}>{feed.author.followers_count}人关注</Text>
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
              <Text >{feed.text}</Text>
            </View>
            {this.imageDefault(feed.images)}
            <View style={styles.user}>
              <Image
                source={require('../../img/ic_liked_20x20_.png')}
              />
              <Text style={styles.user_num}>{feed.like_count}</Text>
              <Image
                source={require('../../img/ic_comment_0_20x20_.png')}
                style={styles.user_comment}
              />
              <Text style={styles.user_num}>{feed.comments_count}</Text>
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
    },
    author_info:{
        width:screen.width-240,
    },
    author_close:{
        marginLeft:-5,
        marginTop:-5,
    },
    author_btn:{
        justifyContent:"flex-end",
        height:30,
        width:100,
        textAlign:"center",
        textAlignVertical:"center",
        marginTop:25,
        marginRight:5,
        color:"white",
        backgroundColor:"green",
        textShadowRadius:5,
        borderRadius:5,
    },
    author_infoText_title:{
        marginTop:10,
        fontSize:20,
        fontWeight: '900',
    },
    author_infoText:{
        marginTop:10,
        fontWeight: '700',
    },
    content:{
        backgroundColor:'white',
        marginLeft:90,
        marginRight:20,
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
    },
    content_ontainer:{
        marginLeft:90,
        flexDirection:'row',
    },
    content_image1:{
        width:screen.width-140,
        height:(screen.width-130)*0.75,
    },
    content_image2:{
        width:(screen.width-140)/2,
        height:(screen.width-130)*0.75,
        margin:1
    },
})
