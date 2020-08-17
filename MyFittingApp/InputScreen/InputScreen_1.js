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

// 키 측정

export default class InputScreen_1 extends Component {
  constructor(props) {
    super(props);

    // length_m : 머리끝 - 발끝
    this.state = {
      height_real: 170,

      length_t: 0,
      length_b: 0,
      height_p: 0,

      uri: this.props.navigation.getParam("image"),
      BMI: this.props.navigation.getParam("BMI"),
      sex: this.props.navigation.getParam("sex"),

      diff: 0,
      ratio: 0,
    };
  }

  componentWillMount() {
    if (this.state.diff === 0 || this.state.ratio === 0) {
      this.diff = setInterval(() => this.calculateLength());
    }
  }

  calculateLength() {
    this.setState({
      diff: Math.abs(this.state.length_t - this.state.length_b),
      ratio: (this.state.height_real / this.state.diff).toFixed(2),
      height_p: (this.state.diff * this.state.ratio).toFixed(2),
    });
  }

  render() {
    console.disableYellowBox = true;

    return (
      <View style={styles.container}>
        <Image
          style={styles.imageContainer}
          source={{ uri: this.state.uri }}
          resizeMode="contain"
        ></Image>
        <RNRuler />
        <View>
          <View style={styles.textContainer}>
            {/* <Text style={{ fontSize: 20, fontWeight: "bold" }}>키</Text> */}
            <TextInput
              style={styles.inputContainer}
              placeholder="머리 끝"
              value={this.state.length_t}
              onChangeText={(text) => this.setState({ length_t: text })}
            />
            <TextInput
              style={styles.inputContainer}
              placeholder="발 끝"
              value={this.state.length_b}
              onChangeText={(text) => this.setState({ length_b: text })}
            />
            <TouchableOpacity
              activeOpacity={0.6}
              style={{ marginLeft:10 , borderRadius: 10,backgroundColor:'darkgray'}}
              onPress={() =>
                this.props.navigation.navigate("InputScreen_2", {
                  ratio: this.state.ratio,
                  height_p: this.state.height_p,
                  uri: this.state.uri,
                  sex: this.state.sex,
                  BMI: this.state.BMI,
                })
              }
            >
              <Text style={styles.textStyle}>NEXT</Text>
            </TouchableOpacity>
          </View>
          {/* </View> */}
          <Text style={styles.status}>
            키 : {this.state.height_p + "\n"}
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
    minHeight:'1%',
    minWidth:'30%',
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
