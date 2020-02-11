import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Button} from 'react-native';

const userInfo = {email: 'admin', password: '123'}

export default class LoginPage extends Component {

    static navigationOptions = {
        title: 'Login',
      }
    
      constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    
  render(){
    return(
      <View style={styles.container}>
        <Image style={styles.imageHBM} source={require('../resources/hbm.png')}/>
        <View style={styles.containerBody}>
                <View style={styles.viewTextHeader}> 
                    <Text style={styles.textHeaderLeft}>Masuk ke</Text>
                    <Text style={styles.textHeaderRight}> Sales Force - HBM</Text>
                </View>
                <View style={styles.viewInput}>
                    <Text style={styles.textInput}>Email</Text>
                    <TextInput
                    style={styles.input} 
                    autoCompleteType={"email"}                    
                    onChangeText={(email)=>this.setState({email})}
                    value={this.state.email}/>
                </View>
                <View style={styles.viewInput}>
                    <Text style={styles.textInput}>Password</Text>
                    <TextInput 
                    style={styles.input} 
                    autoCompleteType={"password"} 
                    secureTextEntry={true}
                    onChangeText={(password)=>this.setState({password})}
                    value={this.state.password}/>
                </View>
                <View style={styles.viewButton}>
                    <Button title={"Masuk"} onPress={this._login}></Button>
                </View>
            </View>
        <View style={styles.viewCopyright}>
          <View style={styles.viewUpperCopyright}>
            <Text style={styles.textCopyright}>Copyright © 2019</Text>
            <Text style={styles.textCopyrightBold}> HBM</Text>
            <Text style={styles.textCopyright}>,</Text>
          </View>
          <Text style={styles.textCopyright}>All right reserved.</Text>
        </View>
      </View>
    );
  }

  _login = async() => {
    if(userInfo.email === this.state.email && userInfo.password === this.state.password){
        alert('Logged In.');
        this.props.navigation.navigate('DrawerNavigator');
    } else {
        alert('Username or Password is incorrect.');
    }
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    containerBody: {
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        height: 350,
        elevation: 10,
        borderRadius: 5
    },
    imageHBM: {
        resizeMode: 'center',
        width: 350,
        height: 125,
        backgroundColor: '#ffffff'
    },
    viewCopyright: {
        width: 350,
        height: 100,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    viewUpperCopyright : {
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    textCopyright: {
        fontSize: 12,
        color: '#000000',
    },
    textCopyrightBold: {
        fontSize: 12,
        color: '#000000',
        fontWeight: 'bold'
    },
    viewTextHeader: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25
    },
    textHeaderLeft: {
        fontSize: 23,
        color: '#000000',
        textShadowColor: '#000000',
    },
    textHeaderRight: {
        fontSize: 22,
        color: '#000000',
        fontWeight: 'bold'
    },
    viewInput: {
        backgroundColor: '#ffffff',
        height: 75,
        width: 300,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    textInput: {
        fontSize: 18,
        color: '#000000',
    },
    input: {
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 3,
        paddingStart: 10,
        paddingEnd: 10,
        paddingTop: 5,
        paddingBottom: 5
    },
    viewButton: {
        backgroundColor: '#ffffff',
        height: 100,
        width: 300,
        justifyContent: 'center'
    }
})