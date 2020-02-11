import React, {Component} from "react";
import { View, Text } from "react-native";
import Header from "./headers/header";
import { MenuProvider } from "react-native-popup-menu";
import HeaderSearch from "./headers/headerSearch";
import HeaderSearchWithButton from "./headers/headerSearchWithButton";
import DrawerNavigator from "./navigation/DrawerNavigator";

export default class App extends Component{

  render(){
    return(
      <MenuProvider>
        <DrawerNavigator/>
      </MenuProvider>
    )
  }
}