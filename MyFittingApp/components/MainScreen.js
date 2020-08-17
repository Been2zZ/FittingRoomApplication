import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import { Text, View , Image, TouchableOpacity, ScrollView} from 'react-native';

export default class MainScreen extends Component{

    goWeightHeight=()=>{
        this.props.navigation.navigate('WeightHeight');
    }

    render(){
      console.disableYellowBox = true;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Fitting Room</Text>
        <Image
          style={{ width: 400, height: 400, marginTop: 25 }}
          source={require("./pngwing.com.png")}
        />
        <TouchableOpacity onPress={this.goWeightHeight}>
          <Text style={styles.button}>start</Text>
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
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: "bold",
        marginTop : '20%',
        padding: 8,
    },
    button:{
        fontSize: 25,
        fontWeight: "bold",
        borderWidth:1,
        borderRadius: 5,
        marginTop: '10%',
        padding: 8,
    }
});