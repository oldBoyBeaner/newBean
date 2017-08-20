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
    rateAndScore(score){
        return (
            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>

                <View style={{width:50}} >
                    <StartScore  currentScore={Math.ceil(score/2)} selectIndex={this._selectedIndex.bind(this)}/>
                </View>
                <View style={{flex:1,marginLeft:5,marginTop:-15}}>
                <Paragraph style={{color:'#B0B0B0'}}>{score}</Paragraph>
                </View>
            </View>
        )
    }
    render(){
        let data = this.props.data;
        let rate = data.rating;
        let component;
        if (rate){
            let score =data.rating.value;
            component =this.rateAndScore(score)
        }else {
            component=<View>
                <Paragraph>暂无评分</Paragraph>
            </View>
        }
      

        return(

            <TouchableOpacity style={styles.container} onPress={()=>this.props.onPress()}>
                <Image source={{uri:data.cover.url}}
                                 style={styles.img} />

               <Paragraph style={{color:'#000',marginBottom:5}} numberOfLines={1}>{data.title}</Paragraph>

                {component}
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