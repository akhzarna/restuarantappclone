import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { SearchBar } from "../fields/SearchBar";
import { TitleBarRegular } from "../titlebars/TitleBarRegular";
import { useEffect, useState } from "react";

import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { SquareButton } from "../buttons/SquareButton";
import { Details } from "./Details";
import { Search } from "./Search";

const categories = [
  {
    id: 0,
    title: "Burger",
    img: require("../../assets/icon_images/burger.png"),
  },
  {
    id: 1,
    title: "Kebab",
    img: require("../../assets/icon_images/kebab.png"),
  },
  {
    id: 2,
    title: "Fried",
    img: require("../../assets/icon_images/shwarma.png"),
  },
];

const Stack = createStackNavigator();

const HomeRoot = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Details" component={Details}/>
        <Stack.Screen name="Search" component={Search}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Home({navigation}) {
  const [menuItems, setMenuItems] = useState([
    {
      key: 0,
      title: "Large Burger",
      price: "$12.00",
      rating: "4,5",
      img_src: require("../../assets/icon_images/big_mac.png"),
      isLiked: true,
      details: "Our burger uses 1000% quality beef, sliced tomatoes, pickles, vegetables, union and extra thick cheese. "
    },
    {
      key: 1,
      title: "Cheese Burger",
      price: "$14.00",
      rating: "3,0",
      img_src: require("../../assets/icon_images/big_mac.png"),
      isLiked: false,
      details:"Our burger uses 1000% quality beef, sliced tomatoes, pickles, vegetables, union and extra thick cheese. "
    },
    {
      key: 2,
      title: "Zinger Burger",
      price: "$10.00",
      rating: "5,0",
      img_src: require("../../assets/icon_images/big_mac.png"),
      isLiked: false,
      details:"Our burger uses 1000% quality beef, sliced tomatoes, pickles, vegetables, union and extra thick cheese. "
    },
  ]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fafbff" }}>
      <TitleBarRegular />

      <View style={{ flex:1, margin: 20 }}>
        <Text
          style={{
            fontFamily: "Poppins-SemiBold",
            fontSize: 16,
            marginLeft: 4,
          }}
        >
          Hello Tajamal Shah
        </Text>
        <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 24 }}>
          Choose your favorite food
        </Text>
      </View>

      <View style={{ marginLeft: 20, flex: 1, flexDirection: "row" }}>
        <View style={{ flex: 0.8 }}>
          <SearchBar label="Search your favorite food" isTextInputDisabled={true} onClick={()=>{navigation.navigate('Search')}}/>
        </View>

        <View style={{ flex: 0.2 }}>
          <SquareButton />
        </View>
      </View>
      <View
        style={{
          marginLeft: 20,
          flex: 0.08,
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <Text
          style={{ fontFamily: "Poppins-SemiBold", fontSize: 18, flex: 0.8 }}
        >
          Food category
        </Text>
        <TouchableOpacity style={{ flex: 0.2 }}>
          <Text style={{ fontFamily: "Poppins", fontSize: 14 }}>See All</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 74,
          marginLeft: 20,
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <FlatList
          data={categories}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => <CategoryCard item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View
        style={{
          marginLeft: 20,
          flex: 0.05,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{ fontFamily: "Poppins-SemiBold", fontSize: 18, flex: 0.8 }}
        >
          Popular Food
        </Text>
        <TouchableOpacity style={{ flex: 0.2 }}>
          <Text style={{ fontFamily: "Poppins", fontSize: 14 }}>See All</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 0.5,
          marginLeft: 20,
          alignItems: "center",
          marginBottom: 20,
          marginTop: 16,
        }}
      >
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={menuItems}
          renderItem={({ item }) => (
            <BurgerCard burger={item} navigation={navigation}/>
          )}
          keyExtractor={(item) => item.key}
        />
      </View>

      <View
        style={{
          marginLeft: 20,
          flex: 0.05,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{ fontFamily: "Poppins-SemiBold", fontSize: 18, flex: 0.8 }}
        >
          Best Seller
        </Text>
        <TouchableOpacity style={{ flex: 0.2 }}>
          <Text style={{ fontFamily: "Poppins", fontSize: 14 }}>See All</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 0.2, margin: 20, marginBottom: 20 }}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={menuItems}
          renderItem={({ item }) => (
            <BestSellerCard burger={item} navigation={navigation} setMenuItems={setMenuItems} />
          )}
          keyExtractor={(item) => item.key}
        />
      </View>
    </ScrollView>
  );
}

const CategoryCard = ({ item }) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          backgroundColor: "#fff",
          height: 50,
          width: 140,
          margin: 12,
          borderRadius: 10,
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Image source={item.img} style={{ width: 40, height: 40 }} />
        <Text
          style={{ marginLeft: 12, fontFamily: "Poppins-Bold", fontSize: 16 }}
        >
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const BurgerCard = ({ burger, navigation }) => {
  return (
    <TouchableOpacity onPress={()=>{navigation.navigate('Details', {item: burger})}}>
      <View
        style={{
          flex: 1,
          width: 160,
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

const BestSellerCard = ({ burger, navigation }) => {
  return (
    <TouchableOpacity onPress={()=>{navigation.navigate("Details", {item: burger})}}>
      <View
        style={{
          flex: 1,
          height: 100,
          backgroundColor: "#fff",
          borderRadius: 10,
          margin: 8,
          flexDirection: "row",
          padding: 12,
        }}
      >
        <View
          style={{ flex: 0.25, alignItems: "center", justifyContent: "center" }}
        >
          <Image
            source={burger.img_src}
            style={{ width: 60, height: 60, marginLeft: 16 }}
          />
        </View>

        <View
          style={{
            flex: 0.55,
            alignContent: "center",
            padding: 12,
            marginLeft: 16,
          }}
        >
          <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 18 }}>
            {burger.title}
          </Text>
          <Text style={{ fontFamily: "Poppins", fontSize: 16 }}>
            {burger.price}
          </Text>
        </View>

        <View style={{ flex: 0.2 }}>
          <View
            style={{
              flex: 0.5,
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
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

          <View
            style={{ flex: 0.5, flexDirection: "column", alignItems: "center" }}
          >
            <View
              style={{
                margin: 0,
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Icon
                name="star-outline"
                style={{ fontSize: 20, color: "orange" }}
              />
              <Text style={{ fontSize: 16, fontFamily: "Poppins" }}>
                {burger.rating}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export { HomeRoot };
