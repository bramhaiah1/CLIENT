import React, { useState, Component, } from "react";
import { Button, View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Picker } from "react-native";
import DropdownMenu from 'react-native-dropdown-menu';

import { createStackNavigator, createAppContainer } from "react-navigation";
import axios from "axios"
import { multiply } from "react-native-reanimated";
import DropDownPicker from 'react-native-dropdown-picker';
export default class Imageupload extends Component {

    constructor(props) {

        super(props)

        this.state = {
            selectedfile: '',
            category: '',
            name: '',
            rent: '',
            price: '',
            loc: '',
            qty: '',
            text: ''
        }

    }



    fileselecthandler = event => {

        this.setState({
            selectedfile: event.target.files[0]
        })
        //   alert(this.state.selectedfile)

    }
    name = event1 => {
        this.state.name = event1.target.value;
    }
    category = event1 => {
        this.state.category = event1.target.value;
    }
    price = event1 => {
        this.state.price = event1.target.value;
    }
    rent = event1 => {
        this.state.rent = event1.target.value;
    }
    loc = event1 => {
        this.state.loc = event1.target.value;
    }
    QTY = event1 => {
        this.state.qty = event1.target.value;
    }

    fileuploadhandler = () => {
        const { selectedfile } = this.state;
        const { category } = this.state;
        const { name } = this.state;
        const { price } = this.state;
        const { loc } = this.state;
        const { rent } = this.state;
        const { qty } = this.state
        if (selectedfile === '' || category === '' || name === '' || price === '' || loc === '' || rent === '' || qty === '') {
            alert("please enter all the deatils for upload");
        }
        else {

            //alert(this.state.selectedfile.name)
            const fb = new FormData();
            fb.append('profile', selectedfile);
            fb.append('category', category);
            fb.append('name', name);
            fb.append('price', price);

            fb.append('rent', rent);
            fb.append('loc', loc);
            fb.append('qty', qty);


            // alert(fb)
            axios.post('http://localhost:3000/upload', fb).then(res => {
                alert(res.data);
                console.log(fb)
            });

        }
    }


    render() {


        return (

            <View style={{ backgroundColor: '#b19cd9 ', flex: 1, justifyContent: 'center', position: "absolute", top: 40, height: 450, width: 350, borderRadius: 10, margin: 5 }}>

                <Text style={styles.nametext6}>CATEG:</Text>
                <Text style={styles.nametext}>NAME :</Text>
                <TextInput style={styles.inputStyle} onChange={this.name} />
                <Text style={styles.nametext1}>RENT :</Text>
                <TextInput style={styles.inputStyle1} onChange={this.rent} />
                <Text style={styles.nametext2}>LOCAL :</Text>
                <TextInput style={styles.inputStyle2} onChange={this.loc} />
                <Text style={styles.nametext3}>PRICE :</Text>
                <TextInput style={styles.inputStyle3} onChange={this.price} />
                <Text style={styles.nametext4}>QTY :</Text>
                <TextInput style={styles.inputStyle4} onChange={this.QTY} />
                <TextInput style={styles.inputStyle5} onChange={this.category} />



                <input type="file" style={{ display: 'none' }} onChange={this.fileselecthandler} ref={fileinput => this.fileinput = fileinput} />

                <TouchableOpacity style={styles.TouchView1} onPress={() => this.fileinput.click()}>
                    <Text style={styles.TextView1}>Pickfile</Text>
                </TouchableOpacity >

                <TouchableOpacity
                    onPress={this.fileuploadhandler}
                    style={styles.TouchView2}>
                    <Text style={styles.TextView2} >upload</Text>
                </TouchableOpacity>


            </View>

        );
    }
}
const styles = StyleSheet.create({
    inputStyle: {
        backgroundColor: 'white',
        height: 35,
        width: 240,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 20,
        paddingLeft: 20,
        margin: 100,
        bottom: 250,
        position: "absolute",
        borderColor: '#05075d',
    },
    inputStyle5: {
        backgroundColor: 'white',
        height: 35,
        width: 240,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 20,
        margin: 100,
        bottom: 250,
        position: "absolute",
        borderColor: '#05075d',
        paddingLeft: 20,
    },
    nametext: {
        bottom: 340,
        color: "purple",
        fontWeight: "bold",
        fontSize: 20,
        margin: 20,
        position: "absolute"
    },
    nametext1: {
        bottom: 285,
        fontSize: 20,
        margin: 20,
        color: "purple",
        fontWeight: "bold",
        position: "absolute"
    },
    nametext2: {
        bottom: 235,
        fontSize: 20,
        margin: 20,
        color: "purple",
        fontWeight: "bold",
        position: "absolute"
    },
    nametext3: {
        bottom: 185,
        fontSize: 20,
        margin: 20,
        color: "purple",
        fontWeight: "bold",
        position: "absolute"
    },
    nametext4: {
        bottom: 140,
        fontSize: 20,
        margin: 20,
        color: "purple",
        fontWeight: "bold",
        position: "absolute"
    },
    nametext5: {
        bottom: 100,
        fontSize: 20,
        margin: 20,
        color: "purple",
        fontWeight: "bold",
        position: "absolute"
    },
    nametext6: {
        bottom: 100,
        fontSize: 20,
        margin: 20,
        color: "purple",
        fontWeight: "bold",
        position: "absolute"
    },

    inputStyle1: {
        backgroundColor: 'white',
        height: 35,
        width: 240,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 20,
        margin: 100,
        bottom: 200,
        position: "absolute",
        borderColor: '#05075d',
        paddingLeft: 20,
    },
    inputStyle2: {
        backgroundColor: 'white',
        height: 35,
        width: 240,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 20,
        margin: 100,
        bottom: 150,
        position: "absolute",
        borderColor: '#05075d',
        paddingLeft: 20,
    },
    inputStyle3: {
        backgroundColor: 'white',
        height: 35,
        width: 240,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 20,
        margin: 100,
        bottom: 100,
        position: "absolute",
        borderColor: '#05075d',
        paddingLeft: 20,
    },
    inputStyle4: {
        backgroundColor: 'white',
        height: 30,
        width: 240,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 20,
        margin: 100,
        bottom: 60,
        position: "absolute",
        borderColor: '#05075d',
        paddingLeft: 20,
    },
    inputStyle5: {
        backgroundColor: 'white',
        height: 30,
        width: 240,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 20,
        margin: 100,
        bottom: 20,
        position: "absolute",
        borderColor: '#05075d',
        paddingLeft: 20,



    },

    TouchView1: {
        borderRadius: 15,
        height: 30,
        backgroundColor: "#05075d",
        width: 150
    },
    TouchView1: {
        borderRadius: 15,
        height: 30,
        backgroundColor: "#05075d",
        width: 150,
        top: 340,
        margin: 15,
        position: "absolute"
    },
    TextView1: {
        textAlign: "center",
        fontSize: 20,
        position: "absolute",
        left: 40,
        color: "#fff"
    },
    TouchView2: {
        borderRadius: 15,
        height: 30,
        backgroundColor: "#05075d",
        width: 150,
        top: 175,
        margin: 180,
        position: "absolute"

    },
    TextView2: {
        textAlign: "center",
        fontSize: 20,
        position: "absolute",
        left: 40,
        color: "#fff"
    },
    mainText: {
        bottom: 400,
        fontSize: 25,
        textAlign: "center",
        fontStyle: "normal",
        position: "absolute",
        margin: 40,
        padding: 10
    },
    TouchView3: {
        borderRadius: 15,
        height: 30,
        backgroundColor: "#05075d",
        width: 190,
        top: 280,
        margin: 110,
        position: "absolute"
    },
    TextView3: {
        textAlign: "center",
        fontSize: 20,
        position: "absolute",
        left: 40,
        color: "#fff"
    }
});