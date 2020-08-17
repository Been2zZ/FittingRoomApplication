import React, {Component} from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Text, View , TextInput} from 'react-native'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

class Bottom extends Component {
    constructor(props){
        super(props);
        this.state = {
          waist: '',
          totalLength:'',

          height: this.props.navigation.getParam('height'),
          BMI: this.props.navigation.getParam('BMI'),
          sex: this.props.navigation.getParam('sex'),

          my_waist: this.props.navigation.getParam('waist'),
          my_upperBody: this.props.navigation.getParam('upperBody'),
        };
    }
    render(){
      console.disableYellowBox = true;

        return (
            <View style={styles.container}>
              <View style={{flexDirection: 'row'}}>
            <Text>허리 :</Text>
            <TextInput 
            style={{alignItems: 'center', justifyContent:'center', backgroundColor:'white', borderWidth: 1, padding:10,}}
             placeholder="허리 단면을 입력하세요." 
             value={this.state.waist}
             onChangeText = {(text) => this.setState({waist : text})}/>
            </View>
            <View style={{flexDirection: 'row'}}>
            <Text>총 길이 : </Text>
          <TextInput 
          style={{alignItems: 'center', justifyContent:'center', backgroundColor:'white', borderWidth: 1, padding:10,}}
          placeholder="총 길이를 입력하세요."
          value={this.state.totalLength}
          onChangeText = {(text) => this.setState({totalLength : text})} />
          </View>
          <TouchableOpacity 
          style={styles.button}
          onPress={() => this.props.navigation.navigate('MyMannequin',
          {waist : this.state.waist,
            totalLength: this.state.totalLength,
            height: this.state.height,
            BMI: this.state.BMI,
            sex: this.state.sex,

            my_waist: this.state.my_waist,
            my_upperBody: this.state.my_upperBody
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
title:{
        
  fontSize: 30,
  fontWeight: "bold",
  padding: 8,
},
button: {
  fontSize: 25,
  fontWeight: "bold",
  borderWidth: 1,
  borderRadius: 5,
  marginTop: "10%",
  padding: 8,
},
});

export default Bottom;