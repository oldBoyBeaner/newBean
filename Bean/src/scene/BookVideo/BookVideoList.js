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
} from 'react-native';
import screen from '../../common/screen';
import color from '../../widget/color';
import NavigationItem from '../../widget/NavigationItem';
import { Paragraph,Heading1 } from '../../widget/Text';
import HomeSearchItem from '../Home/HomeSearchItem'
import BookVideoHotMovie from './BookVideoHotMovie'

import  BookVideoRecommend from './BookVideoRecommend';

export  default class  BookVideoList extends  PureComponent{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource:[]

        };
          this.keyExtractor = this.keyExtractor.bind(this);
          this.renderRow= this.renderRow.bind(this);

      }

    componentDidMount() {
        let modle = this.props.modle;
        console.log(modle);
        this.setState({
            dataSource:modle
        })

    }
    renderRow(item){
          console.log(item)
          if (item.index ==0){
              return(
              <BookVideoRecommend
                  title={item.item.data.title}
                  subtitle={item.item.data.total}
                  item={item.item.data.items}
              />
              )
          }else if (item.index==1){
              let  array = item.item.data.subject_collection_boards;
              console.log(array);
              let title = array[0].items[0].title;
              console.log(title);
            return(
                <BookVideoHotMovie
                title={array[0].subject_collection.name}
                subtitle={array[0].subject_collection.subject_count}
                item={array[0].items}
            />
            )
          }

    }


    keyExtractor(item,index){
        return index;
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
const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1
    },


})