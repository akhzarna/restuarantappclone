import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

import { TextFieldLarge } from "../fields/TextFieldLarge";
import { ButtonRegular } from "../buttons/ButtonRegular";
import { TitleBarLogin } from "../titlebars/TitleBarLogin";

import {auth} from "./firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// import auth from '@react-native-firebase/auth';

import { useEffect } from "react";

const LogIn = ({navigation}) => {

  useEffect(()=>{
    console.log('useEffect is called ??')
    // createUserWithEmailAndPassword(auth,'email', 'password')
    // .then((userCredential)=>{
    //   console.log('User Created')
    // })
  },[])

  return (
    <View style={styles.container}>
      <TitleBarLogin title={"Welcome"}/>

      <View style={{alignItems:'center', flex:0.30}}>

        <View style={{ marginTop: 40, marginLeft: 16 }}>
          <Image
            style={{ height: 60, width: 300 }}
            source={require("../../assets/images/logo.png")}
          />
        </View>

      </View>

      <View style={{ flex: 0.60, alignItems:'center'}}>
        <TextFieldLarge label={"E-mail"} />
        <TextFieldLarge label={"Password"} isPasswordField={true} />

        <TouchableOpacity
          onPress={
            
          () => {
            // navigation.navigate('ForgotPasswordScreen')
            signInWithEmailAndPassword(auth,'email', 'password')
            .then((userCredential)=>{
              console.log('User Created')
            })

          }
        
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
            Forgot Password?
          </Text>
        </TouchableOpacity>

        <View>
          <ButtonRegular label="Login" clickFunction={()=>{navigation.navigate("HomeScreen")}}/>
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
          onPress={() => {
            navigation.navigate('SignUpScreen');
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
            New on foodie moodie? Sign up
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
