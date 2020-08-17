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

// 어깨 측정

export default class InputScreen_2 extends Component {
  constructor(props) {
    super(props);

    //f : 처음 l: 끝 p: 계산해서 보낼 값. g : 입력받아 넘어온 값
    this.state = {
      shoulder_f: 0,
      shoulder_l: 0,
      shoulder_p: 0,

      diff: 0,
      ratio: this.props.navigation.getParam("ratio"),
      height_g: this.props.navigation.getParam("height_p"),
      uri: this.props.navigation.getParam("uri"),
      sex: this.props.navigation.getParam("sex"),
      BMI : this.props.navigation.getParam("BMI"),
    };
  }

  componentWillMount() {
    if (this.state.diff === 0) {
        this.diff = setInterval(() => this.calculateShoulder(),1000);
    }
  }

  calculateShoulder() {
    this.setState({
      diff: Math.abs(this.state.shoulder_f - this.state.shoulder_l),
      shoulder_p: (this.state.diff * this.state.ratio).toFixed(2),
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
              placeholder="어깨 시작"
              value={this.state.shoulder_f}
              onChangeText={(text) => this.setState({ shoulder_f: text })}
            />
            <TextInput
              style={styles.inputContainer}
              placeholder="어깨 끝"
              value={this.state.shoulder_l}
              onChangeText={(text) => this.setState({ shoulder_l: text }, () => this.calculateShoulder)}
            />
            {/* <View style={styles.nextButtonContainer}> */}
            <TouchableOpacity
              activeOpacity={0.6}
              style={{ marginLeft:10 , borderRadius: 10,backgroundColor:'darkgray'}}
              onPress={() =>
                this.props.navigation.navigate("InputScreen_3", {
                  height_g: this.state.height_g,
                  ratio: this.state.ratio,
                  shoulder_p: this.state.shoulder_p,
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
            shoulder: {this.state.shoulder_p + "\n"}
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
