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

import axios from 'axios';


import {app} from "./firebase";

import { getDatabase, ref, onValue, set, update, remove } from "firebase/database";


// import { getDatabase, ref, onValue, set, update } from "firebase/database";

// import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";

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

  const [myburgers, setMyburgers] = useState([])

  const getBurgers = async () => {
  
  var myURL = 'https://reactnative.dev/movies.json'
  axios.get(myURL)
  .then(function (response) {
    console.log("response.data==", response.data);
    // setMyburgers(response.data.movies);
  })
  .catch(function (error) {
    console.log(error);
  });

    // try {
    //   const response = await fetch('https://reactnative.dev/movies.json');
    //   const json = await response.json();
    //   setMyburgers(json.movies);
    //   console.log('Burger Data ==',myburgers)
    // } catch (error) {
    //   console.error(error);
    // } finally {
    //   // setLoading(false);
    // }


    // try {
    //   const response = await fetch('https://reactnative.dev/movies.json');
    //   const json = await response.json();
    //   // console.log('Burgers === ',json.movies)

    //   setMyburgers(json.movies)

    //   console.log('Burgers === ',myburgers)

    //   // setData(json.movies);
    // } catch (error) {
    //   console.error(error);
    // } finally {
    //   // setLoading(false);
    // }

    // Passing configuration object to axios
    // axios({
    //   method: 'GET',
    //   url: 'https://reactnative.dev/movies.json',
    // }).then((response) => {
    //   console.log(response.data);
    // });
  };

  useEffect(()=>{
  console.log('is this called ???')
  
  const db = getDatabase(app)
    
  const dbRef = ref(db, 'fastfood');
        onValue(dbRef, (snapshot) => {
          let data = snapshot.val();
          console.log('data is ==',data)
          setMyburgers(data);
          // AsyncStorage.setItem("deals", JSON.stringify(data));
      });
  

  const dbRefSet = ref (db, 'mobeen')
  set(dbRefSet,   [{"description": "Hello", "img": "https://firebasestorage.googleapis.com/v0/b/bcssp21g3.appspot.com/o/Deal%201.jpeg?alt=media&token=8d457d84-4ff1-4264-927e-1a620223a584", "key": 0, "price": 1400, "title": "Deal 1"}, {"description": "Hello 2", "img": "https://firebasestorage.googleapis.com/v0/b/bcssp21g3.appspot.com/o/Deal%202.jpeg?alt=media&token=75f39345-4eda-4045-97d4-fa5bc7e80cde", "key": 1, "price": 1500, "title": "Deal 2"}, {"description": "Hello 456", "img": "https://firebasestorage.googleapis.com/v0/b/bcssp21g3.appspot.com/o/Deal%203.png?alt=media&token=63187eb1-b1c7-439a-8cdc-a3753ec7cdc4", "key": 2, "price": 1800, "title": "Deal 3"}, {"description": "Hello World", "img": "https://firebasestorage.googleapis.com/v0/b/bcssp21g3.appspot.com/o/Deal%204.jpeg?alt=media&token=feebbc83-8970-467b-8315-055a59179a04", "key": 3, "price": 1200, "title": "Deal 4"}, {"description": "Hello 5", "img": "https://firebasestorage.googleapis.com/v0/b/bcssp21g3.appspot.com/o/Deal%205.jpeg?alt=media&token=bbe572eb-e05e-4c1c-97f7-46e20f63ad2b", "key": 4, "price": 800, "title": "Deal 5"}])

  var index = 3
  var refData = "mobeen/" + index
  const dbRefForUpdate = ref(db, refData)
  update(dbRefForUpdate, {price:2200, title:'Check 1', key:43})

  // Click on Button and edit on the basis of data not Key
  // For example update price to 1800 where price is 1400 and less 





    
   



    // AsyncStorage.getItem("deals").then((data) => {
    // // JSON.parse deserialize the data
    // let newData = JSON.parse(data);
    // console.log("After Deserialisation == ", newData);

    //   if(newData){
    //     ///

    //   }else{
    //     /// 
      
    //   }

    // });

   


    // AsyncStorage.getItem("myuser").then((data) => {
    //   let newData = JSON.parse(data);
    //   console.log("Check User Data == ", newData.email);

      // if (newData){
        /////

        /////

      // }else{
        ////

        // console.log('is this called ???')
        // const dbRef = ref(db, 'alldeals');
        // onValue(dbRef, (snapshot) => {
        //   let data = snapshot.val();
        //   // console.log('data is ==',data)
        //   AsyncStorage.setItem("deals", JSON.stringify(data));
        // });

      // }
     
    // });
    

    // const db = getDatabase(app)

    // var index = 2
    // var dbRefRef = 'alldeals/1/secondtarray/'+index





    // Firestore


    // export declare function doc(firestore: Firestore, path: string, ...pathSegments: string[]): DocumentReference<DocumentData>;



    // export declare function collection(firestore: Firestore, path: string, ...pathSegments: string[]): CollectionReference<DocumentData>;



    const dbFS = getFirestore();
    const snapshot = collection(dbFS, 'newcollection');
    const q = query(snapshot, ref)

    onSnapshot(q, snapshot=>{
      // for(var i=0; i<snapshot.docs.length;i++){
      //   console.log('Fetched from Firestore',snapshot.docs[i].data())
      // }
      snapshot.docs.map(doc=>{
        console.log('Using Map Function',doc.data())
      })


      // snapshot.docs.map(doc=>{
      //   console.log(doc.data())
      //   foodiemoodiearray.push(doc.data())
      // })
      
      // console.log('final data == ',foodiemoodiearray)
      // setMyburgers(foodiemoodiearray)
      // console.log('myburgers == ',myburgers)


    })


    addDoc(snapshot, 
      {
        key:3, 
        title:'New One at 4th index', 
        desc:'Best One at 4th index'
      }
    )

    updateDoc(doc(dbFS, "newcollection", "HFQ7uLoCMNgYx4pHz0Ji"), {
      title:'Yes its Done'
    }).then(()=>{
      console.log("Data updated successfully!");
    }).catch((err)=>{
      console.log(err)
    })

    // Update Firestore
    // getDocs(snapshot)

    // const getDocRef = doc(dbFS, 'mycoll');
    // console(getDocRef)

    // updateDoc(getDocRef, [{key:'5'}])

    // export declare function addDoc<T>(reference: CollectionReference<T>, data: WithFieldValue<T>): Promise<DocumentReference<T>>;
    // export declare function updateDoc<T>(reference: DocumentReference<T>, data: UpdateData<T>): Promise<void>;

    //   snapshot.docs.forEach((doc) => {
    //   console.log('Using for Each', doc.data());
    // });


    // snapshot.docs.map(doc=>{
    //   console.log('Using Map Function',doc.data())
    // })

    // const dbFS = getFirestore();
    // const querySnapShot = getDocs(collection(dbFS, "mycoll"))
    // onSnapshot(querySnapShot,(doc)=>{
    //   console.log('A new Way',doc)
    // })

    // console.log(querySnapShot)
    // querySnapShot.forEach((doc)=>{
    //   // console.log('Firestore Data = ', doc.data())
    // })

  },[])

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

      {/* <View style={{ flex:1, margin: 20 }}>
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
      </View> */}

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
          horizontal={true}
          data={myburgers}
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

  // console.log('YES Burger', burger)
  onDetailScreen=(item)=>{
    console.log('Clicked', item.key)
  }

  return (
    <TouchableOpacity onPress={()=>{onDetailScreen(burger)}}>
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
            source={{uri:burger.img}}
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
            {burger.releaseYear}
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
