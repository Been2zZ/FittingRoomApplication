import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Text, View, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class SizeInsert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      waist: 0,
      leg: 0,
      shoulder: 0,
      arm: 0,
      upperBody: 0,
      height: this.props.navigation.getParam("height"),
      BMI: this.props.navigation.getParam("BMI"),
      sex: this.props.navigation.getParam("sex"),
    };
  }

  render() {
    console.disableYellowBox = true;

    return (
      <View style={styles.container}>
        {/* <Text>
          키 : {this.state.height + "\n"}
          BMI : {this.state.BMI + "\n"}
          성별 : {this.state.sex ? "남성" : "여성"}
        </Text> */}
        <View style={{marginTop:'10%', marginRight:'5%', flexDirection: 'row'}}>
        <Text style={styles.font}>상체 길이 :</Text>
        <Text style={{color:'white'}}>dd</Text>
        <TextInput
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            borderWidth: 1,
            padding: 10,
            fontSize: 17,
            minHeight:'1%',
            minWidth:'30%',
          }}
        
          value={this.state.upperBody}
          onChangeText={(text) => this.setState({ upperBody: text })}
        /></View>
  <View style={{marginTop:'10%', marginRight:'5%',flexDirection: 'row'}}>
        <Text style={styles.font}>허리 :</Text>
        <Text style={{color:'white'}}>dd</Text>
        <TextInput
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            borderWidth: 1,
            padding: 10,
            fontSize: 17,
            minHeight:'1%',
            minWidth:'30%',
          }}
         
          value={this.state.waist}
          onChangeText={(text) => this.setState({ waist: text })}
        /></View>

    <View style={{marginTop:'10%', marginRight:'5%',flexDirection: 'row'}}>
        <Text style={styles.font}>다리 길이 : </Text>
        <Text style={{color:'white'}}>dd</Text>
        <TextInput
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            borderWidth: 1,
            padding: 10,
            fontSize: 17,
            minHeight:'1%',
            minWidth:'30%',
          }}
          
          value={this.state.leg}
          onChangeText={(text) => this.setState({ leg: text })}
        /></View>

        <View style={{marginTop:'10%', marginRight:'5%',flexDirection: 'row'}}>
        <Text style={styles.font}>어깨 :</Text>
        <Text style={{color:'white'}}>dd</Text>
        <TextInput
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            borderWidth: 1,
            padding: 10,
            fontSize: 17,
            minHeight:'1%',
            minWidth:'30%',
          }}
       
          value={this.state.shoulder}
          onChangeText={(text) => this.setState({ shoulder: text })}
        /></View>
        <View style={{marginTop:'10%', marginRight:'5%',flexDirection: 'row'}}>
        <Text style={styles.font}>팔 길이 : </Text>
        <Text style={{color:'white'}}>dd</Text>
        <TextInput
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            borderWidth: 1,
            padding: 10,
            fontSize: 17,
            minHeight:'1%',
            minWidth:'30%',
          }}
          
          value={this.state.arm}
          onChangeText={(text) => this.setState({ arm: text })}
        /></View>


        <TouchableOpacity
        style={styles.button}
          onPress={() =>
            this.props.navigation.navigate("TypeChoice", {
              upperBody: this.state.upperBody,
              waist: this.state.waist,
              leg: this.state.leg,
              shoulder: this.state.shoulder,
              arm: this.state.arm,
              height: this.state.height,
              BMI: this.state.BMI,
              sex: this.state.sex,
            })
          }
        >
          <Text style={styles.title}>전송</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  button: {
    fontSize: 25,
    fontWeight: "bold",
    borderWidth:1,
    borderRadius: 5,
    marginTop: '10%',
    padding: 8,
  },
  title:{
        
    fontSize: 20,
    fontWeight: "bold",
    padding: 8,
},
font:{
  fontSize:17,
  fontWeight: "bold",
}
});

export default SizeInsert;
