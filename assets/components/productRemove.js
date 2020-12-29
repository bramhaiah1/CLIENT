import React, { useState, Component, } from "react";
import { Button, View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import axios from "axios"
import { AntDesign } from "@expo/vector-icons";


import { createStackNavigator, createAppContainer } from "react-navigation";
export default class productRemove extends Component {
    constructor(props) {

        super(props)

        this.state = {
            name: '',
            loc: ''
        }



    }
    name = event1 => {
        this.state.name = event1.target.value;
    }
    loc = event1 => {
        this.state.loc = event1.target.value;
    }
    fileuploadhandler = () => {
        const { loc } = this.state;
        const { name } = this.state;
        let data = {
            name: name,
            loc: loc
        }

        axios.post('http://localhost:3000/delete', data).then(res => {
            alert(res.data);
            console.log(res.data)
        });

    }

    render() {

        return (

            <View style={{ backgroundColor: '#b19cd9 ', flex: 1, justifyContent: 'center', position: "absolute", top: 40, height: 450, width: 350, borderRadius: 10, margin: 5 }}>


                <Text style={styles.mainText}>INSERT THE DETAILS</Text>
                <Text style={styles.nametext}>NAME :</Text>
                <TextInput style={styles.inputStyle} onChange={this.name} />
                <Text style={styles.nametext1}>LOC :</Text>
                <TextInput style={styles.inputStyle1} onChange={this.loc} />
                <TouchableOpacity
                    onPress={this.fileuploadhandler}
                    style={styles.TouchView2}>
                    <Text style={styles.TextView2}>REMOVE</Text>


                </TouchableOpacity>
                <View style={{ marginTop: 90, marginBottom: 340, bottom: 100 }}>

                    <AntDesign
                        name="left"
                        size={28}
                        color="black"
                        justifyContent="left"

                        onPress={() => this.props.navigation.navigate("imageupload")}
                    />
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    TouchView2: {
        borderRadius: 15,
        height: 30,
        backgroundColor: "#05075d",
        width: 150,
        top: 240,
        alignSelf: "center",
        position: "absolute"

    },
    TextView2: {
        textAlign: "center",
        fontSize: 20,
        position: "absolute",
        left: 40,
        color: "#fff"
    },

    inputStyle: {
        backgroundColor: 'white',
        height: 35,
        width: 240,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 12,
        margin: 100,
        bottom: 250,
        position: "absolute",
        borderColor: '#05075d',
        paddingLeft: 20
    },
    nametext: {
        bottom: 340,
        fontSize: 20,
        margin: 20,
        position: "absolute"
    },
    nametext1: {
        bottom: 285,
        fontSize: 20,
        margin: 20,
        position: "absolute"
    },
    inputStyle1: {
        backgroundColor: 'white',
        height: 35,
        width: 240,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 12,
        margin: 100,
        bottom: 200,
        position: "absolute",
        borderColor: '#05075d',
        paddingLeft: 20
    },
    mainText: {
        bottom: 400,
        fontSize: 25,
        textAlign: "center",
        fontStyle: "normal",
        position: "absolute",
        margin: 40,
        padding: 10
    }

});