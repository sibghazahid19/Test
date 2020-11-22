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
const Button = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={props.image} />
      <Text style={styles.text}>{props.text}</Text>
      <Image style={styles.image} source={props.image1} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
   width:'90%',
   alignSelf:'center',
   borderTopRightRadius:8,
   borderTopLeftRadius:8,
   borderBottomRightRadius:8,
   height:55,
   borderBottomLeftRadius:30,
   flexDirection:'row',
   justifyContent:'space-around',
   alignItems:'center',
   backgroundColor:whiteColor,
   paddingHorizontal:10
  },
  image: {
    resizeMode: 'contain',
    width: 22,
  },
  text:
  {
      fontSize:15,
      fontWeight:'bold',
      color:redColor
  }
});

export default Button;
