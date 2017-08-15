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
    Alert,
    TouchableOpacity,
    StatusBar,
    ListView,
    Modal,
    InteractionManager,
    Platform
} from 'react-native';
import screen from '../../common/screen';
import color from '../../widget/color';
import NavigationItem from '../../widget/NavigationItem';
import { Paragraph,Heading1 } from '../../widget/Text';
import api from '../../api';
import RefreshListView from '../../widget/RefreshListView';
import RefreshState from  '../../widget/RefreshState';
import SpaceView from '../../widget/SpaceView';
import Button  from  '../../widget/NavigationItem';
import  HomeRecommendItem from './HomeRecommendItem';

import HomeImageTextCell from './HomeImageTextCell';
import DefaultQR from '../../widget/DefaultScreen';
import ImagePicker from 'react-native-image-picker';

let that ;

var photoOptions ={
    title:'请选择',
    cancelButtonTitle:'取消',
    takePhotoButtonTitle:'拍照',
    chooseFromLibraryButtonTitle:'选择相册',
    quality:0.75,
    allowsEditing:true,
    noData:false,
    storageOption:{
        skipBackup:true,
        path:'images'
    }
}
export default class  HomeScene extends PureComponent{
    listView:ListView;
    // 构造
      constructor(props) {
        super(props);
        let ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !== r2});
        // 初始状态
        this.state = {
          dataSource:ds.cloneWithRows([]),
            array:[],
            modal:false,
        };
          this.requestData= this.requestData.bind(this);
          this.renderRow = this.renderRow.bind(this);
          this._renderHeader = this._renderHeader.bind(this);

          that = this;
      }
   scanAction(){
        this.setState({
            modal:true
        })

    // this.props.navigation.navigate('QRView');
           return(
               <Modal
                   visible={true}
                  animationType='slide'
                   transparent={false}
                 >
                   {DefaultQR}
               </Modal>
           )
   }
    static  navigationOptions =({navigation})=>({
        headerTitle:(
            <TouchableOpacity style={styles.search} >
                <Image source={require('../../img/ic_search_17x17_.png')} style={{marginLeft:10}}/>
                <Paragraph>影视 图书 唱片 小组等</Paragraph>
                <TouchableOpacity style={styles.scan} onPress={()=>that.scanAction()}>
                    <Image source={require('../../img/scan_17x17_.png')} style={{width:17,height:17}}/>
                </TouchableOpacity>

        </TouchableOpacity>),
        headerLeft:null,
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
              this.listView && this.listView.endRefreshing(RefreshState.NoMoreData);
              // console.log(jsonData.recommend_feeds);
              let dataSource = jsonData.recommend_feeds.map((feed, index) => {
                  console.log(feed);
                  return {
                      feed

                  }
              })
              let  array = jsonData.recommend_feeds.map((feed, index) => {
                  console.log(feed);
                  return {
                      feed

                  }
              })
              this.setState({
                  dataSource: this.state.dataSource.cloneWithRows(dataSource),
                array:array,
              })
              console.log(this.state.dataSource);
          }catch (error){
              this.listView && this.listView.endRefreshing(RefreshState.Failure);
          }

    }
    renderRow(rowData:{}, sectionID:number, rowID:number){
        console.log(`rowid====${rowID}`);
        console.log(rowData.feed);
        let url = rowData.feed.target.uri;
       return( <HomeImageTextCell
            feed={rowData}
            index={rowID}
            onPress={(rowID)=>{

               this.props.navigation.navigate('Web',{url:url})

            }}
        />
       )

    }
    _renderHeader(){
        let array = this.state.array;
        if (array.length<=0){
            return;
        }
        let data = array[array.length-1];
        let url =data.feed.target.uri;
        let remArray=['豆瓣时间','市集','豆瓣书店','豆瓣视频']
        return(
            <View>
                <View style={styles.hotContainer}>
                  <Image source={require('../../img/ic_hot_20x20_.png')}/>
                  <Paragraph>今日热点</Paragraph>
                </View>
                <View>
                    <HomeImageTextCell
                            feed={data}
                            index={0}
                            onPress={(i)=>{

                                this.props.navigation.navigate('Web',{url:url})
                            }}
                    />
                </View>

                <View style={{flexDirection:'row',flexWrap:'wrap',flex:1,justifyContent:'space-around'}}>
                {remArray.map((item,i)=>(
                    <HomeRecommendItem
                        icon={require('../../img/ic_tab_group_32x32_.png')}
                        title={item}
                        key={i}
                        index={i}
                        onPress={(i)=>{
                           alert(i)
                        }}
                    />
                ))}
                </View>
                <SpaceView/>
            </View>
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
                        onFooterRefresh={this.requestData}
                        renderHeader={this._renderHeader}
                />
                <Modal
                    visible={this.state.modal}
                    animationType='slide'
                    transparent={false}
                >
                   <DefaultQR onPress={()=>{
                       this.setState({
                           modal:false
                       })
                   }}
                              photo={()=>{
                       ImagePicker.showImagePicker(photoOptions,(response)=>{
                           this.setState({
                               modal:false
                           })
                            console.log('response'+response);
                            if (response.didCancel){
                                return;
                            }else if (response.error){
                                console.log(response.error)
                            }else {
                                let source ;
                                let  file;
                                if (Platform.OS === 'android'){
                                    source={uri:response.uri,isStatic:true}
                                    file = response.uri;
                                }else {
                                    source={uri:response.uri.replace('file://',''),isStatic:true}
                                file=response.uri.replace('file://','')
                                }
                            }
                       })
                   }}
                              result={(e)=>{
                                  this.setState({
                                      modal:false
                                  })
                                  // Alert.alert(e.data)
                                console.log(e.data)
                                 setTimeout(()=>{
                                      alert('扫描结果'+e.data)
                                 },1000)
                              }}
                   />
                </Modal>
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
        width:screen.width*0.85,
        height:30,
        borderRadius:5,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#abd7d7',
        alignSelf:'center',
        marginLeft:-20,
    },
    searchIcon:{
        width:20,
        height:20,
        margin:5,
    },
    hotContainer:{
        flex:1,
        flexDirection:'row',
        alignItems: 'center',
        padding:10,
        paddingBottom:0,
        backgroundColor:'white'
    },
    scan:{
        flex:1,
        alignItems:'flex-end',
        marginRight:10
    }
})