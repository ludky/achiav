import React, { Component } from 'react'
import { SafeAreaView, Text, Button } from 'react-native'
import * as Google from 'expo-google-app-auth';
import getEnvVars from '../environment';

const { iosClientId } = getEnvVars();

class Login extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const loginWithGoogle = () => {
            const config = {
                iosClientId: iosClientId,
                redirectUrl: 'com.achiav:/oauth2redirect/google'
              };
            const { type, accessToken } = Google.logInAsync(config)
            .then( type => {
                console.log(type)
                this.props.navigation.navigate('App');
            });
        }

        return (
            <SafeAreaView style={{  flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                <Text style={{ padding: 10, justifyContent: 'center', alignItems: 'center'}}>Welcome to achiav! Please click the button below to sign in.</Text>
                <Button 
                    color='red' 
                    title='Sign in with Google'
                    style={{padding: 10}}
                    onPress={loginWithGoogle}                
                    >
                </Button>                         
            </SafeAreaView>
        )
    }
}

export default Login;