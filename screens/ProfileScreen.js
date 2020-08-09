import React, { Component} from "react";
import { StyleSheet, View, TextInput ,SafeAreaView, Text ,Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

 
function ProfileScreen({ navigation }) {  
  
  {
    return(
   <View style={styles.background}>
      <Text style={styles.logIn}>Login</Text>
     <View style = { styles.rectangle2}>
            <TextInput 
            placeholder = "E-mail" 
            style={styles.text}
            underlineColorAndroid='transparent' />
            
      </View>

      <View style = { styles.rectangle}>
            <TextInput 
            placeholder = "Password" 
            style={styles.text}
            underlineColorAndroid='transparent'/>    
      </View>

      <View style={styles.loginb}>

          {/* <Button style={styles.logint} title="login"/> */}
          <Button style={styles.logint}
          title="Login"
          onPress={() => navigation.navigate('Home')}
        />

      </View>
            
     

   </View>
      
    );
  }



/* <View style = { styles.rectangle3 }>
<TextInput 
placeholder = "User Name" 
style={styles.userName}
underlineColorAndroid='transparent'
 />
  <TextInput 
placeholder = "Password" 
style={styles.userName}
underlineColorAndroid='transparent'
 />
</View> */}
export default ProfileScreen; 
const styles = StyleSheet.create(
{
  background: { 
      width: 500,
      height: 812,
      backgroundColor: '#ffffff',
      textAlign: 'center',
      
  },

  logIn: {
    top:60,
    left:45,
    width: 130,
    height: 400,
    color: '#000000',
    fontFamily: 'Comfortaa',
    fontSize: 36,
    fontWeight: '400',
    letterSpacing: -0.54,
    
  },

  rectangle2: {
    width: 343,
    height: 45,
    left: 35,
    top: 10,
    borderColor: '#000000',
    borderStyle: 'solid',
    borderWidth: 2,
    backgroundColor: '#ffffff',
  },

  text: {
    textAlign: 'center',
    color: '#000000',
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: '400',
  },

  rectangle: {
    width: 343,
    height: 52,
    left: 35,
    top: 50,
    borderColor: '#000000',
    borderStyle: 'solid',
    borderWidth: 2,
    backgroundColor: '#ffffff',
  },

  loginb: {
    width: 343,
    height: 52,
    left: 35,
    top: 100,
    borderColor: '#000000',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 6,
    backgroundColor: '#000000',

  },

  logint: {
  color:'white',
  fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: '400',
    textAlign:'center',

  },


 
});