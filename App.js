import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from "react-navigation";
import Profile from "./components/ProfileComponent";
import Social from "./components/SocialComponent";
import Quests from "./components/QuestsComponent";
import Rewards from "./components/RewardsComponent";

const MainNavigator = createBottomTabNavigator(
    {
        Rewards: Rewards,
        Quests: {
            screen: Quests
        },
        Social: {
            screen: Social
        },
        Profile: {
            screen: Profile
        }
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#ba86f7'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      }
  });

const AppContainer = createAppContainer(MainNavigator);

export default function App() {
  return (
      <AppContainer />
  );
}
