import {createStackNavigator } from "react-navigation-stack";
import {createAppContainer } from "react-navigation";

import HomeScreen from './src/screens/HomeScreen';
import TestDistance from './src/screens/TestDistance';



const navigator = createStackNavigator(
  {
  Home: HomeScreen,
  TestD: TestDistance,
  }, 
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
    title: 'Walking Monitor'
    }
  }
);

export default createAppContainer(navigator);