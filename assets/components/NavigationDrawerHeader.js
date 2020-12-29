/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from "react";

//Import all required component
import { View, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";

import { DrawerActions } from "react-navigation-drawer"

const NavigationDrawerHeader = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.dispatch(DrawerActions.toggleDrawer())
    console.log("hi", DrawerActions.toggleDrawer())
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Entypo name="menu" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};
export default NavigationDrawerHeader;
