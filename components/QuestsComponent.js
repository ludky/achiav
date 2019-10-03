import React, {Component} from 'react'
import {View, Text} from "react-native";
import Header from './HeaderComponent';

class Quests extends Component {
    render() {
        return (
            <View>
                <Header title='Quests'></Header>
            </View>
        )
    }
}

export default Quests;
