import React, {Component} from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Text, View , TextInput} from 'react-native'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

class Top extends Component {
    constructor(props){
        super(props);
        this.state = {
          totalLengh:'',
          shoulder:'',
          arm:'',

          height: this.props.navigation.getParam('height'),
          BMI: this.props.navigation.getParam('BMI'),
          sex: this.props.navigation.getParam('sex'),

          my_shoulder: this.props.navigation.getParam('shoulder'),
          my_arm: this.props.navigation.getParam('arm'),
          my_upperBody: this.props.navigation.getParam('upperBody')
        };
    }
    render(){
      console.disableYellowBox = true;

        return (
          <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
            <Text>총장 :</Text>
            <TextInput
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                borderWidth: 1,
                padding: 10,
              }}
              placeholder="총장을 입력하세요."
              value={this.state.totalLengh}
              onChangeText={(text) => this.setState({ totalLengh: text })}
            /></View>
            <View style={{flexDirection: 'row'}}>
            <Text> 어깨 : </Text>
            <TextInput
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                borderWidth: 1,
                padding: 10,
              }}
              placeholder="어깨 단면을 입력하세요."
              value={this.state.shoulder}
              onChangeText={(text) => this.setState({ shoulder: text })}
            /></View>
            <View style={{flexDirection: 'row'}}>
            <Text>팔 길이 : </Text>
            <TextInput
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                borderWidth: 1,
                padding: 10,
              }}
              placeholder="팔 길이를 입력하세요."
              value={this.state.arm}
              onChangeText={(text) => this.setState({ arm: text })}
            /></View>

            {/* <Text>허리/밑단 : </Text>
          <TextInput 
          style={{alignItems: 'center', justifyContent:'center', backgroundColor:'white', borderWidth: 1, padding:10,}}
          placeholder="밑단 단면을 입력하세요."
          value={this.state.weight}
          onChangeText = {(text) => this.setState({weight : text})} /> */}

            <TouchableOpacity
             style={styles.button}
              onPress={() =>
                this.props.navigation.navigate("MyMannequin", {
                  totalLengh: this.state.totalLengh,
                  shoulder: this.state.shoulder,
                  arm: this.state.arm,
                  height: this.state.height,
                  sex: this.state.sex,
                  BMI: this.state.BMI,

                  my_shoulder: this.state.my_shoulder,
                  my_arm: this.state.my_arm,
                  my_upperBody: this.state.my_upperBody,
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
  container:{
    flex: 1,
    alignItems : 'center',
    backgroundColor : '#fff',
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
      
  fontSize: 30,
  fontWeight: "bold",
  padding: 8,
},

});

export default Top;