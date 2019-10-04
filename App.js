import React, {Component} from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from "react-navigation";
import Social from "./components/SocialComponent";
import Quests from "./components/QuestsComponent";
import Rewards from "./components/RewardsComponent";
import Profile from './components/ProfileComponent';
import {Icon} from "react-native-elements";
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { rewards } from './redux/rewards.js';
import { friends } from './redux/friends.js';
import Amplify, { Hub } from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react-native';
import getEnvVars from './environment';

const TabNavigator = createBottomTabNavigator(
    {
        Rewards: {
            screen: Rewards,
            navigationOptions: {
                tabBarIcon: <Icon name='star' type='font-awesome' color='black'/>
            }
        },
        Quests: {
            screen: Quests,
            navigationOptions: {
                tabBarIcon: <Icon name='map' type='font-awesome' color='black'/>
            }
        },
        Social: {
            screen: Social,
            navigationOptions: {
                tabBarIcon: <Icon name='users' type='font-awesome' color='black'/>
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                tabBarIcon: <Icon name='user' type='font-awesome'/>
            }
        }
    },
    {
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#ba86f7'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      }
  });

const rootReducer = combineReducers({friends: friends, rewards: rewards});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const AppContainer = createAppContainer(TabNavigator);

const { awsConfig } = getEnvVars();
Amplify.configure(awsConfig);

class App extends Component {
    
    componentDidMount() {
        Hub.listen('auth', (authData) => {
          if (authData.payload.event === 'signOut') {
            this.props.onStateChange('signedOut', null);
          }
        })
      }

    constructor(props) {
        super(props);        
    }

    render() {
        return (
            <Provider store={ store }>
                <AppContainer />
            </Provider>

        );
    }
}

export default withAuthenticator(App);
