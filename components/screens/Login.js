import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";
import { TextFieldLarge } from "../fields/TextFieldLarge";
import { ButtonRegular } from "../buttons/ButtonRegular";
import { TitleBarLogin } from "../titlebars/TitleBarLogin";

import {auth} from "./firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously, onAuthStateChanged } from "firebase/auth";

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// import auth from '@react-native-firebase/auth';

import { useEffect } from "react";

const LogIn = ({navigation}) => {

  const [text, onChangeText] = useState('Email');
  const [pass, onChangePassword] = useState('Password');

  const handleLogin = async () => {
    console.log('Handle Sign In')
    await signInWithEmailAndPassword(auth, 'zain3@gmail.com', '123456')
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user data,", user);
        console.log("user data,", user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error,", errorMessage);
        // ..
      });
  };

  const handleSignup = async () => {
    console.log('LOGGED')
    await createUserWithEmailAndPassword(auth, 'zain3@gmail.com', '123456')
      .then((userCredential) => {
        // Sign Up
        console.log("Succesfull");
        const user = userCredential.user;
        console.log("user data,", user);
        
        // write code to save your data in firestore
        // FirebaseError.firestore.write(user.uid,user.uid)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Error Code == ',errorCode)
        console.log('Error Message == ',errorMessage)
        // ..
      });
  };
  
  const signInGuest = async () => {
    
    await signInAnonymously(auth).then((userCredential)=>{
      console.log('Done',userCredential)
    })

  }


  useEffect(()=>{
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('useEffect to check sign IN', user.email)
        // navigation.reset({ index: 0, routes: [{ name: "Home" }] });
      }
    });
  },[])

  return (
    <View style={styles.container}>
      <TitleBarLogin title={"Welcome"}/>
      
        <Text>{text}</Text>
        <Text>{pass}</Text>

      <View style={{alignItems:'center', flex:0.30}}>

        <View style={{ marginTop: 40, marginLeft: 16 }}>
          <Image
            style={{ height: 60, width: 300 }}
            source={require("../../assets/images/logo.png")}
          />
        </View>

      </View>

      <View style={{ flex: 0.60, alignItems:'center'}}>
        <TextFieldLarge 
          label={"E-mail"} 
          value={text}
          onChangeText={(text)=>onChangeText(text)}
        />

        <TextFieldLarge 
          label={"Password"} 
          isPasswordField={true} 
          value={pass}
          onChangeText={(pass)=>onChangePassword(pass)}
          />

        <TouchableOpacity
          onPress={
            
            () => {
            handleSignup()
            }

          // () => {
          //   // navigation.navigate('ForgotPasswordScreen')
          //   createUserWithEmailAndPassword(auth,'email@gmail.com', '123456')
          //   .then((userCredential)=>{
          //     console.log('User Created')
          //   })

          // }
        
        }
        >
          <Text
            style={{
              textAlign: "right",
              marginBottom: 16,
              fontFamily: "Poppins-SemiBold",
              color: "darkgrey",
            }}
          >
            Forgot Password .....?
          </Text>
        </TouchableOpacity>

        <View>
          <ButtonRegular label="Login" clickFunction={()=>{handleLogin()}}/>
        </View>

        <TouchableOpacity
          onPress={() => {
            alert("No other login options available at the moment");
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Poppins-SemiBold",
              marginTop: 16,
              color: "darkgrey",
            }}
          >
            Or login with
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 0.1 }}>
        <TouchableOpacity
          onPress={() => {signInGuest()
            // navigation.navigate('SignUpScreen');
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Poppins-SemiBold",
              marginTop: 16,
              color: "darkgrey",
            }}
          >
            Guest User
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent:'center',
    //alignContent:'center',
    backgroundColor: "#fafbff",
  },
});

export { LogIn };
