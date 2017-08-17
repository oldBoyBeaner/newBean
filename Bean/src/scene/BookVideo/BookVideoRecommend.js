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
} from 'react-native';
import screen from '../../common/screen';
import color from '../../widget/color';
import NavigationItem from '../../widget/NavigationItem';
import { Paragraph,Heading1 } from '../../widget/Text';
import BookVideorecItem from './BookVideorecItem'
export  default class BookVideoRecommend extends  PureComponent{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }

      render(){
          let title = this.props.title;
          let subTitle = this.props.subtitle;
          let datas = this.props.item;

          return(
              <View style={styles.container}>
                  <View style={styles.recomment}>
                      <Heading1>{title}</Heading1>
                      <Paragraph>{subTitle}</Paragraph>
                  </View>
                  <ScrollView style={styles.scrollview} horizontal={true}>
                      {datas.map((data,index)=>(
                          
                        <BookVideorecItem
                            data={data}
                            key={index}
                            onPress={()=>{
                                alert(index)
                            }}
                        />
                      ))}

                  </ScrollView>
              </View>
          )
      }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff'
    },
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
    img:{
        marginRight:10,

        width:screen.width/2.0,
        height:screen.width/2.0,
    }
})