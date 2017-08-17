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
} from 'react-native';
import screen from '../../common/screen';
import color from '../../widget/color';
import RefreshListView from '../../widget/RefreshListView';
import NavigationItem from '../../widget/NavigationItem';
import { Paragraph,Heading1 } from '../../widget/Text';
import  notificationItem from './notificationItem';
export  default  class  NotificationScene extends PureComponent{
  listView:ListView;
  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({
      rowHasChanged:(r1,r2)=>r1 !== r2
    });
    this.state = {
      dataSource:ds.cloneWithRows([]),
        array:['1','2']
    };
    this.renderRow = this.renderRow.bind(this);
    this._renderHeader = this._renderHeader.bind(this);
  }


    static  navigationOptions =({navigation})=>({
        headerTitle:'广播',
        headerTitleStyle:{alignSelf:'center'},
        headerStyle:{backgroundColor:color.navDefault},
        headerRight:[
          <Image
            source={require('../../img/ic_invite_buddy_24x24_.png')}
            style={styles.nav_item_right1}
            key='user'
          />,
          <Image
            source={require('../../img/ic_navibar_chat_24x24_.png')}
            style={styles.nav_item_right2}
            key='msg'
          />
        ]
        // ic_navibar_chat_24x24_@1x.png
    })
    renderRow(rowData:{}, sectionID:number, rowID:number){
      alert(rowID)
       return( <notificationItem
            feed='fds'
            index='1'
        />
       )
    }
    _renderHeader(){
        return(
            <Image
            source={require('../../img/group.jpeg')}
            style={styles.empty_img}
            />
          )
        }
    render(){
        return(
            <View >
              <RefreshListView
                      ref={(e)=>this.listView = e}
                      dataSource={this.state.dataSource}
                      renderRow={this.renderRow}
                      renderHeader={this._renderHeader}
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
      marginVertical:-2,
      marginRight:100
    },
    nav_item_right2:{
      marginTop:-22,
      marginLeft:40
    },
    empty_img:{
      resizeMode:'stretch',
      width:screen.width,
      height:150
    }
})
