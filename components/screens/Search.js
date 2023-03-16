
import { useState } from "react";
import { ScrollView, Text, View, Image, FlatList, Touchable, TouchableOpacity } from "react-native";
import { SearchBar } from "../fields/SearchBar";
import { TitleBarRegular } from "../titlebars/TitleBarRegular";

import Icon from "@expo/vector-icons/MaterialCommunityIcons";

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

const Search =({navigation, route}) => {

    const [recents, setRecents] = useState([
        
            {
                key:0,
                search: "Burger Big"
            },
            {
                key:1,
                search: "Chicken BBQ"
            },
            {
                key:2,
                search: "Cheese Swarma"
            },
            {
                key:4,
                search: "Fries"
            }
    ])

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
          <TitleBarRegular contentVisible={true} label="Search" isSecondaryButtonEnabled={false} backFunction={() => {navigation.pop()}}/>
          
          <View style={{flexDirection:'row', marginLeft:16, marginRight:16, marginTop:16, justifyContent:'center'}}>
            <SearchBar label="Search for your favorite food"/>

            <TouchableOpacity onPress={()=>{alert("Hello there")}}>
              <Text style={{margin:16, fontFamily:'Poppins-SemiBold', color:"#F44648"}}>Cancel</Text>
            </TouchableOpacity>

          </View>

          <View style={{marginLeft:24, marginRight:24}}>
            <Text style={{fontFamily:"Poppins-SemiBold", fontSize:18}}>Recent</Text>
            <FlatList
                data={recents}
                renderItem={({item}) => <SearchItemCard searchItem={item}/>}
                keyExtractor={item => item.key}
            />
        </View>

        <View style={{marginLeft:24, marginRight:10, marginTop:16}}>
        <View
        style={{

          flex: 0.08,
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <Text
          style={{ fontFamily: "Poppins-SemiBold", fontSize: 18, flex: 0.90 }}
        >
          Popular
        </Text>
        <TouchableOpacity style={{ flex: 0.2 }}>
          <Text style={{ fontFamily: "Poppins", fontSize: 14 }}>See All</Text>
        </TouchableOpacity>
      </View>
            <FlatList
                data={menuItems}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => <BurgerCard burger={item} navigation={navigation}/>}
                keyExtractor={item => item.key}
            />
        </View>


        
    
        </ScrollView>
    
      );
}

const SearchItemCard = ({searchItem}) => {
    return(
        <TouchableOpacity>
        <View style={{flex:1, height:50, flexDirection:'row', alignItems:'center'}}>
            <Icon style={{flex:0.10, marginLeft:20,fontSize:20}} name="select-search"/>
            <Text style={{flex:0.84, fontSize:14, fontFamily:'Poppins', color:'darkgrey'}}>{searchItem.search}</Text>
            <Icon name="close" style={{flex:0.10, fontSize:20, color:'#F44648'}}/>
        </View>
        </TouchableOpacity>

    )
}

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

export {Search}