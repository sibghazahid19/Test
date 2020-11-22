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
  FlatList,
} from 'react-native';

import {redColor, whiteColor, textColor, viewTextColor} from '../common/Colors';
import Categoriescard from '../common/CategoriesCard';
import Maincard from '../common/MainCard';

const Home = (props) => {
  const [categories, setCategories] = useState([
    {
      image: require('../assets/meat.png'),
      text: 'Meat',
    },
    {
      image: require('../assets/eggs.png'),
      text: 'Eggs',
    },
    {
      image: require('../assets/onion.png'),
      text: 'Vegetables',
    },
    {
      image: require('../assets/bottle.png'),
      text: 'Ghee',
    },
  ]);
  const [featured, setFeatured] = useState([
    {
      image: require('../assets/ginger.png'),
      name:"Ginger",
      liked:true,
      price:60,
      weight:"100G"
    },
    {
      image: require('../assets/ginger.png'),
      name:"Ginger",
      liked:false,
      price:60,
      weight:"100G"
    },
    {
      image: require('../assets/ginger.png'),
      name:"Ginger",
      liked:false,
      price:60,
      weight:"100G"
    },
    
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <Text style={styles.text}>INDEX.</Text>
          <View style={styles.rightView}>
            <View>
              <View style={styles.circle}>
                <Text style={styles.text1}>0</Text>
              </View>
              <Image
                style={styles.image}
                source={require('../assets/basket.png')}
              />
            </View>
            <Image
              style={styles.image1}
              source={require('../assets/menu.png')}
            />
          </View>
        </View>
        <View style={styles.headerBottom}>
          <Text style={styles.text2}>All Categories</Text>
          <FlatList
            data={categories}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            renderItem={({item, index}) => {
              return <Categoriescard item={item} index={index} />;
            }}
          />
        </View>
      </View>
      <View style={styles.cardHeading}>
        <Text style={styles.cardText}>Featured Products</Text>
        <View style={styles.iconView}>
          <Text style={styles.cardText1}>View all</Text>
          <Image style={styles.icon} source={require('../assets/icon.png')} />
        </View>
      </View>
      <View>
      <FlatList
            data={featured}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            renderItem={({item, index}) => {
              return <Maincard item={item} index={index} />;
            }}
          />
          </View>
           <View style={styles.cardHeading}>
        <Text style={styles.cardText}>New Products</Text>
        <View style={styles.iconView}>
          <Text style={styles.cardText1}>View all</Text>
          <Image style={styles.icon} source={require('../assets/icon.png')} />
        </View>
      </View>
      
      <FlatList
            data={featured}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            renderItem={({item, index}) => {
              return <Maincard item={item} index={index} />;
            }}
          />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    elevation: 7,
    height: 270,
    borderBottomLeftRadius: 10,
    borderBottomEndRadius: 10,
    width: '100%',
    backgroundColor: whiteColor,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  headerTop: {
    width: '100%',
    backgroundColor: redColor,
    height: 100,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  text: {
    fontSize: 18,
    color: whiteColor,
  },
  rightView: {
    flexDirection: 'row',
    width: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 22,
    resizeMode: 'contain',
  },
  image1: {
    width: 20,
    resizeMode: 'contain',
  },
  circle: {
    height: 18,
    width: 18,
    borderRadius: 20,
    backgroundColor: whiteColor,
    position: 'absolute',
    left: -15,
    top: 2,
    elevation: 2,
    backgroundColor: whiteColor,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontSize: 10,
    color: redColor,
  },
  text2: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
  },
  cardHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  cardText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  cardText1: {
    fontSize: 12,
    color: viewTextColor,
  },
  iconView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 15,
    resizeMode: 'contain',
    width: 10,
    height: 13,
  },
});

export default Home;
