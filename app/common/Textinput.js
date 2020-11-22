import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  Dimensions
} from "react-native";
import {redColor, whiteColor,textinputColor,textColor} from '../common/Colors';
const Textinput = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
      <View style={styles.input}>
        <Image source={props.image} style={styles.image} />
      <TextInput 
        secureTextEntry={true}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry}
        onChangeText={props.onChangeText}
        Value={props.Value}
        style={styles.textInput}
        placeholderTextColor={'grey'}
        placeholder={props.placeholder}
      />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop:20
  },
  text: {
    fontSize: 15,
    color: textColor,
  },
  input:
  {
    marginTop:20,
  },
  textInput: {
    width:'100%',
    alignSelf:'center',
    fontSize: 18,
    alignItems:'center',
    padding:0,
    margin:0,
    borderBottomWidth:2,
    borderColor:textinputColor,
    paddingLeft:25,
    marginTop:-10
  },
  image:
  {
    resizeMode:'contain',
    width:15,

  }
});

export default Textinput;