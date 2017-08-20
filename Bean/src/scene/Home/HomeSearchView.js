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
import { Paragraph,Heading1 } from '../../widget/Text';

import Button  from  '../../widget/NavigationItem';
import ModalDropdown from 'react-native-modal-dropdown';
import Seperator from '../../widget/Separator'
import HomeSearchItem from './HomeSearchItem';

export default class HomeSearchView extends PureComponent{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态

        this.state = {
                text:'',
            dataSource:[
                '侠盗联盟',
                '绝世高手',
                '心理罪',
                '目击者之追凶',
                '八卦来了',
                '七七的生活摄影课',
                '霍乱时期的爱情',
                '回到原典-细节里的中国美术史',
                '百年孤独',
                '15分钟的疯狂'
            ]
        };
        this.keyExtractor = this.keyExtractor.bind(this);
          this.renderRow= this.renderRow.bind(this);
          this.renderHeader = this.renderHeader.bind(this);
      }
    _navBar(){
          return(
              <View style={styles.navBar}>
                  <View style={styles.navBarLeft}>
                      <TouchableOpacity style={{marginLeft:5}}>
                          <ModalDropdown
                              options={['全部', '电影/电视','图书','唱片','用户','小组','群聊','游戏/应用','同城','舞台剧']}
                              defaultValue='全部'
                              dropdownStyle={styles.dropDown}
                          />
                      </TouchableOpacity>
                      <View style={{height:35,width:1, backgroundColor:'gray',marginHorizontal:5}}/>
                      <View style={{flex:1}}>
                          <TextInput
                              placeholder='搜索'
                              onChangeText={(text)=>
                                  this.setState({
                                      text:text
                                  })
                              }
                              value={this.state.text}
                          />
                      </View>
                  </View>
                  <View style={styles.navBarRight}>
                      <Button title='取消' onPress={()=>this.props.onPress()}/>
                  </View>
              </View>
          )
    }
    renderRow(item){
       return(
           <HomeSearchItem
                    item={item}
                    onPress={(index)=>{
                        alert(index)
                    }}
           />
       )
    }
    keyExtractor(item,index){
        return index;
    }
    renderHeader(){
        return(
            <View style={styles.header}>
                <Text style={{color:'white'}}>热门搜索</Text>

            </View>
        );

    }
    render(){
        return(
            <View style={styles.container}>
                {this._navBar()}
                <FlatList
                    data={this.state.dataSource}
                    renderItem={this.renderRow}
                    keyExtractor={this.keyExtractor}
                    ListHeaderComponent={this.renderHeader}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
       backgroundColor:'white',
        flex:1
    },
    navBar:{
        height:64,
        backgroundColor: color.theme,
        flexDirection:'row',
        alignItems:'center'
    },
    navBarLeft:{
        backgroundColor: 'white',
        flexDirection:'row',
        width:screen.width*0.8,
        height:35,
        borderRadius:5,
        marginTop:15,
        marginLeft:15,
        alignItems:'center'
    },
    navBarRight:{
        flex:1,
        marginTop:15,
        alignItems:'flex-end',
        marginRight:10
    },
    header:{
      height:40,
        backgroundColor:'#D1D1D1',
        justifyContent:'center',
        paddingLeft:15
    },
    dropDown:{
        width: 70,
        height: 300,
        borderColor: 'cornflowerblue',
        borderWidth: 2,
        borderRadius: 3,
    }

})