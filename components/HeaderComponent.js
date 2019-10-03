import React, { Component } from 'react';
import { SafeAreaView, Text} from 'react-native';

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <SafeAreaView>
            <Text style={{fontSize: 18, padding: 10, textAlign: 'center', fontWeight: 'bold'}}>{ this.props.title }</Text>
        </SafeAreaView>
        )
    }
}

export default Header;