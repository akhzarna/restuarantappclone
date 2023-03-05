import { View, Text } from "react-native"

const TitleBarLogin = ({title}) => {
    return(
        <View
        style={{ flex: 0.10, marginTop: 60, marginLeft: 32, marginBottom:0}}
      >
        <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 24 }}>
          {title}
        </Text>
      </View>
    )
}

export {TitleBarLogin}