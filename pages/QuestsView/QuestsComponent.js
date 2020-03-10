import React, {Component} from 'react'
import {View, Text} from "react-native";
import GlobalHeader from '../../components/HeaderComponent';

class Quests extends Component {
    render() {
        return (
            <View>
                <GlobalHeader title='Quests'></GlobalHeader>
            </View>
        )
    }
}

export default Quests;
