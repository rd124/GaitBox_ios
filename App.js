import {createStackNavigator } from "react-navigation-stack";
import {createAppContainer } from "react-navigation";

import HomeScreen from './src/screens/HomeScreen';
import ResultsScreen from './src/screens/ResultsScreen';


const navigator = createStackNavigator(
  {
  Home: HomeScreen,
  Results: ResultsScreen,
  }, 
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
    title: 'Walking Monitor'
    }
  }
);

export default createAppContainer(navigator);