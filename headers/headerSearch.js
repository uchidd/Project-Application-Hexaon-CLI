import React, { Component } from "react";
import { View, StyleSheet, StatusBar, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default class HeaderSearch extends Component {
    render(){
        return(
        <View style={styles.container}>
            <StatusBar hidden={true}/>
            <View style={styles.header}>
                <View style={styles.headerIconBars}>
                  <Icon style={styles.icon} name={'chevron-left'} color={'#86C232'} size={24} onPress={this.props.pressIconBack}/>
                </View>
                <View style={styles.headerSearch}>
                    <TextInput
                    style={styles.input}
                    // value={this.props.valueInput}
                    // onChangeText={this.props.ocText}
                    placeholder={"Search"}
                    placeholderTextColor={"#61892F"}
                    underlineColorAndroid={"transparent"}/>
                </View>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#fff',
    },
    header : {
      flexDirection : "row",
      backgroundColor : '#222629',
      height : 56,
    }, 
    headerIconBars : {
      backgroundColor : 'transparent',
      height : 56,
      width : 56
    },
    headerSearch : {
      flex : 1,
      justifyContent : "center",
      height : 56,
      backgroundColor : "transparent"
    },
    icon : {
      margin : 16
    },
    input : {
        borderWidth : 2,
        borderRadius : 3,
        borderColor : "#86C232",
        height : 40,
        marginTop : 8,
        marginRight : 8, 
        marginBottom : 8,
        paddingLeft : 8,
        paddingRight : 8,
        color : "#86C232",
        fontSize : 20,
    }
})