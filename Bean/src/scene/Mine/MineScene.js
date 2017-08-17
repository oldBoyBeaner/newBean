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
export  default  class  MineScene extends PureComponent{
    static  navigationOptions =({navigation})=>({
        headerTitle:'我的',
        headerLeft:(
            <NavigationItem
                title='上海'
                titleStyle={{color:'white'}}
                onPress={()=>{

                }}
            />
        ),

        headerStyle:{backgroundColor:color.theme}

    })
    render(){

        return(
            <View style={styles.container}>
                <TouchableOpacity style={{padding:5,borderRadius:5,backgroundColor:'red'}}>

                <Text>1234sdfsdfsfsdfadfasdfaf56</Text>
            </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection:'row',
        backgroundColor: 'orange'
    },
})