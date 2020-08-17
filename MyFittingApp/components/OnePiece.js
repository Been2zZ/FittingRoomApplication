import React, {Component} from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Text, View , TextInput} from 'react-native'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

class OnePiece extends Component {
    constructor(props){
        super(props);
        this.state = {
          totalLengh:'',
          shoulder:'',
          chest:'',
          height: this.props.navigation.getParam('height'),
          BMI: this.props.navigation.getParam('BMI'),
          sex: this.props.navigation.getParam('sex'),
          
          my_upperBody: this.state.getParam('upperBody'),
          
          my_shoulder: this.state.shoulder,
          my_arm: this.state.arm,
        };
    }
    render(){console.disableYellowBox = true;

        return (
            <View style={styles.container}>
              <View style={{flexDirection: 'row'}}>
            <Text>총장 :</Text>
            <TextInput 
            style={{alignItems: 'center', justifyContent:'center', backgroundColor:'white', borderWidth: 1, padding:10,}}
             placeholder="총장을 입력하세요." 
             value={this.state.totalLengh}
             onChangeText = {(text) => this.setState({totalLengh : text})}/>
          </View>
          <View style={{flexDirection: 'row'}}>
          <Text> 어깨 : </Text>
          <TextInput 
          style={{alignItems: 'center', justifyContent:'center', backgroundColor:'white', borderWidth: 1, padding:10,}}
          placeholder="어깨 단면을 입력하세요."
          value={this.state.shoulder}
          onChangeText = {(text) => this.setState({shoulder : text})} />
          </View>
          <View style={{flexDirection: 'row'}}>
          <Text>팔 길이 : </Text>
          <TextInput 
          style={{alignItems: 'center', justifyContent:'center', backgroundColor:'white', borderWidth: 1, padding:10,}}
          placeholder="팔 길이를 입력하세요."
          value={this.state.arm}
          onChangeText = {(text) => this.setState({arm : text})} />
          </View>
          <TouchableOpacity
          style={styles.button} 
          onPress={() => this.props.navigation.navigate('MyMannequin',
          {totalLengh : this.state.totalLengh, 
          shoulder : this.state.shoulder,
          chest: this.state.chest,
          height: this.state.height,
          BMI: this.state.BMI,
          sex: this.state.sex,

          my_arm: this.state.my_arm,
          my_shoulder: this.state.my_shoulder,
          my_upperBody: this.state.upperBody
          })}>
            <Text style={styles.title}>
              전송
            </Text>
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
  borderWidth: 1,
  borderRadius: 5,
  marginTop: "10%",
  padding: 8,
},
title:{
  fontSize: 30,
  fontWeight: "bold",
  padding: 8,
},
});

export default OnePiece;