/**
 * Created by sunbiao on 2017/8/21.
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
import { Paragraph,Heading1,Heading2 } from '../../widget/Text';
import  StartScore from '../../common/StartScore'
let  that;
export  default class BookVideoDetail extends  PureComponent{
    // 构造
      constructor(props) {
        super(props);

        // 初始状态
        this.state = {

            dataSource:[]
        };
          this.keyExtractor = this.keyExtractor.bind(this);
          this.renderRow= this.renderRow.bind(this);
          this.renderHeader = this.renderHeader.bind(this);
        that = this;
      }
    static navigationOptions=({navigation})=>({
        headerTitle:(
            <NavigationItem
                titleStyle={{color:'#000'}}
                title='电影'
                icon={require('../../img/ic_mine_movies_tv_30x30_.png')}

            />
        ),
        headerLeft:(
            <NavigationItem icon={require('../../img/ic_arrow_back_24x24_.png')}
                            onPress={()=>{

                                navigation.goBack();
                            }}
            />
        ),
        headerStyle:{backgroundColor:'#fff'}
    })
    keyExtractor(item,index){
        return index;
    }
    componentDidMount() {
        let item = this.props.navigation.state.params.info;
        let array = item.actors;
        this.setState({

            dataSource:array
        })
        console.log(item);

    }
    renderRow(rowData){
        return(
            <View>
                <Text>{rowData.index}</Text>
            </View>
        )
    }
    rateAndScore(item){
        return (
            <View style={styles.rightContainer}>

                <Heading2>豆瓣评分</Heading2>
                <Heading1>{item.rating.value}</Heading1>

                <StartScore style={{marginBottom:0,height:10,width:50}}
                            currentScore={Math.ceil(item.rating.value/2)}
                />

                <Paragraph>{item.rating.count}</Paragraph>
            </View>
        )
    }
    hasSeeCom(item){
        if(item.rating){
            return (
                <StartScore style={{marginBottom:0,height:10,width:50}}
                            currentScore={Math.ceil(item.rating.value/2)}
                />
            )

        }else {

            return null;
        }
    }
    renderHeader(){
        let item = this.props.navigation.state.params.info;
        let subTitle = item.info.split('/');
        let  dateWithState = subTitle[subTitle.length-1];
        let date= dateWithState.split('(')[0].slice(0,4);
        let stateStr=dateWithState.split('(')[1];
        let state= stateStr.substring(0,stateStr.length-1);

        let  movieType = subTitle[subTitle.length-2];

        let component;
        if (item.rating){
            let score =item.rating.value;
            component =this.rateAndScore(item)
        }else {
            component=<View>
                <Paragraph>暂无评分</Paragraph>
            </View>
        }

        console.log('sss'+this.state.dataSource.cover);
        return(
            <View style={{backgroundColor:color.background}}>
                <View style={{justifyContent:'center', alignItems:'center'}}>
                <TouchableOpacity style={styles.coverBG} >
                    <Image source={{uri:item.cover.url}}
                            style={styles.cover}
                           resizeMode='contain'
                    />
                </TouchableOpacity>
                </View>
                <View style={styles.disBg}>
                    <View style={styles.leftContainer}>
                        <Heading1 style={{fontSize:25,marginBottom:10}}>{item.title}</Heading1>
                        <Paragraph>{`${date} / ${state} / ${movieType}`}</Paragraph>
                        <Paragraph>上映时间:{dateWithState}</Paragraph>
                        <Paragraph>片长：123分钟</Paragraph>
                    </View>
                    {component}
                </View>
                <View
                    style={{
                        flexDirection:'row',
                        justifyContent:'space-between',
                        alignItems:'center',
                        marginHorizontal:15,
                        marginVertical:25
                    }}
                >
                    <TouchableOpacity style={{flex:0.3,flexDirection:'row',alignItems:'center',justifyContent:'center',borderColor:'#ffd143',borderWidth:screen.onePixel,padding:5}} >

                        <Heading1 style={{marginHorizontal:20,marginVertical:10,color:'#ffd143'}}>想看</Heading1>

                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:0.6,flexDirection:'row',alignItems:'center',justifyContent:'center',borderColor:'#ffd143',borderWidth:screen.onePixel,padding:5}}>

                        <Heading1 style={{marginHorizontal:10,marginVertical:10,color:'#ffd143'}}>看过</Heading1>
                        {this.hasSeeCom(item)}

                    </TouchableOpacity>

                </View>
            </View>
        )
    }
    render(){
        return(

                <View style={styles.container}>

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
const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:color.background,


},
    coverBG:{
        width:screen.width,
        height:screen.width*0.8,
        backgroundColor:'#364c13',
        justifyContent:'center',
        alignItems:'center'
    },
    cover:{
        width:screen.width*0.5,
        height:screen.width*0.8

    },
    disBg:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    leftContainer:{
        marginTop:15,
        marginHorizontal:15
    },
    rightContainer:{
        marginTop:15,
        marginRight:15,
        backgroundColor:'#fff',
        padding:10
    }
})