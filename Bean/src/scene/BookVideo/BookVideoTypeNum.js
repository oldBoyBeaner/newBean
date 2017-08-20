/**
 * Created by sunbiao on 2017/8/17.
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
export  default class BookVideoTypeNum extends  PureComponent{
    render(){
        let title = this.props.title;
        let subTitle = this.props.subtitle;
        return(
            <View style={styles.recomment}>
                <Heading1>{title}</Heading1>
                <Paragraph> {`全部${subTitle} >`}</Paragraph>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    recomment:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginHorizontal:10,
        height:50
    },

})