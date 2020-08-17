import React, {Component} from 'react';
import { StyleSheet, Platform } from 'react-native';
import { Text, View, Dimensions, ImageBackground, Image} from 'react-native'; 
import { TouchableOpacity } from 'react-native-gesture-handler';
import {ImageManipulator} from 'expo-image-crop';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
// import ImageUploader from 'react-images-upload';


// export default class UploadPicture extends Component {
//     state = {
//         isVisible: false,
//         uri: '',
//     }
//     onToggleModal = () => {
//         const { isVisible } = this.state
//         this.setState({ isVisible: !isVisible })
//     }
//     render() {
//         const { uri, isVisible } = this.state
//         const { width, height } = Dimensions.get('window')
//         return (
//             <ImageBackground
//                 resizeMode="contain"
//                 style={{
//                     justifyContent: 'center', padding: 20, alignItems: 'center', height, width, backgroundColor: 'black',
//                 }}
//                 source={{ uri }}
//             >
//                 <TouchableOpacity onPress={() => this.setState({ isVisible: true })}>
//             <Text>
//               Open Image Editor
//             </Text>
//           </TouchableOpacity>
               
//                 <ImageManipulator
//                     photo={{ uri }}
//                     isVisible={isVisible}
//                     onPictureChoosed={({ uri: uriM }) => this.setState({ uri: uriM })}
//                     onToggleModal={this.onToggleModal}
//                 />
//             </ImageBackground>
//         )
//             }
// }

export default class UploadPicture extends Component {
    state = {
      image: null,
      height: this.props.navigation.getParam('height'),
      BMI: this.props.navigation.getParam('BMI'),
      sex: this.props.navigation.getParam('sex'),
    };
  
    render() {
      let { image } = this.state;
      console.disableYellowBox = true;

  
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>
            키 : {this.state.height + ("\n")}
            BMI : {this.state.BMI + ("\n")}
            성별 : {this.state.sex? "남성": "여성"}
          </Text>
          <TouchableOpacity onPress={this._pickImage}>
            <Text style={{padding:10, fontSize: 20}}>
            갤러리로 이동
            </Text>
          </TouchableOpacity>
        
          {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}

          <TouchableOpacity 
          style={styles.button}
          onPress={() => this.props.navigation.navigate('InputScreen_1',
          {image : this.state.image,
            height : this.state.height,
            BMI : this.state.BMI,
            sex : this.state.sex,
           })}>
            <Text style={styles.title}>
              전송
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
  
    componentDidMount() {
      this.getPermissionAsync();
    }
  
    getPermissionAsync = async () => {
      if (Constants.platform.ios) {
        const { status } = await Permissions.getAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
        //   alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    };
  
    _pickImage = async () => {
      try {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        if (!result.cancelled) {
          this.setState({ image: result.uri });
        }
  
        console.log(result);
      } catch (E) {
        console.log(E);
      }
    };
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
      alignSelf: 'center',
      fontSize: 25,
      fontWeight: "bold",
      padding: 8,
  },
});