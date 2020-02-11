import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Text,
  Dimensions
} from "react-native";
 
export default class ModalDetailsContactBook extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <TouchableOpacity style={styles.firstLayer} disabled={true}>

          <Text style={{color:"#fff"}}></Text>

        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(33, 33, 33, 0.7)",
    flex: 1,
    justifyContent: "center"
  },
  firstLayer: {
    backgroundColor: "#212121",
    margin: 6,
    borderColor: "#8ECCCC",
    borderWidth: 2,
    borderRadius: 3,
    flexDirection: "column",
    alignSelf : "stretch",
    padding : 10,
   },
});
