import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class LeftScreen extends Component {
    state = {
            count: 0, height: 0, height_real: 170, arm: 0, shoulder: 0, leg: 0, upperBody: 0,
            point_x1: 0, point_y1: 0, point_x2: 0, point_y2: 0,
            x: 0, y: 0, type: -1,
            height_ratio: 0
          };
          
    static navigationOptions = {
        header: null,
    };

    _doLogin() {
        // do something
        this.props.navigation.replace('TabNavigator')
    }

    render() {
        // const {navigation} = this.props;
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.titleArea}>
                    <Text style={styles.title}>측정을 원하는 부위를 선택하세요.</Text>
                </View>
                <View style={styles.buttonContainer}>
                    {/* 키 */}
                    <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => navigate('SecondScreen', {data: 'something'})}>
                        <Text style={styles.buttonText}>키</Text>
                    </TouchableOpacity>
                    {/* 팔길이 */}
                    <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => this.onClickFunc(2, '팔 끝과 어깨 끝을 터치해 주세요!')}>
                        <Text style={styles.buttonText}>팔</Text>
                    </TouchableOpacity>
                    {/* 다리길이 */}
                    <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => this.onClickFunc(3, '발목 끝과 골반 끝을 터치해 주세요!')}>
                        <Text style={styles.buttonText}>다리</Text>
                    </TouchableOpacity>
                    {/* 어깨넓이 */}
                    <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => this.onClickFunc(4, '양 어깨 끝을 터치해 주세요!')}>
                        <Text style={styles.buttonText}>어깨</Text>
                    </TouchableOpacity>
                    {/* 상체길이 */}
                    <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => this.onClickFunc(5, '목과 골반을 터치해 주세요!')}>
                        <Text style={styles.buttonText}>상체</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.infoArea}>
                    <Text style={styles.statustxt}>
                        height: {(this.state.y * this.state.height_ratio) + " (" + (this.state.height_real - (this.state.y * this.state.height_ratio)) + ")\n"}
                        arm: {this.state.arm + "\n"}
                        leg: {this.state.leg + "\n"}
                        shoulder: {this.state.shoulder + "\n"}
                        upperBody : {this.state.upperBody + "\n"}
                    </Text>
                </View>
            </View>
            /* <View style={styles.buttonArea}>
                    <TouchableOpacity
                        style={styles.button1}
                        onPress={this._doLogin.bind(this)}>
                        <Text style={styles.buttonTitle}>Login</Text>
                    </TouchableOpacity>
                </View> */
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        backgroundColor: 'white',
        // paddingLeft: wp('10%'),
        // paddingRight: wp('10%'),
        // justifyContent: 'center',
        // alignContent:'center',
    },
    titleArea: {
        // flex:1,
        width: '100%',
        marginTop: "20%",
        // padding: wp('10%'),
        alignItems: 'center',
        // justifyContent:"flex-start",
    },
    title: {
        // fontSize: wp('10%'),
        fontSize: 25,
    },
    formArea: {
        width: '100%',
        position: "absolute",
        paddingBottom: wp('10%'),
        // marginTop:20
    },
    textForm: {
        borderWidth: 0.5,
        borderColor: '#888',
        width: '100%',
        height: hp('5%'),
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 5,
    },
    buttonArea: {
        width: '100%',
        height: hp('5%'),
    },
    button1: {
        backgroundColor: "#46c3ad",
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTitle: {
        color: 'white',
    },
    buttonContainer: {
        // flex:2,
        // height: hp('10%'),
        width: "100%",
        // position: "absolute",
        flexDirection: 'column',
        justifyContent: "center",
        alignContent: "center",
        padding: 10,
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#DDDDDD",
        padding: 50,
        marginHorizontal: 50,
        borderRadius: 10,
        marginTop: 30,
    },
    buttonText: {
        fontSize: 35,
        fontWeight: "bold",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
    },
    statustxt: {
    // position: "absolute",
    // marginTop: "30%",
    // marginLeft: "2%",
    fontSize:17,
  },
  infoArea:{
    // height: '100%',
    // height: hp('5%'),
    marginLeft:'5%',
    // marginTop:'5%',
    // justifyContent: "center",
    // alignContent: "center",
    alignItems: "flex-start",
  },
})