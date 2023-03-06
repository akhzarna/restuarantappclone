import { View, TextInput } from "react-native"

const SearchBar = ({label}) => {
    return(
        <View
        style={{
          alignContent: "center",
          justifyContent: "center",
          marginBottom: 24,
          width:300,
          height: 56,
          borderRadius: 10,
          backgroundColor: "white",
          alignContent: "center",
          shadowColor: "grey",
          shadowOffset: 0.5,
        }}
      >
        <TextInput
        cursorColor={"darkgrey"}
          style={{ marginLeft: 20, fontFamily:'Poppins' }}
          placeholder={label}
        />
      </View>
    )
}

export {SearchBar}