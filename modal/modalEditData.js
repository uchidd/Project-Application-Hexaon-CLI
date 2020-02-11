import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Text,
  TextInput
} from "react-native";

export default class ModalEditData extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <TouchableOpacity style={styles.firstLayer} disabled={true}>
          <View style={styles.firstSecondLayer}>
            <Text style={styles.textID}>{this.props.idModal}</Text>
          </View>
          <View style={styles.secondSecondLayer}>
            <View style={styles.firstSecondSecondLayer}>
              <View style={styles.leftTextView}>
                <Text style={styles.text}>Name</Text>
              </View>
              <View style={styles.semicolonTextView}>
                <Text style={styles.semicolonText}>:</Text>
              </View>
              <View style={styles.rightTextViewTop}>
                <TextInput
                  style={styles.topInputText}
                  defaultValue={this.props.nameModal}
                />
              </View>
            </View>
            <View style={styles.secondSecondSecondLayer}>
              <View style={styles.leftTextView}>
                <Text style={styles.text}>Division</Text>
              </View>
              <View style={styles.semicolonTextView}>
                <Text style={styles.semicolonText}>:</Text>
              </View>
              <View style={styles.rightTextViewMid}>
                <TextInput
                  style={styles.centerInputText}
                  defaultValue={this.props.divisionModal}
                />
              </View>
            </View>
            <View style={styles.thirdSecondSecondLayer}>
              <View style={styles.leftTextView}>
                <Text style={styles.text}>Phone</Text>
              </View>
              <View style={styles.semicolonTextView}>
                <Text style={styles.semicolonText}>:</Text>
              </View>
              <View style={styles.rightTextViewMid}>
                <TextInput
                  style={styles.centerInputText}
                  defaultValue={this.props.phoneModal}
                />
              </View>
            </View>
            <View style={styles.fourthSecondSecondLayer}>
              <View style={styles.leftTextView}>
                <Text style={styles.text}>Email</Text>
              </View>
              <View style={styles.semicolonTextView}>
                <Text style={styles.semicolonText}>:</Text>
              </View>
              <View style={styles.rightTextViewBot}>
                <TextInput
                  style={styles.bottomInputText}
                  defaultValue={this.props.emailModal}
                />
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.thirdSecondLayer}
            onPress={this.props.hideModalEditData}
          >
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
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
    height: 235,
    borderColor: "#8ECCCC",
    borderWidth: 2,
    borderRadius: 3,
    flexDirection: "column"
  },
  firstSecondLayer: {
    backgroundColor: "transparent",
    height: 52,
    justifyContent: "center",
    alignItems: "center"
  },
  secondSecondLayer: {
    backgroundColor: "#3A4042",
    height: 132,
    marginLeft: 6,
    marginRight: 6,
    borderColor: "#8ECCCC",
    borderRadius: 3,
    borderWidth: 2,
    flexDirection: "column"
  },
  thirdSecondLayer: {
    backgroundColor: "#3A4042",
    flex: 1,
    margin: 6,
    borderWidth: 2,
    borderRadius: 3,
    borderColor: "#8ECCCC",
    justifyContent: "center",
    alignItems: "center"
  },
  textID: {
    fontSize: 24,
    color: "#8ECCCC",
    fontWeight: "bold"
  },
  firstSecondSecondLayer: {
    backgroundColor: "transparent",
    flex: 1,
    flexDirection: "row"
  },
  secondSecondSecondLayer: {
    backgroundColor: "transparent",
    flex: 1,
    flexDirection: "row"
  },
  thirdSecondSecondLayer: {
    backgroundColor: "transparent",
    flex: 1,
    flexDirection: "row"
  },
  fourthSecondSecondLayer: {
    backgroundColor: "transparent",
    flex: 1,
    flexDirection: "row"
  },
  leftTextView: {
    backgroundColor: "transparent",
    flex: 4,
    justifyContent: "center",
    paddingLeft: 8
  },
  semicolonTextView: {
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  rightTextViewTop: {
    backgroundColor: "transparent",
    flex: 15,
    justifyContent: "center",
    borderBottomWidth: 0.5,
    borderColor: "#8ECCCC",
    marginRight: 8
  },
  rightTextViewMid: {
    backgroundColor: "transparent",
    flex: 15,
    justifyContent: "center",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: "#8ECCCC",
    marginRight: 8
  },
  rightTextViewBot: {
    backgroundColor: "transparent",
    flex: 15,
    justifyContent: "center",
    borderTopWidth: 0.5,
    borderColor: "#8ECCCC",
    marginRight: 8
  },
  text: {
    color: "#8ECCCC",
    fontSize: 16
  },
  semicolonText: {
    fontSize: 16,
    color: "#8ECCCC",
    fontWeight: "bold"
  },
  closeText: {
    color: "#8ECCCC",
    fontSize: 20
  },
  topInputText: {
    marginRight: 8,
    paddingRight: 6,
    fontSize: 16,
    color: "#8ECCCC",
    // borderBottomWidth : 1,
    borderColor: "#8ECCCC"
  },
  centerInputText: {
    marginRight: 8,
    paddingRight: 6,
    fontSize: 16,
    color: "#8ECCCC",
    // borderTopWidth : 1,
    // borderBottomWidth : 1,
    borderColor: "#8ECCCC"
  },
  bottomInputText: {
    marginRight: 8,
    paddingRight: 6,
    fontSize: 16,
    color: "#8ECCCC",
    // borderTopWidth : 1,
    borderColor: "#8ECCCC"
  }
});
