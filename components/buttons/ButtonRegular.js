import { Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

import axios from 'axios';

const ButtonRegular = ({ label, clickFunction }) => {
  
  // clickFunction=()=>{

  //   Alert.alert('Sign Up Button Click')






  // // fetch('http://talk2you-live.lingmo-api.com/api/user', {
  // //   method: 'POST',
  // //   headers: {
  // //     Accept: "application/json",
  // //     Authorization: global.userData?.token ? global.userData.token : "",
  // //   },
  // //   body: JSON.stringify({
  // //     password: "Hello123",
  // //     languageId: "en-US",
  // //     couponCode: "",
  // //     username: "abc123",
  // //     deviceToken: "",
  // //     fullName: "ABC",
  // //     email: "abc@gmail.com",
  // //     notificationApp: "lingmoimtab",
  // //     phone: "03244444444",
  // //   }),
  // // })

  // axios.post('http://talk2you-live.lingmo-api.com/api/user', {
      
  //     password: "12345678901234567890",
  //     languageId: "en-US",
  //     couponCode: "",
  //     username: "zohaib102",
  //     deviceToken: "",
  //     fullName: "Zohaib",
  //     email: "zohaib32@gmail.com",
  //     notificationApp: "lingmoimtab",
  //     phone: "0321111111",
      
  // })
  // .then(function (response) {
  //   console.log("response.data==", response.data);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });

  // }

  return (
    <TouchableOpacity style={styles.buttonPrimary} onPress={()=>clickFunction()}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonPrimary: {
    width: 350,
    height: 54,
    backgroundColor: "#F44648",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    width: 300,
    height: 60,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "white",
    margin: 8,
  },

  buttonText: {
    textAlign: "center",
    fontSize: 14,
    color: "white",
    fontFamily: "Poppins-Bold",
  },
});

export { ButtonRegular };