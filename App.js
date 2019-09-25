import React from 'react';
import {StyleSheet} from 'react-native';
import Home from "./components/HomeComponent";
import {createDrawerNavigator} from "react-navigation-drawer";
import {createAppContainer} from "react-navigation";
import Rewards from "./components/RewardsComponent";

const MainNavigator = createDrawerNavigator({
  Home: Home,
  Rewards: Rewards
});

const AppContainer = createAppContainer(MainNavigator);

export default function App() {
  return (
      <AppContainer />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
