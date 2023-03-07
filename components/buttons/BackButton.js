import { TouchableOpacity, View } from "react-native";

import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const BackButton = ({backFuunction}) => {
  return (
    <TouchableOpacity onPress={backFuunction}>
      <View
        style={{
          width: 38,
          height: 38,
          backgroundColor: "#fff",
          borderRadius: 8,
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon name="arrow-left" color={"darkgrey"} style={{ fontSize: 24 }} />
      </View>
    </TouchableOpacity>
  );
};

export { BackButton };