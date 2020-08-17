import React, { Component } from 'react'

import InputScreen_1 from './InputScreen/InputScreen_1';
import InputScreen_2 from './InputScreen/InputScreen_2';
import InputScreen_3 from './InputScreen/InputScreen_3';
import InputScreen_4 from './InputScreen/InputScreen_4';
import InputScreen_5 from './InputScreen/InputScreen_5';
import InputScreen_6 from './InputScreen/InputScreen_6';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import SizeInsert from './components/SizeInsert';
import UploadPicture from './components/UploadPicture';
import MainScreen from './components/MainScreen';
import wh from './components/WeightHeight';
import Loading from './components/Loading';
import FirstChoice from './components/FirstChoice';
import TypeChoice from './components/TypeChoice';
import Top from './components/Top';
import Bottom from './components/Bottom';
import OnePiece from './components/OnePiece';
import MyMannequin from './components/MyMannequin';

// 메인 이미지 출처 : https://www.pngwing.com/ko/free-png-nbuhq



const App = createStackNavigator(
  {
    Loading: {
      screen: Loading,
      navigationOptions: {
        title: "Loading",
      },
    },
    MainScreen: {
      screen: MainScreen,
      navigationOptions: {
        title: "MainScreen",
      },
    },
    WeightHeight: {
      screen: wh,
      navigationOptions: {
        title: "WeightHeight",
      },
    },
    FirstChoice: {
      screen: FirstChoice,
      navigationOptions: {
        title: "FirstChoice",
      },
    },
    SizeInsert: {
      screen: SizeInsert,
      navigationOptions: {
        title: "SizeInsert",
      },
    },
    MyMannequin: {
      screen: MyMannequin,
      navigation: {
        title: "MyMannequin",
        header: null,
      },
    },
    TypeChoice: {
      screen: TypeChoice,
      navigationOptions: {
        title: "TypeChoice",
      },
    },
    Top: {
      screen: Top,
      navigationOptions: {
        title: "Top",
      },
    },
    Bottom: {
      screen: Bottom,
      navigationOptions: {
        title: "Bottom",
      },
    },
    OnePiece: {
      screen: OnePiece,
      navigationOptions: {
        title: "OnePiece",
      },
    },
    UploadPicture: {
      screen: UploadPicture,
    }, // 설정이 'screen' 밖에 없다면, 중괄호는 생략 가능합니다.
    InputScreen_1: {
      screen: InputScreen_1,
      navigationOptions: {
        title: 'InputScreen_1',
        header: null,
      }
    },
    InputScreen_2: {
      screen: InputScreen_2,
      navigationOptions: {
        title: 'InputScreen_2',
        header: null,
      }
    },
    InputScreen_3: {
      screen: InputScreen_3,
      navigationOptions: {
        title: 'InputScreen_3',
        header: null,
      }
    },
    InputScreen_4: {
      screen: InputScreen_4,
      navigationOptions: {
        title: 'InputScreen_4',
        header: null,
      }
    },InputScreen_5: {
      screen: InputScreen_5,
      navigationOptions: {
        title: 'InputScreen_5',
        header: null,
      }
    },
    InputScreen_6: {
      screen: InputScreen_6,
      navigationOptions: {
        title: 'InputScreen_6',
        header: null,
      }
    },
  },
  
  {
    initialRouteName: "MainScreen", // 처음 보여 줄 화면을 설정합니다.
  }
);

const AppContainer = createAppContainer(App);

export default () => (
  <AppContainer />
);