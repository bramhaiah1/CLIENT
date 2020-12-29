import React, { Component, useState } from "react";
import {

  Button,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  state,
  ActivityIndicator,
  ImageBackground,
  DeviceEventEmitter,
} from "react-native";
import Backgroung from "../Screens/Background";
import { emailValidator, passwordValidator } from "../core/utils";
import axios from "axios"

const AboutScreen = ({ navigation }) => {

  const [email, setEmail] = useState({ value: "", error: "" });
  const RegisterAPI = () => {
    let data = {
      number: email.value
    }
    //alert('OTP sent ')
    //alert(data.number + "1p1")

    axios.post("http://c574a3558a86.ngrok.io/customer", data).then(resp => {
       alert(resp.data)
      if (resp.data === "passwordpage") {
        navigation.navigate("LoginScreen", { email: email.value })

      }
      // let data = []
      // alert(resp)
      let data1 = []
      //alert(resp.data);
      var dataconvert = '';
      dataconvert = JSON.stringify(resp.data);

      // alert(dataconvert);


      data1 = JSON.parse(dataconvert);
      // alert(data1.OTP)
      // alert(data1.OTP)

      var a = data1[0].OTP.toString();
      var p = data1[0].phonenumber.toString();

      alert("OTP:" + a)
      navigation.navigate("OTP", { otp: a, phonenumber: p })
    })
      .catch(err => {
        console.log(err);
      })

  }
  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      return;
    }
  };


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#44bcd8",
      }}
    >
      <Backgroung>
        <Image
          style={{
            flex: 1,
            height: 80,
            width: 80,
            left: 3,
            top: 65,
            bottom: 55,
            position: "absolute"
            // height: 550
          }}
          source={require("../assets/crop.png")}>

        </Image>
        <TextInput
          // onPress={() => this.props.navigation.navigate("Phone")}
          placeholder="Gmail/Phone Number"
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass1}
          value={email.value}
          error={!!email.error}
          errorText={email.error}
          onChangeText={(text) => setEmail({ value: text, error: "" })}
        />
        <View style={styles.TextInputStyleClass2}>
          <TouchableOpacity
            onPress={RegisterAPI}
          // onPress={() => this.props.navigation.navigate("otp")}
          >
            <Text style={styles.buttonText}>Verify</Text>
          </TouchableOpacity>
        </View>

      </Backgroung>
    </View>
  );
}

const styles = StyleSheet.create({
  TextInputStyleClass1: {
    textAlign: "center",
    height: 50,
    borderWidth: 2,
    borderColor: "#05075d",
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    top: 150,
    margin: 50,
    width: 280,
    position: "absolute",
    right: -30

  },
  TextInputStyleClass2: {
    textAlign: "center",
    height: 30,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    margin: 130,
    width: 200,
    left: -50,
    bottom: -20,
    top: 160,
    borderStyle: 'solid',
    borderColor: "darkblue",
    borderWidth: 2,
    position: "absolute"
    // backgroundColor:"#EE82EE",



  },
  buttonText: {
    textAlign: "center",
    fontSize: 17,
    color: "#05075d",
    bottom: -2,
    left: -3,
    fontWeight: "bold",


  },




});

export default AboutScreen;
