import React, {Component} from 'react'
import {SafeAreaView, View, Button} from "react-native";
import GlobalHeader from './HeaderComponent';
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
            <SafeAreaView style={{ flex: 1 }}>
                <GlobalHeader title='Profile'></GlobalHeader>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>                
                    <Button 
                        color='orange' 
                        title='Sign out'
                        style={{padding: 10}}
                        onPress={signOut}                
                        >
                    </Button>  
                </View>
            </SafeAreaView>
        )   
    }
}

export default Profile;
