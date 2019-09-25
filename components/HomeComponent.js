import React, {Component} from 'react';
import {Text, SafeAreaView} from "react-native";

class Home extends Component {
    static navigationOptions = {
        title: 'Home'
    };

    render() {
        return (
            <SafeAreaView>
                <Text style={{padding: 10, alignSelf: 'center'}}>achiav</Text>
            </SafeAreaView>
        );
    }
}

export default Home;
