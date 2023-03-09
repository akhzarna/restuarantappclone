import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";

import { HomeRoot } from "./Home";
import { FavRoot } from "./Favorites";

function Profile() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fafbff",
      }}
    >
      <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 20 }}>
        Profile
      </Text>
    </View>
  );
}

function Cart() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fafbff",
      }}
    >
      <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 20 }}>Cart</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export function HomeScreen() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            let iconName;
            if (route.name === "Favorites") {
              iconName = focused ? "heart" : "heart-outline";
            } else if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Cart") {
              iconName = focused ? "cart" : "cart-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person-circle" : "person-circle-outline";
            }
            return (
              <Ionicons
                name={iconName}
                size={22}
                color={focused ? "#F44648" : "darkgrey"}
              />
            );
          },
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            height: 74,
            elevation: undefined,
            backgroundColor: "F9FAFE",
            borderTopWidth: 0,
            backgroundColor: "#fff",
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeRoot} />
        <Tab.Screen name="Favorites" component={FavRoot} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
