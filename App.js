import {createStackNavigator } from "react-navigation-stack";
import {createAppContainer } from "react-navigation";

import HomeScreen from './src/screens/HomeScreen';
import ResultsScreen from './src/screens/ResultsScreen';
import TestDistance from './src/screens/TestDistance';




const navigator = createStackNavigator(
  {
  Home: HomeScreen,
  Results: ResultsScreen,
  TestD: TestDistance
  }, 
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
    title: 'Walking Monitor'
    }
  }
);

export default createAppContainer(navigator);