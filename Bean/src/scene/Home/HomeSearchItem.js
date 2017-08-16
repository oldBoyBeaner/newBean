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
export default class HomeSearchItem extends PureComponent{

    render() {
    let item = this.props.item;
    let row = item.index+1;
        if (row < 4) {
            return (
                <TouchableOpacity onPress={()=>this.props.onPress(row)}>
                    <View style={{flexDirection: 'row', alignItems: 'center', margin: 10}}>
                        <Image source={require('../../img/ic_alert_red_19x19_.png')} style={{marginRight: 10}}/>

                        <Heading1>{item.item}</Heading1>

                    </View>
                    <Seperator/>
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity onPress={()=>this.props.onPress(row)}>
                    <View style={{flexDirection: 'row', alignItems: 'center', margin: 10}}>
                        <Heading1 style={{marginRight: 15, color: 'gray'}}>{row}</Heading1>
                        <Heading1>{item.item}</Heading1>

                    </View>
                    <Seperator/>
                </TouchableOpacity>
            )
        }
    }

}