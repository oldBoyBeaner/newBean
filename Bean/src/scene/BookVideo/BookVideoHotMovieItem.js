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
    Button,
    Alert,
    TouchableOpacity,
    StatusBar,
    ImageBackground
} from 'react-native';
import screen from '../../common/screen';
import color from '../../widget/color';
import NavigationItem from '../../widget/NavigationItem';
import { Paragraph,Heading1,Heading2 } from '../../widget/Text';
import  StartScore from '../../common/StartScore'
export  default class BookVideorecItem extends  PureComponent{
    _selectedIndex(count){
            console.log('打了积分');
    }
    render(){
        let data = this.props.data;
        let rate = data.rating;
        if (rate){
            let score =Math.ceil(data.rating.value);
        }
      

        return(

            <TouchableOpacity style={styles.container} onPress={()=>this.props.onPress()}>
                <Image source={{uri:data.cover.url}}
                                 style={styles.img} />

               <Paragraph style={{color:'#000'}} numberOfLines={1}>{data.title}</Paragraph>

                {/*<StartScore currentScore={score} selectIndex={this._selectedIndex.bind(this)}/>*/}
            </TouchableOpacity>

        )
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
    scrollview:{
        paddingLeft:10,
    },
    container:{
        marginRight:10,
        width:screen.width/3.5
    },
    img:{
        width:screen.width/3.5,
        height:screen.width/3.5+20,
        marginBottom:5,
        justifyContent:'flex-end'
    },
    tip:{
        borderRadius:5,

    },
    discri:{

        backgroundColor:'rgba(0,0,0,0.8)',
        paddingHorizontal:10,
        paddingTop:10,
        paddingBottom:15
    }
})