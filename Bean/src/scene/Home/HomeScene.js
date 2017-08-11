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
    ListView,
    InteractionManager
} from 'react-native';
import screen from '../../common/screen';
import color from '../../widget/color';
import NavigationItem from '../../widget/NavigationItem';
import { Paragraph,Heading1 } from '../../widget/Text';
import api from '../../api';
import RefreshListView from '../../widget/RefreshListView';
import RefreshState from  '../../widget/RefreshState';
import SpaceView from '../../widget/SpaceView';

import HomeImageTextCell from './HomeImageTextCell';


export default class  HomeScene extends PureComponent{
    listView:ListView;
    // 构造
      constructor(props) {
        super(props);
        let ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !== r2});
        // 初始状态
        this.state = {
          dataSource:ds.cloneWithRows([]),

        };
    this.requestData= this.requestData.bind(this);
    this.renderRow = this.renderRow.bind(this);
      }
    static  navigationOptions =({navigation})=>({
        // headerTitle:(
        //     <TouchableOpacity style={styles.search}>
        //         <Image source={require('../../img/Home/search_icon.png')} style={styles.searchIcon}/>
        //
        //         <Paragraph>一点点</Paragraph>
        // </TouchableOpacity>),
        headerTitle:'首页',

        headerStyle:{backgroundColor:color.theme}

    })

    componentDidMount() {
        InteractionManager.runAfterInteractions(()=>{
            this.listView.startHeaderRefreshing();
        })
    }
    async requestData(){
          try {
              let response = await fetch(api.HomeAPi);
              let jsonData = await response.json();
              console.log(jsonData.date);
              this.listView && this.listView.endRefreshing(RefreshState.Idle);
              // console.log(jsonData.recommend_feeds);
              let dataSource = jsonData.recommend_feeds.map((feed, index) => {
                  console.log(feed);
                  return {
                      feed

                  }
              })
              this.setState({
                  dataSource: this.state.dataSource.cloneWithRows(dataSource)

              })
              console.log(this.state.dataSource);
          }catch (error){
              this.listView && this.listView.endRefreshing(RefreshState.Failure);
          }

    }
    renderRow(rowData:{}, sectionID:number, rowID:number){
        console.log(`rowid====${rowID}`);
        console.log(rowID);
       return( <HomeImageTextCell
            feed={rowData}
            index={rowID}
            onPress={(rowID)=>{
                alert(rowID);
                console.log(rowID)

            }}
        />
       )

    }
    render(){
        let dataSource = this.state.dataSource
        return (
            <View style={styles.container}>
                <RefreshListView
                        ref={(e)=>this.listView = e}
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow}
                        onHeaderRefresh={this.requestData}
                />
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