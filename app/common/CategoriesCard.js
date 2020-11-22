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

import {redColor, whiteColor, textColor,cardColor,greyColor} from '../common/Colors';

const CategoriesCard = (props) => {
  return (
    <View style={styles.container}>
        <View style={styles.mainView}>
        <View style={styles.imageView}>
      <Image source={props.item.image} style={styles.image} />
      </View>
      <Text style={styles.text}>{props.item.text}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: whiteColor,
  },

  text: {
    fontSize: 15,
  },
  mainView:
  {
    marginHorizontal:18,
    alignItems:'center',
    justifyContent:'center'
  },
  imageView:
  {
      height:64,
      width:64,
      borderRadius:65,
      backgroundColor:cardColor,
      alignItems:'center',
      justifyContent:'center',
      marginTop:20,
      marginBottom:10

  },
  image: {
    width: 25,
    resizeMode: 'contain',
    
    // borderRadius:22
  },
});

export default CategoriesCard;
