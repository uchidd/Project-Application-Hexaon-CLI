import React, { Component } from "react";
import { Animated, View, StyleSheet, ScrollView, TouchableOpacity, LayoutAnimation, FlatList } from "react-native";
import Header from "../components/header";
import { DrawerActions } from 'react-navigation-drawer';
import CardProduct from "../card/cardProduct"
import Icon from "react-native-vector-icons/FontAwesome5";
import HeaderSearch from "../components/headerSearch";
import HeaderSearchWithButton from "../components/headerSearchWithButton";

export default class ProductPage extends Component {
  static navigationOptions = {
    drawerLabel: "Product",
    drawerIcon: () => (
      <Icon name={"box"} color={"#86C232"} size={19}/>
    ),
  };

  constructor(props) {
    super(props);

    this.arrayHolder = [
      // {
      //   name: "Cahaya Iman Putra Firdaus",
      // },
      // {
      //   name: "Putri Fatimah Sari",
      // },
      // {
      //   name: "Annisa Alya",
      // },
      // {
      //   name: "Akbar Cahya Yusuf",
      // },
      // {
      //   name: "Putu Bambang Wira",
      // },
      // {
      //   name: "Putri Rahman Buana Kuwat",
      // },
      // {
      //   name: "Aisyah Annisa Sari Fatimah",
      // },
      // {
      //   name: "Gallen Turangga",
      // },
      // {
      //   name: "Eka Surya",
      // },
      // {
      //   name: "Adi Suharto Vina Made",
      // },
      // {
      //   name: "Bambang Mansur Wulan Raharjo",
      // },
      // {
      //   name: "Buana Ratna Wahyu",
      // },
      // {
      //   name: "Amir Kusuma",
      // },
      // {
      //   name: "Alya Yuliana Batari",
      // },
      // {
      //   name: "Sulaiman Guntur",
      // },
      // {
      //   name: "Cahyo Bulan Putra Citra",
      // },
    ];
    this.state = {
      searchview: false,
      headerview: true,
      isLoading: true,
      text: "",
      dataSource: [],
      isActionButtonVisible: true
    };
    this._listViewOffset = 0;
  }

  componentDidMount(){
    return fetch('http://sales.hexaon.id/api/getOption',
    {method: 'POST'})
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.products,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  _showSearch() {
    this.setState({ searchview: true });
    this.setState({ headerview: false });
  }

  _showHeader() {
    this.setState({ searchview: false });
    this.setState({ headerview: true });
    this.setState({ text: "" });
  }

  // _searchFilterFunction(text){
  //   const newData = this.arrayHolder.filter(function(item) {
  //     const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
  //     const textData = text.toUpperCase();
  //     return itemData.indexOf(textData) > -1;
  //   });
  //   this.setState({
  //     dataSource: newData,
  //     text: text
  //   })
  // }

  _buttonSearch = () => {
    console.log(this.state.dataSource);
    console.log(this.state.searchData);
    const { text } = this.state;
    const newData = this.state.searchData.filter(item => {
      //test
      const itemData = "${item.name.toUpperCase()}";
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({
      dataSource: newData
    });
  };

  state = {
    isActionButtonVisible: true
  }
  _listViewOffset = 0

  _onScroll = (event) => {
    const isBottomBounce =
      event.nativeEvent.layoutMeasurement.height -
        event.nativeEvent.contentSize.height +
        event.nativeEvent.contentOffset.y >=0;
    const CustomLayoutLinear = {
      duration: 100,
      create: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity },
      update: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity },
      delete: { type: LayoutAnimation.Types.linear, property: LayoutAnimation.Properties.opacity }
    }
    const currentOffset = event.nativeEvent.contentOffset.y
    let direction = currentOffset > 0 && currentOffset > this._listViewOffset ? 'down' : 'up';
    const isActionButtonVisible = direction === 'up'
    if (isActionButtonVisible !== this.state.isActionButtonVisible) {
      LayoutAnimation.configureNext(CustomLayoutLinear)
      this.setState({ isActionButtonVisible })
    }
    if (direction === 'up' && isBottomBounce) {
      direction = 'down';
    }
    this._listViewOffset = currentOffset
  }

  render() {

    return (
      <View style={styles.container}>
        {this.state.headerview ? (
          <Header
            title={"Product"}
            pressIconBars={() =>
              this.props.navigation.dispatch(DrawerActions.openDrawer())
            }
            pressIconSearch={() => this._showSearch()}
            iconSearchColor={"#86C232"}
          />
        ) : null}

        {this.state.searchview ? (
          <HeaderSearch
            pressIconBack={() => this._showHeader()}
            ocText={text => this.setState({ text })}
            searchFunction={() => this._buttonSearch()}
          />
        ) : null}

        <ScrollView
        onScroll={this._onScroll}
        >
          <FlatList
          style={{marginTop: 3, marginBottom: 3}}
            data={this.state.dataSource}
            renderItem={({ item }) => (
              <CardProduct
                name={item.name}
              />
            )}
            enableEmptySections={true}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>

        {this.state.isActionButtonVisible ?<TouchableOpacity
          activeOpacity={0.5}
          onPress={this.SampleFunction}
          style={styles.TouchableOpacityStyle}
        >
          <Animated.View style={styles.fabCircle}>
            <Icon name={"plus"} color={"#222629"} size={24} />
          </Animated.View>
        </TouchableOpacity> : null}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6B6E70"
  },
  TouchableOpacityStyle: {
    position: "absolute",
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    right: 16,
    bottom: 16
  },

  fabCircle: {
    backgroundColor: "#86C232",
    resizeMode: "contain",
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    elevation: 9
  }
});