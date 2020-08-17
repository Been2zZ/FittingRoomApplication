import React, {Component} from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Text, View , Image, Button} from 'react-native'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class TypeChoice extends Component {
  state = {
    upperBody: this.props.navigation.getParam('upperBody'),
    waist: this.props.navigation.getParam('waist'),
    leg: this.props.navigation.getParam('leg'),
    shoulder: this.props.navigation.getParam('shoulder'),
    arm: this.props.navigation.getParam('arm'),
    height: this.props.navigation.getParam('height'),

    BMI: this.props.navigation.getParam('BMI'),
    sex: this.props.navigation.getParam('sex'),
  }

    render() {
      console.disableYellowBox = true;

      return (
        <View style={styles.container}>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Top", {
                upperBody: this.state.upperBody,
                shoulder: this.state.shoulder,
                arm: this.state.shoulder,
                // forearm: this.state.forearm,
                height: this.state.height,
                BMI: this.state.BMI,
                sex: this.state.sex,
              })}
            >
              <Text>Top</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Bottom", {
                waist: this.state.waist,
                leg: this.state.leg,
                height: this.state.height,
                sex: this.state.sex,
                BMI: this.state.BMI,
                upperBody: this.state.upperBody,
                waist: this.state.waist
              })}
            >
              <Text>Bottom</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("OnePiece", {
                height: this.state.height,
                sex: this.state.sex,
                BMI: this.state.BMI,
                upperBody: this.state.upperBody,
                shoulder: this.state.shoulder,
                arm: this.state.arm,
              })}
            >
              <Text>One-Piece</Text>
            </TouchableOpacity>
          </View>
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
    alternativeLayoutButtonContainer: {
      margin: 20,
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  });