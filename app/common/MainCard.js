import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';

import {redColor, whiteColor, textColor, cardColor,greyColor} from '../common/Colors';

const MainCard = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <View style={styles.innerView}>
          <Text style={styles.text}>{props.item.weight}</Text>
        </View>
        {props.item.liked ? (
          <Image
            source={require('../assets/heart1.png')}
            style={styles.image}
          />
        ) : (
          <Image source={require('../assets/heart.png')} style={styles.image} />
        )}
      </View>
      <Image source={props.item.image} style={styles.image1} />
      <Text style={styles.text1}>{props.item.name}</Text>
      <Text style={styles.text2}>Rs {props.item.price}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: whiteColor,
    height: 170,
    borderRadius: 5,
    // shadowOffset: {width: 0, height: 0},
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
    elevation: 2,
    marginLeft: 20,
    marginTop: 20,
width:140
  },
  text: {
    fontSize: 10,
    color:whiteColor
  },
  mainView: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop:10
  },
  innerView: {
    height: 18,
    width: 40,
    borderRadius: 3,
    backgroundColor: redColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 20,
    resizeMode: 'contain',
    height:20
  },
  image1:
  {
    resizeMode:'contain',
    height:80,
    width:'90%'
  },
  text1: {
    fontSize: 12,
    color:greyColor,
    marginLeft:20,
    marginTop:10
  },
  text2: {
    fontSize: 12,
    color:redColor,
    marginLeft:20,
    marginTop:10
  },
});

export default MainCard;
