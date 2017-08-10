/**
 * Created by sunbiao on 2017/7/24.
 */
import React, { PureComponent } from 'react'
import { Image } from 'react-native'

// create a component
export default class TabBarItem extends PureComponent {
    render() {
        let selectedImage = this.props.selectedImage ? this.props.selectedImage : this.props.normalImage
        return (
            <Image
                source={this.props.focused
                    ? selectedImage
                    : this.props.normalImage}
                style={{ tintColor: this.props.tintColor, width: 25, height: 25 }}
            />
        );
    }
}