import React, { Component} from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Text, View , Button, TouchableOpacity} from 'react-native'; 

export default class FirstChoice extends Component {
  componentDidMount() {
    this.calculateBMI();
  }

  state = {
    height: this.props.navigation.getParam('height'),
    weight: this.props.navigation.getParam('weight'),
    sex: this.props.navigation.getParam('sex'),
    BMI: 0,
  }
    goSizeInsert = () => {
      this.props.navigation.navigate('SizeInsert',{height : this.state.height, BMI : this.state.BMI, sex : this.state.sex});
      // this.props.navigation.navigate('SizeInsert');
    }

    goUploadPicture = ()=>{
      this.props.navigation.navigate('UploadPicture',{height : this.state.height, BMI : this.state.BMI, sex : this.state.sex});
      // this.props.navigation.navigate('UploadPicture');
    }

    calculateBMI = () => {
      var temp = (this.state.weight / ((this.state.height) * this.state.height)) * 10000;
      if(temp < 18.5) {
        this.setState({
          BMI: 1
        })
      }
      else if(temp < 23) {
        this.setState({
          BMI: 2
        })
      }
      else if(temp < 30) {
        this.setState({
          BMI: 3
        })
      }
      else if(temp < 35) {
        this.setState({
          BMI: 4
        })
      }
      else {
        this.setState({
          BMI: 5
        })
      }
    }
  
    render() {
      console.disableYellowBox = true;

      return (
        
        <View style={styles.container}>
          {/* <Text>
              키 : {this.state.height + ("\n")}
              BMI : {this.state.BMI + ("\n")}
              성별 : {this.state.sex? "남성": "여성"}
          </Text> */}

          <View>
            <TouchableOpacity  
            style={styles.button}
            onPress={this.goSizeInsert}>
              <Text style={styles.title}>직접 입력</Text>
              </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity 
             style={styles.button}
             onPress={this.goUploadPicture}>
              <Text style={styles.title}>사진 선택</Text>
              </TouchableOpacity>
          </View>
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
    button:{
      alignSelf: 'center',
      fontSize: 25,
      fontWeight: "bold",
      borderWidth:1,
      borderRadius: 5,
      marginTop: '30%',
      padding: 8,
  },
  title:{
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: "bold",
    padding: 8,
},
    // alternativeLayoutButtonContainer: {
    //   margin: 20,
    //   flexDirection: 'row',
    //   justifyContent: 'space-between'
    // }
  });