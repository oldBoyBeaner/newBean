/**
 * Created by sunbiao on 2017/8/10.
 */
import React,{ PureComponent } from 'react';
import {StatusBar,View} from 'react-native';
import {StackNavigator,TabNavigator,TabBarBottom } from 'react-navigation';
import HomeScene from './scene/Home/HomeScene';
import BookVideoScene from './scene/BookVideo/BookVideoScene';
import NotificationScene from './scene/Notification/NotificationScene';
import MineScene from './scene/Mine/MineScene';
import GroupScene from './scene/Group/GroupScene';
import TabBarItem from './widget/TabBarItem';
import Color from './widget/color';
import WebScene from './widget/WebScene';
import QRDefault from './widget/DefaultScreen';
import ChatScene from './scene/Chat/ChatScene';


const lightContentScenes = ['Home', 'Mine'];

function  getCurrentRouteName(navigationState){
    if (!navigationState){
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    if (route.routes){
        return getCurrentRouteName(route);
    }
    return route.routeName;
}
export default class RootScene extends PureComponent{
    render(){
        return(

            <Navigator
                onNavigationStateChange={
                    (prevState,currentState)=>{
                        const currentScene = getCurrentRouteName(currentState);
                        const previousScene = getCurrentRouteName(prevState);
                        if (previousScene !== currentScene){
                            if (lightContentScenes.indexOf(currentScene)>=0){
                                StatusBar.setBarStyle('light-content');
                            }else {
                                StatusBar.setBarStyle('dark-content')
                            }
                        }
                    }
                }
            />
        );
    }
}
const Tab=TabNavigator({
        Home:{
            screen:HomeScene,
            navigationOptions:({navigation})=>({
                tabBarLabel:'首页',
                tabBarIcon:({focused,tintColor})=>(
                    <TabBarItem
                        focused={focused}
                        tintColor={tintColor}
                        normalImage={require('./img/ic_tab_home_gray_32x32_.png')}
                        selectedImage={require('./img/ic_tab_home_32x32_.png')}
                    />
                )
            })
        },
        BookVideo: {
            screen: BookVideoScene,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '书影音',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        focused={focused}
                        tintColor={tintColor}
                        normalImage={require('./img/ic_tab_subject_gray_32x32_.png')}
                        selectedImage={require('./img/ic_tab_subject_32x32_.png')}
                    />),


            }),
        }
        ,
        Notification:{
            screen:NotificationScene,
            navigationOptions:({navigation})=>({
                tabBarLabel:'广播',
                tabBarIcon:({focused,tintColor})=>(
                    <TabBarItem
                        focused={focused}
                        tintColor={tintColor}
                        normalImage={require('./img/ic_tab_timeline_gray_32x32_.png')}
                        selectedImage={require('./img/ic_tab_timeline_32x32_.png')}
                    />
                )

            }),

        },
        Group:{
            screen:GroupScene,
            navigationOptions:({navigation})=>({
                tabBarLabel:'小组',
                tabBarIcon:({focused,tintColor})=>(
                    <TabBarItem
                        focused={focused}
                        tintColor={tintColor}
                        normalImage={require('./img/ic_tab_group_gray_32x32_.png')}
                        selectedImage={require('./img/ic_tab_group_32x32_.png')}
                    />
                )

            }),

        },
        Mine:{
            screen:MineScene,
            navigationOptions:({navigation})=>({
                tabBarLabel:'我的',
                tabBarIcon:({focused,tintColor})=>(
                    <TabBarItem
                        focused={focused}
                        tintColor={tintColor}
                        normalImage={require('./img/profile_normal_32x32_.png')}
                        selectedImage={require('./img/profile_active_32x32_.png')}
                    />
                )
            })
        }

    },
    {
        tabBarComponent:TabBarBottom,
        tabBarPosition:'bottom',
        swipeEnabled:true,
        animationEnabled:true,
        lazy:true,
        tabBarOptions:{
            activeTintColor: Color.theme,
            inactiveTintColor: '#979797',
            style: { backgroundColor: '#ffffff' },
        }
    }
)
const Navigator = StackNavigator({
        Tab:{screen:Tab},
        Web:{screen:WebScene},
        QRView:{screen:QRDefault},
        Chat:{screen:ChatScene}

    },
    {
        headerStyle: { backgroundColor: Color.theme },
        headerBackTitle: '返回',
        headerTintColor: '#333333',
        showIcon: true,
    }
)
