import React, {Component} from 'react'
import {View} from "react-native";
import Header from './HeaderComponent';

class Profile extends Component {
    render() {
        return (
            <View>
                <Header title='Profile'></Header>
            </View>
        )
    }
}

export default Profile;
