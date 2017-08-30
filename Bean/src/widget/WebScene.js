/**
 * Created by sunbiao on 2017/7/31.
 */
/**
 * Copyright (c) 2017-present, Liu Jinyong
 * All rights reserved.
 *
 * https://github.com/huanxsd/MeiTuan
 * @flow
 */

//import liraries
import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, WebView, InteractionManager,Button,Alert } from 'react-native'
import * as WeChat from 'react-native-wechat';
// create a component
let  _this;
class WebScene extends PureComponent {


      shareToSesstion(isSesstion){
          if (isSesstion){
              WeChat.shareToTimeline({
              type: 'news',
              title: this.props.navigation.state.params.title,
              description: 'share web image to time line',
              mediaTagName: 'email signature',
              messageAction: undefined,
              messageExt: undefined,
              thumbImage: 'http://www.ncloud.hk/email-signature-262x100.png',
              webpageUrl:this.props.navigation.state.params.url
          });
          }else {

              WeChat.shareToSession({
                  type: 'news',
                  title: this.props.navigation.state.params.title,
                  description: 'share web image to time line',
                  mediaTagName: 'email signature',
                  messageAction: undefined,
                  messageExt: undefined,
                  thumbImage: 'http://www.ncloud.hk/email-signature-262x100.png',
                  webpageUrl:this.props.navigation.state.params.url
              });
          }

      }

    static navigationOptions = ({ navigation }) => ({
        headerStyle: { backgroundColor: 'white' },
        title: navigation.state.params.title,
        headerRight:(
            <Button title="分享" onPress={()=>{
                let titleStr = navigation.state.params.title;
               Alert.alert(
                   '分享',
                    null,
                    [
                        {text:'朋友圈',onPress:()=>_this.shareToSesstion(true)},
                        {text:'微信好友',onPress:()=>_this.shareToSesstion(false)},
                        {text:'取消',onPress:()=>{}},
                    ],
                   {cancelable:false}
               )

            }}/>
        )
    });

    state: {
        source: Object
    }

    constructor(props: Object) {
        super(props)
        this.state = {
            source: {}
        }
        _this = this;
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            this.props.navigation.setParams({ title: '加载中' })
            this.setState({ source: { uri: this.props.navigation.state.params.url } })
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <WebView
                    ref='webView'
                    automaticallyAdjustContentInsets={false}
                    style={styles.webView}
                    source={this.state.source}
                    onLoadEnd={(e) => this.onLoadEnd(e)}
                    scalesPageToFit
                />
            </View>
        );
    }

    onLoadEnd(e: any) {
        if (e.nativeEvent.title.length > 0) {
            this.props.navigation.setParams({ title: e.nativeEvent.title })
        }
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    webView: {
        flex: 1,
        backgroundColor: 'white',
    }
});

//make this component available to the app
export default WebScene;
