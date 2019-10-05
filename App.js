import React, {Component} from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createSwitchNavigator } from 'react-navigation'
import {createAppContainer} from "react-navigation";
import Login from "./components/LoginComponent";
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
const MainNavigator = createSwitchNavigator({
    Login: Login,
    App: TabNavigator,
    },
    {
        initialRouteName: 'Login'
    }
);

const rootReducer = combineReducers({friends: friends, rewards: rewards});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const AppContainer = createAppContainer(MainNavigator);

export default class App extends Component {
    render() {
        return (
            <Provider store={ store }>
                <AppContainer />
            </Provider>

        );
    }
}
