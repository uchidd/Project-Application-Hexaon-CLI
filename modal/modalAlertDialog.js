import React, { Component } from "react";
import { View, StyleSheet, StatusBar, TouchableOpacity, Text } from "react-native";

export default class ModalAlertDialog extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <TouchableOpacity style={styles.firstLayer} disabled={true}>
            <View style={styles.firstSecondLayer}>
                <Text style={styles.textTitle}>Confirm Delete</Text>
            </View>
            <View style={styles.secondSecondLayer}>
                <Text style={styles.text}>Are you sure want to delete this item?</Text>
            </View>
            <View style={styles.thirdSecondLayer}>
                <TouchableOpacity style={styles.leftButton} onPress={this.props.hideModalAlertDialog}>
                    <Text style={styles.text}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.rightButton}>
                    <Text style={styles.text}>Delete</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container : {
        backgroundColor : "rgba(33, 33, 33, 0.7)",
        height : 157,
        justifyContent : "center"
    },
    firstLayer : {
        backgroundColor : "#212121",
        margin : 6,
        height : 145,
        borderColor : "#8ECCCC",
        borderWidth : 2,
        borderRadius : 3,
        flexDirection : "column",
        padding : 3
    },
    firstSecondLayer : {
        backgroundColor : "transparent",
        margin : 3,
        height : 40,
        alignItems : "center",
        justifyContent : "center"
    },
    secondSecondLayer : {
        backgroundColor : "#3A4042",
        margin : 3,
        height : 42,
        borderColor : "#8ECCCC",
        borderWidth : 2,
        borderRadius : 3,
        alignItems : "center",
        justifyContent : "center"
    },
    thirdSecondLayer : {
        backgroundColor : "transparent",
        margin : 3,
        flex : 1,
        flexDirection : 'row'
    },
    leftButton : {
        backgroundColor : "#3A4042",
        marginRight : 3,
        flex : 1,
        borderColor : "#8ECCCC",
        borderWidth : 2,
        borderRadius : 3,
        alignItems : "center",
        justifyContent : "center"
    },
    rightButton : {
        backgroundColor : "#3A4042",
        marginLeft : 3,
        flex : 1,
        borderColor : "#8ECCCC",
        borderWidth : 2,
        borderRadius : 3,
        alignItems : "center",
        justifyContent : "center"
    },
    textTitle : {
        fontSize : 24,
        color : "#8ECCCC",
    },
    text : {
        color : "#8ECCCC",
        fontSize : 16
    }
});
