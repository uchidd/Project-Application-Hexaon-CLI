import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import Header from "../components/header";
import { DrawerActions } from "react-navigation-drawer";
import Icon from "react-native-vector-icons/FontAwesome5";

export default class HomePage extends Component {
  static navigationOptions = {
    drawerLabel: "Home",
    drawerIcon: () => (
      <Icon name={"home"} color={"#86C232"} size={19}/>
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Header
          title={"Home"}
          pressIconBars={() =>
            this.props.navigation.dispatch(DrawerActions.openDrawer())
          }
          iconSearchColor={"transparent"}
        />
        <ScrollView style={styles.mainView}>
          <View style={styles.rowView}>
            <TouchableOpacity style={styles.buttonleft} onPress={() => this.props.navigation.navigate('AuthorityUser')}>
              <View style={styles.iconView}>
                <Icon name={"user-cog"} color={"#86C232"} size={40} />
              </View>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>Authority User</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonmid} onPress={() => this.props.navigation.navigate('AuthorityRole')}>
              <View style={styles.iconView}>
                <Icon name={"users-cog"} color={"#86C232"} size={40} />
              </View>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>Authority Role</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonright} onPress={() => this.props.navigation.navigate('AuthorityRole')}>
              <View style={styles.iconView}>
                <Icon name={"users-cog"} color={"#86C232"} size={40} />
              </View>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>Authority Role</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.rowView}>
            <TouchableOpacity style={styles.buttonleft} onPress={() => this.props.navigation.navigate('AuthorityUser')}>
              <View style={styles.iconView}>
                <Icon name={"user-cog"} color={"#86C232"} size={40} />
              </View>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>Authority User</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonmid} onPress={() => this.props.navigation.navigate('AuthorityRole')}>
              <View style={styles.iconView}>
                <Icon name={"users-cog"} color={"#86C232"} size={40} />
              </View>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>Authority Role</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonright} onPress={() => this.props.navigation.navigate('AuthorityRole')}>
              <View style={styles.iconView}>
                <Icon name={"users-cog"} color={"#86C232"} size={40} />
              </View>
              <View style={styles.titleView}>
                <Text style={styles.titleText}>Authority Role</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6B6E70",
    flexDirection: "column"
  },
  mainView: {
    backgroundColor: "transparent",
    flex: 1,
    flexDirection: "column",
    margin: 3,
    padding: 3
  },
  rowView: {
    backgroundColor: "transparent",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  buttonleft: {
    height: 110,
    width: 110,
    backgroundColor: "#222629",
    alignSelf: "center",
    // flex: 1,
    // flexDirection: "column",
    margin: 3,
    padding: 3,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: "#86C232"
  },
  buttonmid: {
    height: 110,
    width: 110,
    backgroundColor: "#222629",
    alignSelf: "center",
    // flex: 1,
    // flexDirection: "column",
    margin: 3,
    padding: 3,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: "#86C232"
  },
  buttonright: {
    height: 110,
    width: 110,
    backgroundColor: "#222629",
    alignSelf: "center",
    // flex: 1,
    // flexDirection: "column",
    margin: 3,
    padding: 3,
    borderWidth: 3,
    borderRadius: 5,
    borderColor: "#86C232"
  },
  iconView: {
    backgroundColor: "transparent",
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  titleView: {
    backgroundColor: "#474B4F",
    flex: 1,
    margin: 3,
    borderWidth: 2,
    borderRadius: 3,
    borderColor: "#61892F",
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    color: "#86C232",
    fontSize: 14,
    textAlign: "center"
  }
});
