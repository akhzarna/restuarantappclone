import { View, StyleSheet, Text } from "react-native";
import { BackButton } from "../buttons/BackButton";

import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const TitleBarRegular = ({contentVisible, backFunction, label, isSecondaryButtonEnabled}) => {

  if(contentVisible){  
    
    if(!isSecondaryButtonEnabled){

      return <View style={styles.container}>
    <View style={{flex:0.20, alignContent:'center', justifyContent:'center'}}>
      <View style={{marginTop:28, marginLeft:20}}>
        <BackButton backFuunction={backFunction}/>
      </View>
  
    </View>
    <View style={{flex:0.60, alignContent:'center', justifyContent:'center'}}>
      <Text style={{textAlign:'center', marginTop:30, fontFamily:'Poppins', fontSize:18}}>{label}</Text>
    </View>
    </View>
  
    }

    else{
 return <View style={styles.container}>
  <View style={{flex:0.20, alignContent:'center', justifyContent:'center'}}>
    <View style={{marginTop:28, marginLeft:20}}>
      <BackButton backFuunction={backFunction}/>
    </View>

  </View>
  <View style={{flex:0.60, alignContent:'center', justifyContent:'center'}}>
    <Text style={{textAlign:'center', marginTop:30, fontFamily:'Poppins', fontSize:18}}>{label}</Text>
  </View>
  <View
      style={{
        width: 38,
        height: 38,
        flex:0.20,
        marginTop:38,
        borderRadius: 8,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
            <Icon name="heart" color={"darkgrey"} style={{ fontSize: 24 }} />
      </View>

  </View>

    }
    
    
   
  }

  return <View style={styles.container}></View>
};

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    height: 90,
    flex:1, 
    flexDirection:'row'
  },
});

export { TitleBarRegular };
