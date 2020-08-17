import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    StatusBar,
    Button,
    TouchableOpacity,
    Alert,
    Image,
} from "react-native";
import { RNRuler } from 'react-native-ruler';

class SecondScreen extends Component {
    _navigate() {
        this.props.navigation.navigate('First');
    }

    render() {
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.rulercontainer}>
                    <RNRuler />
                </View>
                {/* <TouchableOpacity
                    style={styles.wrapButton}
                    onPress={this._navigate.bind(this)}>
                </TouchableOpacity> */}
                <Image
                    style={styles.imageContainer}
                    source={require("../openarms.png")}
                    resizeMode="contain"
                >
                </Image>
                {/* <View> */}
                <RNRuler />
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
    imageContainer: {
        height: "100%",
        width: "100%",
        position: "absolute",
        marginTop: "10%",
    },
    rulercontainer: {
        position: "relative", 
        width: "100%", 
        height: "100%",
    },
})

export default SecondScreen;