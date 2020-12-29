import React, {memo, useState, Component, } from "react";
import DropdownMenu from 'react-native-dropdown-menu';

import { createStackNavigator, createAppContainer } from "react-navigation";
import axios from "axios"

import { multiply } from "react-native-reanimated";
import DropDownPicker from 'react-native-dropdown-picker';
import {
  TextInput,
  ActivityIndicator,
  Button,
  Clipboard,
  Image,
  Share,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Permissions from 'expo-permissions'
import * as ImagePicker from 'expo-image-picker'


const imageupload = ({ navigation }) => {
  const [NAME, setname] = useState({ value: "", error: "" });
  const [RENT, setrent] = useState({ value: "", error: "" });
  const [LOCATION, setlocation] = useState({ value: "", error: "" });
  const [PRICE, setprice] = useState({ value: "", error: "" });
  const [QTY, setqty] = useState({ value: "", error: "" });
  const [CATEGORY, setcategory] = useState({ value: "", error: "" });

  const state={
    selectedfile:null,
  }
  const _pickImage = async () => {

    // only if user allows permission to camera roll
    {
      

      let pickerResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        base64: true,
    })
      _handleImagePicked(pickerResult);
    }
  };
   const uploadImageAsync= async(uri) =>{
     alert(uri)
    state.selectedfile = uri;
  }
  const _handleImagePicked = async pickerResult => {
    let uploadResponse, uploadResult;

    try {
     

      if (!pickerResult.cancelled) {
      //  alert(pickerResult.uri)
   //  console.log(pickerResult.base64)
        uploadResponse = await uploadImageAsync(pickerResult.uri);
        //   uploadResult = await uploadResponse.json();
        // this.setState({
        //   image: uploadResult.location
        // });
      }
    } catch (e) {
      console.log({ uploadResponse });
      console.log({ uploadResult });
      console.log({ e });
      alert('Upload failed, sorry :(' + e);
    } finally {
     
    }
  };


 
const  fileuploadhandler = () => {
   alert(state.selectedfile)
    const fb = new FormData(); 
       let filename = state.selectedfile.split('/').pop();
   // Infer the type of the image
   let match = /\.(\w+)$/.exec(filename);
   let type = match ? `image/${match[1]}` : `image`;
   fb.append('profile', { uri: state.selectedfile, name: filename, type });
 
    fb.append('category', CATEGORY.value);
    fb.append('name', NAME.value);
    fb.append('price', PRICE.value);
    fb.append('rent', RENT.value);
    fb.append('loc', LOCATION.value);
    fb.append('qty', QTY.value);
   
    axios.post('http://c574a3558a86.ngrok.io/upload', fb, {
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then(res => {
      alert(res.data);
    });

  }
  




    return (
      <View style={{ backgroundColor: '#b19cd9 ', flex: 1, justifyContent: 'center', position: "absolute", top: 40, height: 450, width: 350, borderRadius: 10, margin: 5 }}>

        <Text style={styles.nametext} >NAME  :</Text>
        <TextInput  style={styles.inputStyle}onChangeText={(text) => setname({ value: text, error: "" })} />
        <Text style={styles.nametext1}>RENT  :</Text>
        <TextInput style={styles.inputStyle1} onChangeText={(text) => setrent({ value: text, error: "" })} />
        <Text style={styles.nametext2}>LOC    :</Text>
        <TextInput style={styles.inputStyle2} onChangeText={(text) => setlocation({ value: text, error: "" })}/>
        <Text style={styles.nametext3}>PRICE :</Text>
        <TextInput style={styles.inputStyle3} onChangeText={(text) => setprice({ value: text, error: "" })} />
        <Text style={styles.nametext4}>QTY    :</Text>
        <TextInput style={styles.inputStyle4} onChangeText={(text) => setqty({ value: text, error: "" })} />
        <Text style={styles.nametext6}>CATEG:</Text>

        <TextInput style={styles.inputStyle5}onChangeText={(text) => setcategory({ value: text, error: "" })}  />




        <TouchableOpacity style={styles.TouchView1} onPress={_pickImage}>
          <Text style={styles.TextView1}>Pickfile</Text>
        </TouchableOpacity >

        <TouchableOpacity
          onPress={fileuploadhandler}
          style={styles.TouchView2}>
          <Text style={styles.TextView2} >upload</Text>
        </TouchableOpacity>
      </View>

    );
    
  }
   
  


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  exampleText: {
    fontSize: 20,
    marginBottom: 20,
    marginHorizontal: 15,
    textAlign: 'center',
  },
  maybeRenderUploading: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
  },
  maybeRenderContainer: {
    borderRadius: 3,
    elevation: 2,
    marginTop: 30,
    shadowColor: 'rgba(0,0,0,1)',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 4,
      width: 4,
    },
    shadowRadius: 5,
    width: 250,
  },
  maybeRenderImageContainer: {
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    overflow: 'hidden',
  },
  maybeRenderImage: {
    height: 250,
    width: 250,
  },
  maybeRenderImageText: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
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
export default memo(imageupload)
