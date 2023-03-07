import { View, Text } from "react-native"
import { BackButton } from "../buttons/BackButton"

const TitleBarLogin = ({title, backFunction, isBackVisible}) => {

  if(isBackVisible){
    return(
      <View
      style={{ flex: 0.10, marginTop: 60, marginLeft: 32, marginBottom:0, flexDirection:'row'}}
    >
      <BackButton backFuunction={backFunction}/>
      <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 24, marginLeft:8}}>
        {title}
      </Text>
    </View>
  )
  }

  return(
    <View
    style={{ flex: 0.10, marginTop: 60, marginLeft: 32, marginBottom:0, flexDirection:'row'}}
  >
    <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 24, marginLeft:8}}>
      {title}
    </Text>
  </View>
)

    
}

export {TitleBarLogin}