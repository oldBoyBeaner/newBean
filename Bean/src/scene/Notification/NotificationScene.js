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
export  default  class  NotificationScene extends PureComponent{
    static  navigationOptions =({navigation})=>({
        headerTitle:'广播',
        headerTitleStyle:{alignSelf:'center'},
        headerStyle:{backgroundColor:color.theme}
    })
    render(){

        return(
            <View style={styles.container}>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background
    },
    header:{
      alignSelf:'center'
    }
})
