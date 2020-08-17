import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  Button,
  Alert,
  Image,
  TextInput,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RNRuler } from "react-native-ruler";

// 다리 길이

export default class InputScreen_6 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leg_t: 0,
      leg_b: 0,
      leg_p: 0,

      diff: 0,
      ratio: this.props.navigation.getParam("ratio"),

      height_g: this.props.navigation.getParam("height_g"),
      shoulder_g: this.props.navigation.getParam("shoulder_g"),
      arm_g: this.props.navigation.getParam("arm_g"),
      waist_g: this.props.navigation.getParam("waist_g"),
      upperBody_g: this.props.navigation.getParam("upperBody_p"),
      uri: this.props.navigation.getParam("uri"),
      BMI : this.props.navigation.getParam("BMI"),
      sex: this.props.navigation.getParam("sex"),
    };
  }

  componentWillMount() {
    if (this.state.diff === 0) {
        this.diff = setInterval(() => this.calculateLeg(), 1000);
    }
  }
  
  calculateLeg() {
    this.setState({
      diff: Math.abs(this.state.leg_t - this.state.leg_b),
      leg_p: (this.state.diff * this.state.ratio).toFixed(2),
    });
  }

  componentWillUnmount() {
    clearInterval(this.diff);
  }

  render() {
    console.disableYellowBox = true;

    return (
      <View style={styles.container}>
        <Image
          style={styles.imageContainer}
          // source={require("./img/welcome.png")}
          source = {{uri: this.state.uri}}
          resizeMode="contain"
        ></Image>
        <RNRuler />
        <View>
          <View style={styles.textContainer}>
            <TextInput
              style={styles.inputContainer}
              placeholder="골반 높이"
              value={this.state.leg_t}
              onChangeText={(text) => this.setState({ leg_t: text })}
            />
            <TextInput
              style={styles.inputContainer}
              placeholder="발목 높이"
              value={this.state.leg_b}
              onChangeText={(text) => this.setState({ leg_b: text }, this.calculateLeg)}
            />
            <TouchableOpacity
              activeOpacity={0.6}
              style={{ marginLeft:10 , borderRadius: 10,backgroundColor:'darkgray'}}
              onPress={() =>
                this.props.navigation.navigate("TypeChoice", {
                  height_g: this.state.height_g,
                  shoulder_g: this.state.shoulder_g,
                  arm_g: this.state.arm_g,
                  waist_g: this.state.waist_g,
                  upperBody_g: this.state.upperBody_g,
                  leg_p: this.state.leg_p,
                  ratio : this.state.ratio,
                  uri: this.state.uri,
                  BMI : this.state.BMI,
                  sex : this.state.sex,
                })
              }
            >
              <Text style={styles.textStyle}>NEXT</Text>
            </TouchableOpacity>
          </View>
          {/* </View> */}
          <Text style={styles.status}>
            height: {this.state.height_g + "\n"}
            shoulder: {this.state.shoulder_g + "\n"}
            arm: {this.state.arm_g + "\n"}
            waist : {this.state.waist_g + "\n"}
            upperBody : {this.state.upperBody_g + "\n"}
            leg : {this.state.leg_p + "\n"}
          </Text>
        </View>
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
  status: {
    // flex: 1,
    color:'darkgray',
    position: "absolute",
    marginTop: "30%",
    marginLeft: "2%",
  },
  imageContainer: {
    height: "100%",
    width: "100%",
    position: "absolute",
    marginTop: "10%",
  },
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: 'darkgray',
    padding: 20,
    marginLeft: 10,
    borderRadius:4,
    fontSize:15,
  },
  textContainer: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 20,
  },
  textStyle: {
    borderRadius: 5,
    fontSize: 30,
    fontWeight: "bold",
    color:'pink',
    padding: 8,
  },
});
