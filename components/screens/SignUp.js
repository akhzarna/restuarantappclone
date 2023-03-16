import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import Checkbox from 'expo-checkbox';

import { TextFieldLarge } from "../fields/TextFieldLarge";
import { ButtonRegular } from "../buttons/ButtonRegular";
import { TitleBarLogin } from "../titlebars/TitleBarLogin";

import { useState } from "react";

const SignUp = ({navigation}) => {

    const [isChecked, setChecked] = useState(false)

    return (
        <View style={styles.container}>

        <TitleBarLogin title={"Sign Up"} isBackVisible={true} backFunction={()=>{navigation.pop()}}/>

        <View style={{alignItems:'center', flex:0.60}}>

            <View>
                <Text style={{fontFamily:'Poppins-SemiBold', fontSize:16, marginBottom:4}}>Email</Text>
                <TextFieldLarge label={"E-mail"} />
            </View>

            <View>
                <Text style={{fontFamily:'Poppins-SemiBold', fontSize:16, marginBottom:4}}>Name</Text>
                <TextFieldLarge label={"Full name"} />
            </View>

            <View>
                <Text style={{fontFamily:'Poppins-SemiBold', fontSize:16, marginBottom:4}}>Password</Text>
                <TextFieldLarge label={"Create Password"} isPasswordField={true} />
            </View>

            <View>
                <Text style={{fontFamily:'Poppins-SemiBold', fontSize:16}}>Confirm Password</Text>
                <TextFieldLarge label={"Confirm Password"} isPasswordField={true}/>
            </View>

            <View style={{flexDirection:'row'}}>
                {/* <Checkbox value={isChecked} color={isChecked? "#F44648" : undefined} onValueChange={()=>{isChecked? setChecked(false) : setChecked(true)}} style={{flex: 0.04, margin:8, borderRadius:6, borderColor:'darkgrey',}}/> */}
                <Text style={{fontFamily:'Poppins', fontSize:16, flex:0.80}}>I accept the Terms of Use and Privacy Policy</Text>
            </View>

            <View style={{marginTop:16}}>
              <ButtonRegular label="Sign up" />

              <TouchableOpacity
              style={{marginTop:16}}
              onPress={() => {
                alert("No other login options available at the moment");
              }}>

              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "Poppins-SemiBold",
                  color: "darkgrey",
                }}
              >
                Or sign up with
              </Text>
            </TouchableOpacity>
              
            </View>
        </View>
        </View>
      );
    };

const styles = StyleSheet.create({
    container: {
        flex:1, 
        //justifyContent:'center', 
        //alignContent:'center', 
        backgroundColor:'#fafbff'
    }
})

export {SignUp}