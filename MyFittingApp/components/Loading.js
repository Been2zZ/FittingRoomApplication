import React, { Component } from 'react';
import { StyleSheet, Platform } from 'react-native';
import ProgressBar from 'react-native-progress-webview';
import { Text, View } from 'react-native'; 

export default function Loading(){
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Loading...</Text>
        <Text />
        <ProgressBar></ProgressBar>
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems : 'center',
        backgroundColor : '#fff',
    },
});