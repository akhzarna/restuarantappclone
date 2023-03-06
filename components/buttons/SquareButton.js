import { View, Text, Touchable, TouchableOpacity } from "react-native"

import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const SquareButton = () => {
    return(
        <TouchableOpacity>
        <View style={{width:54, height:54, backgroundColor:'#F44648', borderRadius:12, alignContent:'center', justifyContent:'center', alignItems:'center'}}>
           <Icon name="book" color={"white"} style={{fontSize:24}} />
        </View>
        </TouchableOpacity>

    )
}

export {SquareButton}