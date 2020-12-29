
import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { FontAwesome } from "@expo/vector-icons";
import Background from "../Screens/Background"
class FirstScreen extends Component {
  state = {
    backgroundColor: 'black',
    backgroundColor2: 'black',
    pressed: false,
  };
  state = {

    loading: true
  }

  async componentDidMount() {
    try {
      const value = await AsyncStorage.getItem('IDTOKEN');

      if (value !== null) {
        // We have data!!
        //alert(value);
        this.props.navigation.navigate("AllProducts");


      } else {
        this.setState({ loading: false })

      }
    } catch (error) {
      // Error retrieving data
    }
  }

  render() {
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
            left: 20,
            top: 60,
            bottom: 40,
            position: "absolute"


            // height: 550
          }}
          source={require("../assets/crop.png")}
        ></Image>
        <Text style={styles.TextRenton}>RENTON</Text>
        <Text style={styles.TextRenton1}>Let's rent for All</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: hp("5%"),
            paddingHorizontal: hp("2.5%"),
          }}
        >
          <TouchableOpacity


            style={styles.SubmitButtonStyle}
            onPress={() => this.props.navigation.navigate("About")}
          >
            <Text style={styles.text1}>
              Start with phone number/Email
                  <Text>   </Text>
            </Text>
            <FontAwesome
              name="arrow-circle-right"
              style={styles.imageview}
            />

          </TouchableOpacity>
        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  TextRenton: {
    fontSize: 40,
    fontWeight: "bold",
    top: 150,
    left: 90,
    textShadowColor: "rgba(255, 255, 255, 1)",
    textShadowOffset: { width: 1, height: 2 },
    textShadowColor: "blue",
    elevation: 10,
    textShadowRadius: 2,
    position: "absolute"

  },
  TextRenton1: {
    fontSize: 25,
    top: 240,
    left: 90,
    color: "#FFFFFF",
    position: "absolute"

  },
  SubmitButtonStyle: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    width: 270,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    top: 310,
    paddingRight: 5,
    backgroundColor: "#FFFFFF",
    paddingLeft: 3,
    position: "absolute",
    marginVertical: 10,
    right: 20,
    height: 50
  },
  text1: {
    fontWeight: "bold",
    left: 17,
    fontSize: 15,
    bottom: 15,

    position: "absolute"
  },
  imageview: {
    fontSize: 20,

    top: 15,
    left: 245,

    flex: 1,

    position: "absolute"
  },
});

export default FirstScreen;
