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
    ListView,
    StatusBar,
    Modal,
    TouchableHighlight
} from 'react-native';
import screen from '../../common/screen';
import color from '../../widget/color';
import data from './tuijian.json';
import RefreshListView from '../../widget/RefreshListView';
import NavigationItem from '../../widget/NavigationItem';
import { Paragraph,Heading1 } from '../../widget/Text';
import NotificationItem from './NotificationItem';
import HomeSearchView from'../Home/HomeSearchView';
import ChatScene from '../Chat/ChatScene';


export  default  class  NotificationScene extends PureComponent{
    listView:ListView;
    constructor(props) {
      super(props);
      this.state = {
        dataSource:data,
        searchShow:false,
      };
      this.renderRow = this.renderRow.bind(this );
      this._renderHeader = this._renderHeader.bind(this);
      that = this;
    }
    _onPressSearch(){
      this.setState({
          searchShow:true
      })
    }
    _onPressChat(){
      this.props.navigation.navigate('Chat')
    }
    static  navigationOptions =({navigation})=>({
        headerTitle:'广播',
        headerTitleStyle:{alignSelf:'center'},
        headerStyle:{backgroundColor:color.navDefault},
        headerRight:[
          <TouchableHighlight
          key='search'
          underlayColor="white"
          style={styles.nav_item_right1}
          onPress={()=>that._onPressSearch()}>
              <Image
                source={require('../../img/ic_invite_buddy_24x24_.png')}
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
      _keyExtractor = (item, index) => item.id;
      renderRow(rowData:{}, sectionID:number, rowID:number){
         return( <NotificationItem
              item={rowData}
              index={rowID}
              key={rowID}
          />
         )
      }
      _renderHeader(){
          return(
              <Image
              source={require('../../img/Notice.jpeg')}
              style={styles.empty_img}
              />
            )
          }
      render(){
          return(
              <View >
                <FlatList
                        // ref={(e)=>this.listView = e}
                        data={this.state.dataSource}
                        renderItem={this.renderRow}
                        keyExtractor={this._keyExtractor}
                        ListHeaderComponent={this._renderHeader}
                />
                <Modal
                    animationType='none'
                    visible={this.state.searchShow}
                    transparent={false}
                >
                    <HomeSearchView
                        onPress={()=>{
                            this.setState({
                                searchShow:false
                            })
                        }}
                    />
                </Modal>
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
      resizeMode:'stretch',
      width:screen.width,
      height:150,
    }
})
