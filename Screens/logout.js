
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { NavigationEvents } from "react-navigation";
import AsyncStorage from '@react-native-community/async-storage';

class logout extends Component {

    async logout() {
        alert("Are You Sure You Want To LogOut")
        await AsyncStorage.removeItem("IDTOKEN");
        this.props.navigation.navigate("HomeScreen");
    }
    render() {
        return (

            <NavigationEvents
                onDidFocus={() => {
                    this.logout();
                }}
            />
        );
    }
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});







export default logout;