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

import {redColor, whiteColor,textColor} from '../common/Colors';
import TextInput from '../common/Textinput';
import RoundButton from '../common/RoundButton';
import Button from '../common/Button'
const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>SIGN IN</Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.input}>
          <TextInput
            text="Email"
            image={require('../assets/Mail.png')}
            value={email}
            onChangeText={(email) => {
              setEmail(email);
            }}
          />
        </View>
        <View>
          <TextInput
            text="password"
            image={require('../assets/Lock.png')}
            value={password}
            onChangeText={(password) => {
              setPassword(password);
            }}
          />
        </View>
        <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={styles.button}>
        <RoundButton onPress={()=>props.navigation.navigate('Home')}
            image={require('../assets/arrow.png')}
            />
            </View>
      </View>
      <TouchableOpacity>
      <Text style={styles.text1}>or signin with</Text>
      </TouchableOpacity>
      <View style={styles.button1}>
      <Button   image={require('../assets/google.png')} text={'Sign In With Google'}/>
      </View>
      <TouchableOpacity>
      <Text style={styles.text2}>Don't Have An Account? Click Here</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: redColor,
  },
  header: {
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: whiteColor,
    fontWeight: 'bold',
  },
  mainContainer: {
    marginTop: 30,
    width: '90%',
    alignSelf: 'center',
    height: 340,
    backgroundColor: whiteColor,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 30,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  input:
  {
    marginTop:14
  },
  forgotText:
  {
    alignSelf:'flex-end',
    marginTop:10,
    marginRight:30,
    fontSize:13,
    color:textColor
  },
  button:
  {
    alignSelf:'flex-end',
    marginTop:30,
    marginRight:20,
  },
  text1:
  {
    marginTop:60,
    alignSelf:'center',
    fontSize:15,
    color:whiteColor
  },
  button1:
  {
    paddingVertical:20
  },
  text2:
  {
    alignSelf:'center',
    fontSize:15,
    color:whiteColor,
    fontWeight:'bold'
  }
});

export default Login;
