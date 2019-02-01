import React from 'react';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import {FontAwesome} from '@expo/vector-icons';

const AppTabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <FontAwesome name="home" size={30} color={tintColor} />
      )
    }
  },
  About: {
    screen: AboutScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <FontAwesome name="question-circle-o" size={30} color={tintColor} />
      )
    }
  }
},
{
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    activeTintColor: '#ff471a',
    inactiveTintColor: '#e6e6e6',
  style: {
    backgroundColor: '#3399ff',
    color: 'blue',
    height: 40,
    shadowOpacity: 1,
    shadowColor: 'white',
    elevation: 5,
    shadowOffset: {width: 0, height: 5}
  },
  }
})

export default createAppContainer(AppTabNavigator);