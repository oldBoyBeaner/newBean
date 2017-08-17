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
import ScrollableTabView,{DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';
import BookVideoList from './BookVideoList';
import api from '../../api';

export  default  class  BookVideoScene extends PureComponent{
    static  navigationOptions =({navigation})=>({
        headerTitle:'书影音',
        headerLeft:(
            <NavigationItem
                title='上海'
                titleStyle={{color:'white'}}
                onPress={()=>{

                }}
            />
        ),
        headerRight:(
            <View style={styles.headerRight}>
                 <NavigationItem icon={require('../../img/ic_search_17x17_.png')} onPress={()=>{
                     alert('search')
                 }} />
                <NavigationItem icon={require('../../img/ic_group_chat_13x13_.png')} onPress={()=>{
                    alert('chat')
                }}/>
            </View>
        ),
        headerStyle:{backgroundColor:'#ffffff'}

    })
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            topData:['电影','读书','电视','同城','音乐','市集'],
            dataSource:[],
        };
      }
    componentDidMount() {

    }
    render(){
        let modle = api.bookModel;
        return(
            <ScrollableTabView
                style={styles.container}
                tabBarBackgroundColor='white'
                tabBarActiveTextColor='#FE566D'
                tabBarInactiveTextColor='#555555'
                tabBarTextStyle={styles.tabBarText}
                tabBarUnderlineStyle={styles.tabBarUnderline}
                locked={true}
                renderTabBar={()=><DefaultTabBar/>}
            >
                {this.state.topData.map((title,i)=>(

                    <BookVideoList
                        tabLabel={title}
                        key={i}
                        modle={modle.modules}
                        navigation={this.props.navigation}
                    />

                ))}

            </ScrollableTabView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background
    },
    headerRight:{
        flexDirection:'row'
    },
    tabBarText: {
        fontSize: 14,
        marginTop: 13,
    },
    tabBarUnderline: {
        backgroundColor: '#FE566D'
    },
})