import React, { Component } from "react";
import { Animated, View, StyleSheet, ScrollView, TouchableOpacity, LayoutAnimation, FlatList } from "react-native";
import Header from "../components/header";
import { DrawerActions } from 'react-navigation-drawer';
import CardClient from "../card/cardClient"
import Icon from "react-native-vector-icons/FontAwesome5";
import HeaderSearch from "../components/headerSearch";
import HeaderSearchWithButton from "../components/headerSearchWithButton";

export default class ClientPage extends Component {
  static navigationOptions = {
    drawerLabel: "Client",
    drawerIcon: () => (
      <Icon name={"users"} color={"#86C232"} size={19}/>
    ),
  };

  constructor(props) {
    super(props);

    this.arrayHolder = [
      // {
      //   id: 1,
      //   name: "BPD BANTEN",
      //   contact: "0254791734",
      //   address: "Jl. Jend. Sudirman",
      //   picname: "Cun Cun",
      //   piccontact: "087776222686"
      // },
      // {
      //   id: 2,
      //   name: "BANK COMMONWEALTH",
      //   contact: "02152962888",
      //   address: "Jl. Gajah Mada",
      //   picname: "Adella",
      //   piccontact: "082388449987"
      // },
      // {
      //   id: 3,
      //   name: "BANK DANAMON",
      //   contact: "0211500090",
      //   address: "MENARA BANK DANAMON",
      //   picname: "Cun Cun",
      //   piccontact: "087776222686"
      // },
      // {
      //   id: 4,
      //   name: "BANK MAYBANK INDONESIA",
      //   contact: "02129228888",
      //   address: "Sentral Senayan (SS)",
      //   picname: "Cun Cun",
      //   piccontact: "087776222686"
      // },
      // {
      //   id: 5,
      //   name: "BANK TABUNGAN NEGARA (BTN)",
      //   contact: "0211500286",
      //   address: "Jl. Gajah Mada",
      //   picname: "Sandy",
      //   piccontact: "081808810913"
      // },
      // {
      //   id: 6,
      //   name: "BANK MAYORA",
      //   contact: "0215655287",
      //   address: "Jl. Tomang Raya",
      //   picname: "Cun Cun",
      //   piccontact: "087776222686"
      // },
      // {
      //   id: 7,
      //   name: "BANK UOB INDONESIA",
      //   contact: "02123506000",
      //   address: "Jl. M.H. Thamrin",
      //   picname: "Cun Cun",
      //   piccontact: "087776222686"
      // },
      // {
      //   id: 8,
      //   name: "BANK MEGA",
      //   contact: "02179175888",
      //   address: "Jl. Kapten Tendean",
      //   picname: "Mawar",
      //   piccontact: "085773243917"
      // },
      // {
      //   id: 9,
      //   name: "BANK NEGARA INDONESIA (BNI)",
      //   contact: "0212511946",
      //   address: "Gedung Grha",
      //   picname: "Mawar",
      //   piccontact: "085773243917"
      // },
      // {
      //   id: 10,
      //   name: "BANK CENTRAL ASIA (BCA)",
      //   contact: "02123588000",
      //   address: "Menara BCA",
      //   picname: "Adella",
      //   piccontact: "082388449987"
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
          dataSource: responseJson.clients,
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
            title={"Client"}
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
              <CardClient
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