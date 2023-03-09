import { ScrollView, Text, View, Image } from "react-native";
import { TitleBarRegular } from "../titlebars/TitleBarRegular";

import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import NumericInput from "react-native-numeric-input";
import { ButtonRegular } from "./../buttons/ButtonRegular";

const Details = ({ route, navigation }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fafbff" }}>
      <TitleBarRegular
        contentVisible={true}
        label="Detail"
        isSecondaryButtonEnabled={true}
        backFunction={() => {
          navigation.pop();
        }}
      />

      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 0.4,
            height: 280,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={route.params.item.img_src}
            style={{ width: 200, height: 200 }}
          />
        </View>

        <View style={{ flex: 0.2, flexDirection: "row" }}>
          <View style={{ flex: 0.8 }}>
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: 24,
                marginLeft: 24,
              }}
            >
              {route.params.item.title}
            </Text>
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <View
                style={{
                  marginLeft: 20,
                  flex: 0.5,
                  flexDirection: "row",
                }}
              >
                <Icon
                  name="star-outline"
                  style={{ fontSize: 24, color: "orange", flex: 0.2 }}
                />
                <Text style={{ fontSize: 16, fontFamily: "Poppins" }}>
                  {route.params.item.rating}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 0.2,
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center",
              marginRight: 20,
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins-Bold",
                fontSize: 20,
                color: "#F44648",
              }}
            >
              {route.params.item.price}
            </Text>
          </View>
        </View>
        <View style={{ flex: 0.4 }}>
          <View style={{ marginLeft: 24, marginRight: 24, marginTop: 24 }}>
            <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 16 }}>
              Details
            </Text>
            <Text style={{ fontFamily: "Poppins", color: "darkgrey" }}>
              {route.params.item.details}
            </Text>
          </View>

          <View style={{ marginLeft: 24, marginRight: 24, marginTop: 16 }}>
            <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 18 }}>
              Add some toppings
            </Text>
            <Text style={{ fontFamily: "Poppins", color: "darkgrey" }}>
              Not available for this product.
            </Text>
          </View>

          <View
            style={{
              marginLeft: 24,
              marginTop: 24,
              marginRight: 24,
              marginTop: 16,
            }}
          >
            <NumericInput
              style={{ flex: 0.8 }}
              totalHeight={40}
              borderColor={undefined}
              rightButtonBackgroundColor="#fafbff"
              leftButtonBackgroundColor="#fafbff"
              separatorWidth={0}
              onChange={(value) => console.log(value)}
            />
          </View>

          <View style={{ flex: 1, alignItems: "center", marginTop: 40 }}>
            <ButtonRegular
              label="Order Now"
              clickFunction={() => {
                alert("Order created");
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export { Details };
