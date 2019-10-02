import React, {Component} from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from "react-navigation";
import Profile from "./components/ProfileComponent";
import Social from "./components/SocialComponent";
import Quests from "./components/QuestsComponent";
import Rewards from "./components/RewardsComponent";
import {Icon} from "react-native-elements";
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { rewards } from './redux/rewards.js'

const MainNavigator = createBottomTabNavigator(
    {
        Rewards: {
            screen: Rewards,
            headerTitle: 'Test',
            navigationOptions: {
                tabBarIcon: <Icon name='star' type='font-awesome' color='gold'/>
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

const store = createStore(rewards, applyMiddleware(thunkMiddleware));

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
