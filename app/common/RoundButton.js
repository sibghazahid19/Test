import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  redColor,
  whiteColor,
  textinputColor,
  textColor,
} from '../common/Colors';
const RoundButton = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Image style={styles.image} source={props.image} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
      height:50,
      width:50,
      backgroundColor:redColor,
      borderRadius:50,
      elevation:5,
      alignItems:'center',
      justifyContent:"center"
  },
  image:
  {
resizeMode:'contain',
width:25
  }
});

export default RoundButton;
