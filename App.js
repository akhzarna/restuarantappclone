import { StatusBar } from "expo-status-bar";
import { Text, View, ImageBackground } from "react-native";
import { useFonts } from "expo-font";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { ButtonLarge } from "./components/buttons/ButtonLarge";

import { SignUp } from "./components/screens/SignUp";
import { Home, LogIn } from "./components/screens/Login";
import { Otp } from "./components/screens/otp";
import { ForgotPassword } from "./components/screens/ForgotPassword";
import { ResetPassword } from "./components/screens/ResetPassword";
import {HomeScreen} from "./components/screens/HomeScreen";


const Stack = createStackNavigator(
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginSplash" component={LoginSplash} />
        <Stack.Screen name="SignUpScreen" component={SignUp} />
        <Stack.Screen name="LogInScreen" component={LogIn} />
        <Stack.Screen name="OtpScreen" component={Otp}/>
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPassword}/>
        <Stack.Screen name="ResetPasswordScreen" component={ResetPassword}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const LoginSplash = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Poppins": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-BoldItalic": require("./assets/fonts/Poppins-BoldItalic.ttf"),

  });

  if(!fontsLoaded){
    return
  }

  return (
    <ImageBackground
      style={{ flex: 1 }}
      imageStyle={{ opacity: 0.6, backgroundColor: "rgba(0, 0, 0, 1)" }}
      source={require("./assets/images/login_splash_backdrop.jpg")}
    >
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.6 }}></View>

        <View style={{ flex: 0.4, margin: 16 }}>
          <Text
            style={{
              fontSize: 28,
              fontFamily: "Poppins-BoldItalic",
              color: "white",
            }}
          >
            Enjoy your fast food only in foodie moodie
          </Text>
          <Text style={{ color: "white", fontSize: 18, fontWeight: "500" }}>
            Here is the place to buy food you want
          </Text>

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 24,
            }}
          >
            <ButtonLarge label={"Login"} isPrimary={true} navigation={navigation}/>
            <ButtonLarge
              label={"Sign up"}
              isPrimary={false}
              navigation={navigation}
            />
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
};


