import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

import { TextFieldLarge } from "../fields/TextFieldLarge";
import { ButtonRegular } from "../buttons/ButtonRegular";
import { TitleBarLogin } from "../titlebars/TitleBarLogin";

import app from "./firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect } from "react";

const LogIn = ({navigation}) => {

  useEffect(()=>{
    const db = getDatabase(app);
    const dbRef = ref(db, 'sp21');
    console.log("Receiving Data");
    onValue(dbRef, (snapshot) => {
      let data = snapshot.val();
      // data = data.filter((item) => item !== "undefined");
      // setData(data);
      console.log("Data Received --->", data);
    });
    // console.log('Binyamin')
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
          onPress={() => {
            navigation.navigate('ForgotPasswordScreen')
          }}
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
