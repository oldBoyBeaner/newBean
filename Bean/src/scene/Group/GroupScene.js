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
    Button,
    SectionList,
    Alert,
    Header,
    TouchableOpacity,
    TouchableHighlight,
    StatusBar,
} from 'react-native';
import screen from '../../common/screen';
import color from '../../widget/color';
import NavigationItem from '../../widget/NavigationItem';
import { Paragraph,Heading1 } from '../../widget/Text';
import  ChatItem from '../Chat/ChatItem';
import data from './TJGroup.json';

export  default  class  GroupScene extends PureComponent{
    constructor(props) {
      super(props);
      this.state = {
        dataSource:data
      };
      this.renderRow = this.renderRow.bind(this );
      this._renderHeader = this._renderHeader.bind(this);
      that = this;
    }
    static  navigationOptions =({navigation})=>({
        headerTitle:'小组',
        headerTitleStyle:{alignSelf:'center'},
        headerStyle:{backgroundColor:color.navDefault},
        headerRight:[
          <TouchableHighlight
          key='search'
          underlayColor="white"
          style={styles.nav_item_right1}
          onPress={()=>that._onPressSearch()}>
              <Image
                source={require('../../img/ic_search_navbar_24x24_.png')}
                style={styles.nav_item}
                key='user'
              />
          </TouchableHighlight>,
          <TouchableHighlight
          key='chat'
          underlayColor="white"
          style={styles.nav_item_right2}
          onPress={()=>that._onPressChat()}>
              <Image
                source={require('../../img/ic_navibar_chat_24x24_.png')}
                style={styles.nav_item}
                key='msg'
              />
          </TouchableHighlight>
        ]
    })
    _renderHeader(){
        return(
            <Image
            source={require('../../img/GroupEmpty.jpeg')}
            style={styles.empty_img}
            />
          )
        }
    _sectionHeader({section}){
      // alert(section.title)
        return(
            <View style={styles.section_head}>
              <View></View>
              <Text>{section.title}</Text>
              <View></View>
            </View>
          )
        }
    _keyExtractor = (item, index) => item.key;
    renderRow(rowData:{}, sectionID:number, rowID:number){
       return( <ChatItem
            item={rowData}
            index={rowID}
            // key={rowID}
        />
       )
    }
    render(){
        return(
            <View style={styles.container}>
            <SectionList
                ListHeaderComponent={this._renderHeader}
                renderItem={this.renderRow}
                renderSectionHeader={this._sectionHeader}
                keyExtractor={(item)=>item.id}
                sections={[
                  {data:this.state.dataSource[0].groups,title:this.state.dataSource[0].name,id:this.state.dataSource[0].id}

                ]}
            />

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background
    },
    nav_item_right1:{
      marginVertical:-5,
      marginRight:100,
      width:30,
      height:30,
    },
    nav_item_right2:{
      marginTop:-24,
      marginLeft:30,
      width:30,
      height:30,
    },
    nav_item:{
      width:30,
      height:30,
    },
    empty_img:{
      marginTop:1,
      resizeMode:'stretch',
      width:screen.width,
      height:screen.width * 0.7125,
    },
    section_head:{
      height:20,
      backgroundColor:'white'
    }
})
