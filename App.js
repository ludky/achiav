import React, {Component} from 'react';
import { Provider } from 'react-redux';
import {checkSignOut} from './shared/util/AuthUntil/Auth';
import { withAuthenticator } from 'aws-amplify-react-native';
import BaseView, { tabStore } from './pages/BaseView/BaseView';
import GlobalHeader from './components/HeaderComponent';



class App extends Component {
    
    componentDidMount() {
        checkSignOut;
    }

    constructor(props) {
        super(props);        
    }

    render() {
        return (
            <Provider store={ tabStore }>
                <GlobalHeader/>
                <BaseView />
            </Provider>

        );
    }
}

export default withAuthenticator(App);
