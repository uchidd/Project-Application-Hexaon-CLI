import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Header from "../components/header";
import { DrawerActions } from "react-navigation-drawer";
import Icon from "react-native-vector-icons/FontAwesome";
import ImageSlider from 'react-native-image-slider';



export default class HomePage extends Component {
  static navigationOptions = {
    drawerLabel: "Home"
  };

  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../assets/image1.jpg'),
        require('../assets/image2.jpg'),
        require('../assets/image3.jpg'),
        require('../assets/image4.jpg'),
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title={"Home"}pressIconBars={() => this.props.navigation.dispatch(DrawerActions.openDrawer())} iconSearchColor={"transparent"}/>
        <View style={styles.mainView}>
          <View style={styles.photoSlideView}>
            <ImageSlider style={{flex : 1}} autoPlayWithInterval={3000} images={this.state.images}/>
          </View>
          <View style={styles.firstMenuServicesView}>
            <View style={styles.titleView}>
            <Text style={styles.servicesTitle}>Services</Text>
            </View>
            <View style={styles.secondMenuServicesView}>
              <View style={styles.rowView}>
                <TouchableOpacity style={styles.buttonView} onPress={() => this.props.navigation.navigate('LeadProject')}>
                    <View style={styles.iconView}>
                        <Icon name={'tasks'} color={'#8ECCCC'} size={50}/>
                    </View>
                    <View style={styles.textView}>
                        <Text style={styles.text}>Lead Project</Text>
                    </View>
                </TouchableOpacity>
              </View>
              <View style={styles.rowView}>
                <TouchableOpacity style={styles.buttonView} onPress={() => this.props.navigation.navigate('SalesAgenda')}>
                    <View style={styles.iconView}>
                        <Icon name={'calendar'} color={'#8ECCCC'} size={50}/>
                    </View>
                    <View style={styles.textView}>
                        <Text style={styles.text}>Sales Agenda</Text>
                    </View>
                </TouchableOpacity>
              </View>
              <View style={styles.rowView}>
                <TouchableOpacity style={styles.buttonView} onPress={() => this.props.navigation.navigate('ContactBook')}>
                    <View style={styles.iconView}>
                        <Icon name={'users'} color={'#8ECCCC'} size={50}/>
                    </View>
                    <View style={styles.textView}>
                        <Text style={styles.text}>Contact Book</Text>
                    </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3A4042",
    flexDirection: "column"
  },
  mainView: {
    backgroundColor: "#3A4042",
    flex: 1,
    flexDirection: "column",
    padding: 3
  },
  photoSlideView: {
    backgroundColor: "#212121",
    height: 200,
    borderWidth: 2,
    borderRadius: 3,
    borderColor: "#8ECCCC",
    margin: 3
  },
  firstMenuServicesView: {
    backgroundColor: "#212121",
    flex: 1,
    flexDirection: "column",
    borderWidth: 2,
    borderRadius: 3,
    borderColor: "#8ECCCC",
    margin: 3,
    padding: 3
  },
  titleView : {
    height : 36,
    paddingTop: 3,
    paddingBottom: 3,
    justifyContent : "center",
    alignItems : "center"
  },
  servicesTitle: {
    color: "#8ECCCC",
    fontSize: 24,
  },
  separatorView: {
    borderWidth: 1,
    borderRadius: 3,
    height: 1,
    borderColor: "#8ECCCC",
    margin: 3
  },
  secondMenuServicesView: {
    backgroundColor: "transparent",
    flex: 1
  },
  rowView: {
    backgroundColor: "transparent",
    flex: 1,
    flexDirection: "row"
  },
  buttonView: {
    backgroundColor: "#3A4042",
    borderWidth: 2,
    borderRadius: 3,
    borderColor: "#8ECCCC",
    flex: 1,
    margin: 3,
    padding: 3,
    flexDirection: "row"
  },
  text: {
    color: "#8ECCCC",
    fontSize: 24
  },
  iconView : {
    backgroundColor: "#212121",
    borderWidth: 2,
    borderRadius: 3,
    borderColor: "#8ECCCC",
    flex: 1,
    margin: 3,
    justifyContent : "center",
    alignItems : "center"
  },
  textView : {
    backgroundColor: "#212121",
    borderWidth: 2,
    borderRadius: 3,
    borderColor: "#8ECCCC",
    flex: 2,
    margin: 3,
    justifyContent : "center",
    paddingLeft: 12
  }
});
