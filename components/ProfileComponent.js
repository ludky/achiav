import React, {Component} from 'react'
import {View, Button} from "react-native";
import Header from './HeaderComponent';
import { Auth } from 'aws-amplify';

class Profile extends Component {
    render() {
        const signOut = () => {
        Auth.signOut({ global: true })
            .then(data => {
                console.log('Logging out.')
            })
            .catch(err => console.log(err));
        }
        return (
            <View>
                <Header title='Profile'></Header>
                <Button 
                    color='orange' 
                    title='Sign out'
                    style={{padding: 10}}
                    onPress={signOut}                
                    >
                </Button>    
            </View>
        )
    }
}

export default Profile;
