import React, { memo, useState } from "react";
import {

  Button,
  View,
  Text,
  StyleSheet,

  TouchableOpacity,
  Image,
  state,
  ActivityIndicator,
  ImageBackground,
  DeviceEventEmitter,
} from "react-native";
import Backgroung from "../Screens/Background";
import TextInput from "../Screens/TextInput";
import {
  emailValidator,
  passwordValidator,
  nameValidator,
} from "../core/utils";
import { Entypo } from '@expo/vector-icons';
import { theme } from "../core/theme";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios"

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const _onLoginPressed = () => {
    const email1 = navigation.getParam('email', '')
    //const emailError = emailValidator(email1);
    const passwordError = passwordValidator(password.value);
    // if (emailError || passwordError) {
    //   alert("please enter a valid email")
    //   setEmail({ ...email, error: emailError });
    //   setPassword({ ...password, error: passwordError })
    // }
    // else 
    {
      let data = {
        email: email1,
        password: password.value,
      }
      // alert('email: ' + data.number + ' password: ' + pass)
      axios.post("http://c574a3558a86.ngrok.io/login", data).then(resp => {
        // alert(resp.data)
        if (resp.data === "Admin Login") {
          navigation.navigate('Productadd')

        } else {
          if (resp.data === "Invalid password") {
            alert('Invalid password')
          } else {
            navigation.navigate("AllProducts")
          }
        }
      })
        .catch(err => {
          console.log(err);
        })
    }
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#44bcd8",
      }}
    >

      <Image
        style={{
          flex: 1,
          height: 80,
          width: 80,
          left: 5,
          top: 65,
          bottom: 55,
          position: "absolute"
          // height: 550
        }}
        source={require("../assets/crop.png")}>

      </Image>
      <View style={styles.icon}>
        <Entypo name="lock" size={44} color="darkblue" />
      </View>
      

      <View style={styles.passwordview}>
        <Text style={styles.password}>Enter password</Text>
      </View>
      <View style={styles.inputText1} >
        <View style={styles.inputContainer2}>
          <Entypo style={styles.inputIcons} name="lock" size={24} color="black" />

          <TextInput

            placeholder={"Password"}
            secureTextEntry={true}
            placeholderTextColor={"rgba(255,255,255,0.7)"}
            underlineColorAndroid="transparent"
            returnKeyType="done"
            value={password.value}
            onChangeText={(text) => setPassword({ value: text, error: "" })}
            error={!!password.error}
            errorText={password.error}

          />

          <TouchableOpacity style={styles.btneye}>
            <FontAwesome name="eye" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate("About")}
        >
          <Text style={styles.label}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginbutton} onPress={_onLoginPressed}>
        <View style={styles.loginText1}>
          <Text style={styles.loginText}>Login</Text>
        </View>
      </TouchableOpacity>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    width: 360,
    height: 600,
    backgroundColor: "#44bcd8"
  },
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
    top: -25,
    right: 10
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  label: {
    color: "darkblue",
    top: 360,
    right: 30,
    position: "absolute"


  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,

  },
  inputtext: {
    height: 45,

    top: -10,
    right: 10,
    width: 270
  },
  passwordview: {
    top: -10,
    left: 10,



  },
  password: {


    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    top: 245,
    left: 90,
    position: "absolute"
  },
  icon: {
    left: 150,
    bottom: 240,
    height: 58,
    width: 68,
    alignItems: 'center',
    backgroundColor: "#fff",
    position: 'absolute',
    // border: '2px solid',
    borderRadius: 50,
    top: 160,
    position: "absolute",
    borderStyle: 'solid',
    borderColor: "darkblue",
    borderWidth: 1
  },
  inputContainer2: {
    marginTop: 50,
    top: -15,
    // position: "absolute",
  },

  inputIcons: {
    position: "absolute",
    top: 20,
    left: 40,
  },
  loginbutton: {
    borderRadius: 20,
    backgroundColor: "white",
    height: 40,
    alignItems: "center",
    // border: '2px solid',
    // position:"absolute",
    top: 390,
    width: 230,
    left: 70,
    borderStyle: 'solid',
    borderColor: "darkblue",
    borderWidth: 1,
    position: "absolute"


  },
  loginText: {
    fontWeight: "bold",
    fontSize: 21,
    alignItems: "center",
    alignContent: "center",
    color: "darkblue",



  },
  btneye: {
    position: "absolute",
    top: 20,
    right: 37,
  },
  loginText1: {
    top: 3
  },
  inputText1: {
    top: 240,
    left: 5,
    position: "absolute"

  }

});


export default memo(LoginScreen);
