import React, { memo } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { TextInput as Input } from 'react-native';
const { width: WIDTH } = Dimensions.get('window');

const TextInput = ({ errorText, ...props }) => (
  <View style={styles.container}>
    <Input
      style={styles.Textinput}
     // placeholder={'Username'}
      placeholderTextColor={'rgba(255,255,255,0.7)'}
      underlineColorAndroid='transparent'
      {...props}

    >

    </Input>
    {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },

  error: {
    fontSize: 14,
    color: "#FF0000",

    paddingHorizontal: 40,
    paddingTop: 4,
  },
  Textinput: {
    width: WIDTH - 60,
    height: 45,
    borderRadius: 25,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.22)',
    // backgroundColor:"#FFFF",
    color: 'rgba(255,255,255,0.9)',
    marginHorizontal: 25,
    fontSize: 16
  },
});

export default memo(TextInput);
