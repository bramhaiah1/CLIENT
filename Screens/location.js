import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationEvents } from "react-navigation";
export default class location extends Component {
    state = {
        location: null
    };

    findCoordinates = () => {
       
        navigator.geolocation.getCurrentPosition(
            position => {
                const location = JSON.stringify(position);
                
                console.log(location)
                this.setState({ location });
            },
            error => Alert.alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
        this.props.navigation.navigate("AllProducts")
    };

    render() {
        return (
            <View style={styles.container} >
                <NavigationEvents
          onDidFocus={() => {
            this.findCoordinates();
          }}
        />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
})