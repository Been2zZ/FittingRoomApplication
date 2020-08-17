import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Image, Dimensions } from "react-native";
// import { RNRuler } from "react-native-ruler";

export default class MyMannequin extends Component {
  state = {
    height: this.props.navigation.getParam("height"),
    BMI: this.props.navigation.getParam("BMI"),
    sex: this.props.navigation.getParam("sex"),

    arm: this.props.navigation.getParam("arm"),
    shoulder: this.props.navigation.getParam("shoulder"),
    leg: this.props.navigation.getParam("leg"),
    top: this.props.navigation.getParam("top"),
    totalLengh: this.props.navigation.getParam('totalLength'),

    // real_height: this.props.navigation.getParam("height_g"),
    // shoulder: this.props.navigation.getParam("shoulder_g"),
    // arm: this.props.navigation.getParam("arm_g"),
    // waist_g: this.props.navigation.getParam("waist_g"),
    // top: this.props.navigation.getParam("upperBody_g"),
    // leg: this.props.navigation.getParam("leg_p"),
    // ratio : this.props.navigation.getParam("ratio"),

    my_shoulder: this.props.navigation.getParam('my_shoulder'),
    my_arm: this.props.navigation.getParam('my_arm'),
    my_upperBody: this.props.navigation.getParam('my_upperBody'),
    my_waist: this.props.navigation.getParam('my_waist'),
    my_leg: this.props.navigation.getParam('my_leg'),


  };

  // 800 : 1333

  // 머리 - 어깨 : 어깨 - 발 끝 = 1 : 4.3 (y좌표)
  // height(1333) : x = 1 : 4.3

  // 내 중심 (x좌표)
  // width / 2 = 400

  // 머리 - 골반 : 골반 - 발 끝 = 1 : 1 (y좌표)
  // height / 2 = 1333 / 2

  // real_height : arm = height : x (x좌표)
  // screen_width / 2 플마 x / 2

  // 키 : 어깨 너비 -> 5
  // 1333 : 355 = 170: real 내 어깨 
  // 내 어깨 : 입력받은 옷 어깨 = 355 : 실루엣 어깨(x)-> percent

  //screenX는 폰 화면의 X 길이임 ㅇㅋ?
  draw5_shoulder() {
    // 이게 양쪽 어깨니까 반으로 쪼개서 screenX의 절반에서 +-a가 양 어깨가 되겠지?
    a =(this.state.shoulder * (355 * screenY / 1333)) / this.state.my_shoulder
  }

  draw4_shoulder() {
    a =(this.state.shoulder * (315 * screenY / 1333)) / this.state.my_shoulder
  }

  draw3_shoulder() {
    a =(this.state.shoulder * (300 * screenY / 1333)) / this.state.my_shoulder
  }

  draw2_shoulder() {
    a =(this.state.shoulder * (295 * screenY / 1333)) / this.state.my_shoulder
  }

  draw1_shoulder() {
    a =(this.state.shoulder * (285 * screenY / 1333)) / this.state.my_shoulder
  }

  draw_arm() {
    a = (this.state.arm * (382 * screenY / 1333)) / this.state.my_arm
  }

  draw_leg() {
    a = (this.state.leg * (495 * screenY / 1333)) / this.state.my_leg
  }

  draw_upperBody() {
    a = (this.state.totalLengh * (157 * screenY / 869)) / this.state.my_upperBody
  }

  draw_waist1() {
    a = (this.state.waist * (71.5 * screenY / 869)) / this.state.my_waist
  }

  draw_waist2() {
    a = (this.state.waist * (79 * screenY / 869)) / this.state.my_waist
  }

  draw_waist3() {
    a = (this.state.waist * (129.5 * screenY / 869)) / this.state.my_waist
  }

  draw_waist4() {
    a = (this.state.waist * (150 * screenY / 869)) / this.state.my_waist
  }

  draw_waist5() {
    a = (this.state.waist * (176 * screenY / 869)) / this.state.my_waist
  }

  // 상체 길이 : 157

  // 허리 1 : 71.5
  // 허리 2 : 79
  // 허리 3 : 129.5
  // 허리 4 : 150
  // 허리 5 : 176

  // 가로 : 414
  // 세로 : 869

  // 어깨 너비 -> 4
  // 1333 : 315

  // 어깨 너비 -> 3
  // 1333 : 300

  // 어깨 너비 -> 2
  // 1333 : 295

  // 어깨 너비 -> 1
  // 1333 : 285

  // 팔 길이
  // 1333 : 382
  
  // 다리 길이
  // 1333 : 495

  // 상체 길이
  // 1333 : 452

  renderLineX = (leftPosition, rightPosition, topPosition) => {
    return (
      <View
          style={[
            styles.line,
            {
              left: leftPosition,
              right: rightPosition,
              top : topPosition,
            }
          ]}
        />
    );
  };
  renderLineY = (topPosition, bottomPosition, leftPosition) => {
    return (
      <View
          style={[
            styles.line,
            {
              top : topPosition,
              bottom : bottomPosition,
              left: leftPosition,
            }
          ]}
        />
    );
  };

  render() {
    const { screenX, screenY } = Dimensions.get("screen");
    const BMI = this.state.BMI;
    console.disableYellowBox = true;

    var icon = "";
    if(BMI == 1){
      icon = this.state.sex? require("./images/Male_1.png") : require("./images/Female_1.png");
    }
    if(BMI == 2){
      icon = this.state.sex? require("./images/Male_2.png") : require("./images/Female_2.png");
    }
    if(BMI == 3){
      icon = this.state.sex? require("./images/Male_3.png") : require("./images/Female_3.png");
    }
    if(BMI == 4){
      icon = this.state.sex? require("./images/Male_4.png") : require("./images/Female_4.png");
    }
    if(BMI == 5){
      icon = this.state.sex? require("./images/Male_5.png") : require("./images/Female_5.png");
    }
    
    return (
      <View style={styles.container}>
        <ImageBackground style={{ position: 'absolute', width : "100%", height : "100%", flex : 1}}
        source = {icon}
           /*resizeMode = "contain"*/
            >
          {/* <RNRuler /> */}
          
        </ImageBackground>
        {this.renderLineX('15%', '15%', '50%')}
        {/* {this.renderLineY('10%', '10%', '50%')} */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    height: "100%",
    width: "100%",
  },
  line: {
    borderWidth: 2,
    borderColor:'black',
    margin:10,
    color:'pink',

    
  },
});
