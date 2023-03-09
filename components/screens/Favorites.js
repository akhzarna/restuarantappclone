import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { IconButton } from "@react-native-material/core";

import { TextFieldLarge } from "../fields/TextFieldLarge";
import { ButtonRegular } from "../buttons/ButtonRegular";
import { TitleBarRegular } from "../titlebars/TitleBarRegular";

import { Details } from "../screens/Details";

const Stack = createStackNavigator();

const FavRoot = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Favorites" component={Favorites} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function Favorites({ navigation }) {
  const [menuItems, setMenuItems] = useState([
    {
      key: 0,
      title: "Large Burger",
      price: "$12.00",
      rating: "4,5",
      img_src: require("../../assets/icon_images/big_mac.png"),
      isLiked: true,
      details:
        "Our burger uses 1000% quality beef, sliced tomatoes, pickles, vegetables, union and extra thick cheese. ",
    },
    {
      key: 1,
      title: "Cheese Burger",
      price: "$14.00",
      rating: "3,0",
      img_src: require("../../assets/icon_images/big_mac.png"),
      isLiked: true,
      details:
        "Our burger uses 1000% quality beef, sliced tomatoes, pickles, vegetables, union and extra thick cheese. ",
    },
    {
      key: 2,
      title: "Zinger Burger",
      price: "$10.00",
      rating: "5,0",
      img_src: require("../../assets/icon_images/big_mac.png"),
      isLiked: true,
      details:
        "Our burger uses 1000% quality beef, sliced tomatoes, pickles, vegetables, union and extra thick cheese. ",
    },
  ]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fafbff" }}>
      <TitleBarRegular
        contentVisible={true}
        label="Favorite"
        isSecondaryButtonEnabled={true}
      />

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 12,
        }}
      >
        <View>
          <FlatList
            data={menuItems}
            numColumns={2}
            renderItem={({ item }) =>
              item.isLiked ? (
                <BurgerCard burger={item} navigation={navigation} />
              ) : undefined
            }
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const BurgerCard = ({ burger, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Details", { item: burger });
      }}
    >
      <View
        style={{
          flex: 1,
          width: 174,
          height: 210,
          backgroundColor: "white",
          margin: 8,
          borderRadius: 12,
        }}
      >
        <View
          style={{ flex: 0.28, alignItems: "center", justifyContent: "center" }}
        >
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View
              style={{
                margin: 12,
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Icon
                name="star-outline"
                style={{ fontSize: 20, color: "orange", flex: 0.32 }}
              />
              <Text style={{ fontSize: 16, fontFamily: "Poppins" }}>
                {burger.rating}
              </Text>
            </View>

            <IconButton
              color="white"
              icon={(props) => (
                <Icon
                  name="heart"
                  color={burger.isLiked ? "red" : "grey"}
                  style={{ fontSize: 24 }}
                />
              )}
            />
          </View>
        </View>

        <View
          style={{ flex: 0.6, alignItems: "center", justifyContent: "center" }}
        >
          <Image
            source={burger.img_src}
            style={{
              width: 80,
              height: 80,
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </View>

        <View style={{ flex: 0.4, marginTop: 10 }}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              fontFamily: "Poppins-SemiBold",
            }}
          >
            {burger.title}
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              marginTop: 4,
              marginBottom: 16,
              color: "grey",
              fontFamily: "Poppins",
            }}
          >
            {burger.price}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
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

export { FavRoot };
