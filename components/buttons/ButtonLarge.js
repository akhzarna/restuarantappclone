import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ButtonLarge = ({ label, isPrimary, navigation }) => {
  if (isPrimary) {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("LogInScreen");
        }}
      >
        <View style={styles.buttonPrimary}>
          <Text style={styles.buttonText}>{label}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("SignUpScreen");
      }}
    >
      <View style={styles.button}>
        <Text style={styles.buttonText}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonPrimary: {
    width: 300,
    height: 60,
    backgroundColor: "#F44648",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
  },

  button: {
    width: 300,
    height: 60,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "white",
    margin: 8,
  },

  buttonText: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
  },
});

export { ButtonLarge };
