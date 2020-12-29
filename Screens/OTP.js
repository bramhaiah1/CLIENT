import React, { Component } from "react";
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
import Backgroung from "../Screens/Background"
import { AntDesign } from '@expo/vector-icons';
import OTPTextView from "react-native-otp-textinput";
import axios from "axios";
class OtpScreen extends Component {
    OTPverification = () => {
        const { otpInput } = this.state;
        const { navigation } = this.props;
        var email1 = navigation.getParam('email', '')
        // var otp1 = navigation.getParam('otp', '')
        var phonenumber = navigation.getParam('phonenumber', '')

        var phonenumber1 = navigation.getParam('phonenumber', '')
        var data;

        if (phonenumber1 != '') {
            //  alert(phonenumber1)
            data = {
                otp: otpInput,
                phonenumber: phonenumber1,
            }

        }
        else {
            data = {
                otp: otpInput,
                email: email1,
            }
        } //alert("ok")
        alert(data.otp, data.phonenumber)
        axios.post("http://c574a3558a86.ngrok.io/OTPVALIDATION", data).then(resp => {
            // alert(resp.data);

            if (phonenumber === '') {
                this.props.navigation.navigate("RegisterScreen", { email: email1 })


            } else {
                if (resp.data.result === 'success') {
                    this.props.navigation.navigate("RegisterScreen", { email: phonenumber })
                } else {
                    alert("Incorrect OTP")
                }
            }
        })
    }

    clear = () => {
        this.input1.clear();
    };
    state = {};
    render() {
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
                            left: 5,
                            top: 50,
                            bottom: 55,
                            position: "absolute"
                            // height: 550
                        }}
                        source={require("../assets/crop.png")}>

                    </Image>
                    <View style={styles.container4}>
                        <AntDesign name="message1" size={48} backgroundColor="#05075d" position="absolute" />
                    </View>
                    <Text style={styles.instructions}>Verify OTP number</Text>
                    <Text style={styles.instructions1}>check your email/phone number for OTP</Text>
                    <OTPTextView
                        ref={(e) => (this.input1 = e)}
                        containerStyle={styles.textInputContainer}
                        handleTextChange={(text) => this.setState({ otpInput: text })}
                        inputCount={4}
                        keyboardType="numeric"
                        defaultValue={this.state.otpInput}
                        textInputStyle={[styles.roundedTextInput, { borderRadius: 100 }]}
                        tintColor="#3b0066"
                    />
                    <View style={styles.button}>
                        <TouchableOpacity
                            onPress={this.OTPverification}
                        >
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.button1}>
                        <TouchableOpacity
                            onPress={this.clear}
                            style={styles.TextInputStyleClass3}>
                            <Text style={styles.buttonText}>CLEAR</Text>

                        </TouchableOpacity>
                    </View>
                </Backgroung>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container4: {
        top: 170,
        height: 58,
        width: 68,
        alignItems: 'center',

        position: 'absolute',
        borderRadius: 40,


        position: "absolute"

    },
    instructions: {
        fontSize: 25,
        fontWeight: "500",
        textAlign: "center",
        color: "#ffff",
        marginBottom: 20,
        top: 230,
        position: "absolute",
        left: 70,


    },
    instructions1: {
        fontWeight: "500",
        textAlign: "center",
        color: "black",
        marginBottom: 20,
        top: 280,
        position: "absolute",
        left: 60,

    },
    textInputContainer: {
        marginBottom: 10,
        top: 320,
        position: "absolute",
        left: 60,
    },
    roundedTextInput: {
        borderRadius: 10,
        borderWidth: 4,
    },
    button: {
        height: 30,
        backgroundColor: "#FFFFFF",
        width: 120,
        borderRadius: 12,
        top: 410,
        left: 190,
        borderStyle: 'solid',
        borderColor: "darkblue",
        borderWidth: 2,
        position: "absolute",
        position: "absolute",
    },
    button1: {
        height: 30,
        backgroundColor: "#FFFFFF",
        width: 120,
        borderRadius: 12,
        top: 410,
        left: 55,
        borderStyle: 'solid',
        borderColor: "darkblue",
        borderWidth: 2,
        position: "absolute",
        position: "absolute",
    },
    buttonText: {
        alignContent: "center",
        textAlign: "center",
        fontSize: 20,
        color: "#05075d",
        fontWeight: "bold",

        left: -2
    },





});

export default OtpScreen;
