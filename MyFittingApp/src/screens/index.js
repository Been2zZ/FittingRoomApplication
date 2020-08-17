import React from "react";
import { Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import SelectScreen from "./SelectScreen";
import SecondScreen from "./SecondScreen";
import LeftScreen from "./LeftScreen";
import RightScreen from "./RightScreen";

const AppNavigator = createStackNavigator(
  {
    FirstScreen:{screen:SelectScreen},
    SecondScreen:{screen:SecondScreen},

    TabNavigator: {
      screen: TabNavigator,
      navigationOptions: ({navigation}) => ({
          header: null,
      }),
  },
  }
);

const LeftStack = createStackNavigator(
  {
    LeftScreen
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      title: 'Left',
    }),
  }
);

const RightStack = createStackNavigator(
  {
    RightScreen
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      title: 'Right',
    }),
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Left: LeftStack,
    Right: RightStack,
  },
  {
      defaultNavigationOptions: ({navigation}) => ({
          tabBarIcon: ({focused, horizontal, tintColor}) => {
              const {routeName} = navigation.state;
              let icon = "▲";

              if(routeName === 'Left'){
                  icon = "🌈";
              } else if(routeName === 'Right'){
                  icon = "🌙"
              } 
              return <Text style={{color: focused && "#46c3ad" || "#888"}}>{icon}</Text>
          }
      }),
      lazy: false,
      tabBarOptions: {
          activeTintColor: "#46c3ad",
          inactiveTintColor: "#888",
      },
  }
);

export default createAppContainer(AppNavigator, {initialRouteName : 'LeftScreen'});