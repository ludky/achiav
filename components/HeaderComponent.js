import React, { Component } from 'react';
import { SafeAreaView, View, Text} from 'react-native';
import {Header} from 'react-native-elements';

class GlobalHeader extends Component {
    
    constructor(props) {
        super(props);
    }
    render() {
        const renderTitle = () => {
            return(
                <Text style={{color: "#fff"}} >
                    {this.props.title}
                </Text>
            );
        };
        return (
        <SafeAreaView>
            <View>
                <Header
                    centerComponent={renderTitle}
                    rightComponent={this.props.rightComponent}
                    backgroundColor="#000"
                />
            </View>
        </SafeAreaView>
        )
    }
}

export default GlobalHeader;