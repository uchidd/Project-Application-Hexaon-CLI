import React, { Component } from "react";
import { View, StyleSheet, StatusBar, TouchableOpacity, Text } from "react-native";

export default class ModalOptionAction extends Component {

    render(){
        return(
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <TouchableOpacity style={styles.firstLayer} disabled={true}>
                    <TouchableOpacity style={styles.button} onPress={this.props.showModalEditData}>
                        <Text style={styles.text}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this.props.showModalAlertDialog}>
                        <Text style={styles.text}>Delete</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this.props.hideModalOptionAction}>
                        <Text style={styles.text}>Close</Text>
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : "rgba(33, 33, 33, 0.7)",
        flex : 1,
        justifyContent : "center"
    },
    firstLayer : {
        backgroundColor : "#212121",
        margin : 6,
        height : 141,
        borderColor : "#8ECCCC",
        borderWidth : 2,
        borderRadius : 3,
        flexDirection : "column",
        padding : 3
    },
    button : {
        backgroundColor : "#3A4042",
        flex : 1,
        margin : 3,
        borderWidth : 2,
        borderRadius : 3,
        borderColor : "#8ECCCC",
        justifyContent : "center",
        alignItems : "center"
    },
    text : {
        color : "#8ECCCC",
        fontSize : 20,
    }
})