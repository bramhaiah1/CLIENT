import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  button,
  Image,
  Div,
  StatusBar,
  ImageBackground
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";


export default class Homescreen extends Component {
 
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={false}/>
       
        <Text style={styles.Textsize}>RENTON</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("location")}
        >
          <Text style={styles.buttonText}>Click To Continue</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    flex: 1
    
   
  },
  button: {
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#05075d",
    marginTop: 480,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    margin: 35,
    position: "absolute",
    height:50,
    top:20
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  imageali: {
    borderRadius: 20,
    height: 300,
    width: 330,
    margin:15,
    top:15,
    // borderRadius: 200/2
    
  },
  Textsize:{
    fontSize:60,
    textAlign:"center",
    
    
  }
  
});