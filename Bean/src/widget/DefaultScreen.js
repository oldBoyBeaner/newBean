/**
 * Created by marno on 2017/4/13
 * Function:
 * Desc:
 */
import React, {Component} from "react";
import {Text, View,Image,TouchableOpacity,StyleSheet} from "react-native";
import Toast from 'react-native-simple-toast';
import {QRScannerView} from 'ac-qrcode';
import Color from  '../widget/color';

export default class DefaultScreen extends Component {
    render() {
        return (


        < QRScannerView

                onScanResultReceived={this.barcodeReceived.bind(this)}

                renderTopBarView={() => this._renderTitleBar()}

                renderBottomMenuView={() => this._renderMenu()}
            />

        )
    }

    _renderTitleBar(){
        return(
        <View style={styles.topBar}>

        <TouchableOpacity style={{marginLeft:15,marginTop:15}} onPress={()=>this.props.onPress()}>
           <Text style={{color:Color.theme,fontSize:15}}>取消</Text>
        </TouchableOpacity>
            <View style={{marginRight:15,marginTop:15}}>
            <Text
                style={{color:'black',textAlignVertical:'center', textAlign:'center',font:20}}
            >扫一扫
            </Text>
            </View>
            <TouchableOpacity style={{marginRight:15,marginTop:15}} onPress={()=>this.props.photo()}>
                <Text style={{color:Color.theme,fontSize:15}}>相册</Text>
            </TouchableOpacity>
        </View>

        );
    }

    _renderMenu() {
        return (
            <TouchableOpacity onPress={()=>this.props.onPress()}>
            {/*<Text*/}
                {/*style={{color:'white',textAlignVertical:'center', textAlign:'center',font:20,padding:12}}*/}
            {/*>这里添加底部菜单</Text>*/}
            </TouchableOpacity>
        )
    }

    barcodeReceived(e) {
        // Toast.show('Type: ' + e.type + '\nData: ' + e.data);
        //console.log(e)

             this.props.result(e)


    }
}
const styles = StyleSheet.create({
    topBar:{
        backgroundColor:'white',
        height:64,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',



    }
})
