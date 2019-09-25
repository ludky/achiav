import React from 'react';
import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import Rewards from "./components/RewardsComponent";

const MainNavigator = createStackNavigator(
    {
      Rewards: Rewards
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
