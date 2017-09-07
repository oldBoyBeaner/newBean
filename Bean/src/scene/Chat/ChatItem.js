import React, { PureComponent } from 'react'
import { View,Text,Image,Button,StyleSheet,TouchableHighlight } from 'react-native'
import screen from '../../common/screen';
import color from '../../widget/color';

export default class ChatItem extends PureComponent{
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }
  render(){
    return(
      <View style={styles.container}>
        <Image
        source={require('../../img/ic_sign_logo_48x48_.png')}
        style={styles.icon}
        />
        <View style={styles.info}>
          <Text style={styles.info_title}>豆瓣</Text>
          <Text>欢迎使用豆瓣</Text>
        </View>
        <View style={styles.tips}>
          <Text style={styles.tips_text}>14天前</Text>
          <Text style={styles.tips_weiget}>1</Text>
        </View>
      </View>
    )
  }
}
const styles =StyleSheet.create({
  container: {
      height:80,
      backgroundColor: color.navDefault,
      flexDirection:'row',
      marginTop:10,
      justifyContent:'space-around'
  },
  icon:{
    width:60,
    height:60,
    margin:10,
    borderRadius:30,
  },
  info:{
    flex:3,
    margin:10
  },
  info_title:{
    marginTop:5,
    fontSize:16,
    fontWeight:'bold'
  },
  tips:{
    flex:2,
    marginTop:10,
    marginRight:10,
  },
  tips_text:{
    alignSelf:'flex-end'
  },
  tips_weiget:{
    marginTop:10,
    width:20,
    height:20,
    borderRadius:10,
    textAlign:'center',
    textAlignVertical:'center',
    color:'white',
    alignSelf:'flex-end',
    backgroundColor:'red'
  }
})
