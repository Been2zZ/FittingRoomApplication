import React, { Component } from "react";
import { StyleSheet, Platform } from "react-native";
import { Text, View, TextInput, Button, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class WeightHeight extends Component {
  constructor(props) {
    super(props);
    //sex의 경우 T가 남성, F가 여성
    this.state = { height: "", weight: "", sex: null, BMI: ""};
  }

  onChangeHeight = (heights) => {
    this.setState({ height: heights });
  };

  changeSex = () => {
    this.state.sex
      ? this.setState({ sex: false })
      : this.setState({ sex: true });
  };

  //BMI계산하는 기능을 추가해서 다른 컴포넌트들에도 넘겨주어야 함!
  calculateBMI = () => {};

  navigateToFirstChoice = () => {
    if (this.state.height == 0) {
      Alert.alert("키를 입력해 주세요");
      return 0;
    }
    if (this.state.weight == 0) {
      Alert.alert("몸무게를 입력해 주세요");
      return 0;
    }
    this.props.navigation.navigate("FirstChoice", {
      height: this.state.height,
      weight: this.state.weight,
      sex: this.state.sex,
    });
  };
  render() {
    // console.log(this.state);
    console.disableYellowBox = true;
    return (
      <View style={styles.container}>
        <View style={{marginTop:'20%',flexDirection: 'row'}}>
        
          <Text style={{color:'white'}}>dd</Text>
            <Text style={styles.font}>키 :</Text>
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
          value={this.state.height}
          onChangeText={(text) => this.setState({ height: text })}
        />
          </View>
          <View style={{marginTop:'10%', marginRight:'5%'}}>
          <View style={{flexDirection: 'row'}}>
          <Text style={styles.font}> 몸무게 : </Text>
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
          value={this.state.weight}
          onChangeText={(text) => this.setState({ weight: text })}
        />
        </View>
        </View>
        
          <View style={{flexDirection: 'row', marginBottom:'30%'}}>
        <View style={styles.button}>
          <Button title="남성" onPress={this.changeSex} />
          </View>
          <Text style={{color:'white'}}>dd</Text>
          <View style={styles.button}>
          <Button title="여성" onPress={this.changeSex} />
        </View></View>
        {/* <Text >
          성별 :{this.state.sex ? <Text >남성</Text> : <Text style={styles.title}>여성</Text>}
        </Text> */}

        <TouchableOpacity
          style={styles.button}
          onPress={this.navigateToFirstChoice}
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
    borderWidth: 1,
    borderRadius: 5,
    marginTop: "10%",
    padding: 8,
  },
  title:{
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: "bold",
    padding: 8,
},
font:{
  fontSize:17,
  fontWeight: "bold",
}

});

export default WeightHeight;
