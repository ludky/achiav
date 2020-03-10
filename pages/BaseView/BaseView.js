import React, {Component} from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from "react-navigation";
import Social from "../SocialView/SocialComponent";
import Quests from "../QuestsView/QuestsComponent";
import Rewards from "../RewardsView/RewardsComponent";
import Profile from '../ProfileView/ProfileComponent';
import {Icon} from "react-native-elements";
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { rewards } from '../../redux/rewards.js';
import { friends } from '../../redux/friends.js';


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

export const tabStore = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const AppContainer = createAppContainer(TabNavigator);

export default class BaseView extends Component {

  render() {
      return (
        <AppContainer />
      );
  }
}