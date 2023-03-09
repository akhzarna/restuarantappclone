import { Text, View, StyleSheet } from "react-native";

import { TextFieldLarge } from "../fields/TextFieldLarge";
import { ButtonRegular } from "../buttons/ButtonRegular";
import { TitleBarLogin } from "../titlebars/TitleBarLogin";

const ForgotPassword = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TitleBarLogin
        title={"Forgot Passowrd"}
        isBackVisible={true}
        backFunction={() => {
          navigation.pop();
        }}
      />

      <View
        style={{
          alignItems: "center",
          flex: 0.6,
          marginLeft: 16,
          marginRight: 16,
        }}
      >
        <View style={{ margin: 12 }}>
          <Text
            style={{
              fontFamily: "Poppins-Bold",
              fontSize: 20,
              marginBottom: 4,
            }}
          >
            Enter your Email
          </Text>
          <Text
            style={{ fontFamily: "Poppins", fontSize: 16, marginBottom: 4 }}
          >
            We need to verify you. We shall send you one time authorization code
          </Text>
          <TextFieldLarge label={"Enter your email"} />
        </View>

        <View style={{ marginTop: 16 }}>
          <ButtonRegular
            label="Next"
            clickFunction={() => {
              navigation.navigate("OtpScreen");
            }}
          />
        </View>
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

export { ForgotPassword };
