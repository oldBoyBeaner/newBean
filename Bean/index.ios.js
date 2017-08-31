/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {StackNavigator,TabNavigator,TabBarBottom } from 'react-navigation';
import RootScene from './src/RootScene';
import stroage from './src/scene/Login/StorageUtil';
import './src/scene/Login/Global';
import LoginScene from './src/scene/Login/LoginScene';
import * as WeChat from 'react-native-wechat';

export default class Bean extends Component {
  // 构造
    constructor(props) {
      super(props);
      // 初始状态
      this.state = {
        login:''
      };
    }

    componentDidMount() {
        WeChat.registerApp('wx69d85a4e412e32b5');



      let that = this;
        storage.load({
            key: 'loginState',
        }).then(ret => {
            global.user.loginState = true;
            global.user.userData = ret;
            that.setState({
                login:true
            })
        }).catch(err => {
            global.user.loginState = false;
            global.user.userData = '';
            that.setState({
                login:false
            })
        })
    }
  render() {
    let component ;
  if (this.state.login !==''){
      if (!this.state.login){
          component = <Navigator/>
      }else {
          component = <RootScene/>
      }
      return (
          component
      );
  }else {
    return<View/>
  }

  }
}
const Navigator = StackNavigator({
        Login:{screen:LoginScene},
        Tab:{screen:RootScene}

    },
    {
        headerStyle: { backgroundColor:'#fff' },
        headerBackTitle: '返回',
        headerTintColor: '#333333',
        showIcon: true,
    }
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Bean', () => Bean);
