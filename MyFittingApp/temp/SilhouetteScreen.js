import React, { Component } from "react";

import {
    View,
    Image
  } from "react-native";

class SilhouetteScreen extends Component {
    renderLineX = (leftPosition, rightPosition, topPosition) => {
      return (
        <View
            style={[
              styles.line,
              {
                left: leftPosition,
                right: rightPosition,
                top : topPosition,
              }
            ]}
          />
      );
    };
    renderLineY = (topPosition, bottomPosition, leftPosition) => {
      return (
        <View
            style={[
              styles.line,
              {
                top : topPosition,
                bottom : bottomPosition,
                left: leftPosition,
              }
            ]}
          />
      );
    };
    render() {
      return(
        <View style={styles.container}>
          {/* 상, 하, 좌, 우 */}
          {/* {this.renderImage(10, 10, 10, 10)} */}
          <Image
              style={styles.imageContainer}
              source={require("./components/images/test.png")}
              resizeMode="contain"
            />
            {this.renderLineX('33%', '33%', '70%')}
  
            {this.renderLineY('29%', '66%', '32%')}
            {this.renderLineY('29%', '66%', '68%')}
            {/* {this.renderLineX('32%', '32%', '31%')} */}
  
            {this.renderLineX('28%', '28%', '55%')}
  
            {this.renderLineX('18%', '71%', '45%')}
            {this.renderLineX('72%', '17%', '45%')}
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
    line: {
      borderWidth: 0.5,
        borderColor:'black',
        margin:10,
      color: 'red',
    },
  });