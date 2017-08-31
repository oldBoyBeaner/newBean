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
import BookVideoWillOpenItem from './BookVideoWillOpenItem'
import BookVideoTypeNum from './BookVideoTypeNum'


export  default class BookVideoWillOpen extends  PureComponent{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render(){
        let title = this.props.title;
        let subTitle = this.props.subtitle;
        let datas = this.props.item;

        return(
            <View style={styles.container}>
                <BookVideoTypeNum
                    title= {title}
                    subtitle={subTitle}
                />
                <ScrollView style={styles.scrollview} horizontal={true}>
                    {datas.map((data,index)=>(

                        <BookVideoWillOpenItem
                            data={data}
                            key={index}
                            onPress={()=>this.props.onPress(index)}
                        />
                    ))}
                    <TouchableOpacity
                        style={styles.lastAll}>
                        <Paragraph>全部</Paragraph>
                        <View style={{backgroundColor:'#AEAEAE',height:1,width:20,marginVertical:5}}/>
                        <Paragraph>{subTitle}</Paragraph>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff'
    },
    recomment:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginHorizontal:10,
        height:50
    },
    scrollview:{
        paddingLeft:10,
    },
    img:{
        marginRight:10,

        width:screen.width/2.0,
        height:screen.width/2.0,
    },
    lastAll:{
        width:screen.width/3.5,
        height:screen.width/3.5+20,
        backgroundColor:color.background,
        justifyContent:'center',
        alignItems:'center'

    }
})