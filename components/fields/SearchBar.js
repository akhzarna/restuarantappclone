import { Text, View, TextInput, TouchableOpacity } from "react-native"

const SearchBar = ({label, onClick, isTextInputDisabled}) => {

  if(isTextInputDisabled){
    return(
      <TouchableOpacity onPress={onClick}>
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
        <Text
          style={{ marginLeft: 20, fontFamily:'Poppins' }}
        >{label}</Text>
      </View>
      </TouchableOpacity>
 
    )
  }
    return(
      <TouchableOpacity onPress={onClick}>
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
        aria-disabled={true}
        cursorColor={"darkgrey"}
          style={{ marginLeft: 20, fontFamily:'Poppins' }}
          placeholder={label}
        />
      </View>
      </TouchableOpacity>
 
    )
}

export {SearchBar}