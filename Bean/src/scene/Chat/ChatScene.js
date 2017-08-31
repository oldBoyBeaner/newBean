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
    StatusBar,
} from 'react-native';
import screen from '../../common/screen';
import color from '../../widget/color';
import NavigationItem from '../../widget/NavigationItem';
import { Paragraph,Heading1 } from '../../widget/Text';
import { StackNavigator } from 'react-navigation';
import  ChatItem from './ChatItem';

export  default  class  ChatScene extends PureComponent{
    constructor(props) {
      super(props);
      thats = this;
      this.state = {
      };
    }

    static  navigationOptions =({navigation})=>({
        headerTitle:'聊天',
        headerTitleStyle:{alignSelf:'center'},
        headerStyle:{backgroundColor:color.navDefault},
        headerLeft:(
            <NavigationItem
                icon={require('../../img/ic_arrow_back_24x24_.png')}
                onPress={()=>{
                  thats.props.navigation.goBack(null)
                }}
            />
        ),
        headerRight:(
            <NavigationItem
                icon={require('../../img/follow2_26x26_.png')}
                onPress={()=>{
                  thats.props.navigation.goBack(null)
                }}
            />
        ),
    })
    _keyExtractor = (item, index) => item.key;
    renderRow(rowData:{}, sectionID:number, rowID:number){
       return( <ChatItem
            item={rowData}
            index={rowID}
            key={rowData}
        />
       )
    }
    render(){
        return(
            <View style={styles.container}>
                <FlatList style={styles.content}
                        // ref={(e)=>this.listView = e}
                        data={[{key: 'a'}]}
                        renderItem={this.renderRow}
                        keyExtractor={this._keyExtractor}
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
    content:{
      marginTop:20
    }
})
