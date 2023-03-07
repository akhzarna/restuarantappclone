import { Text, StyleSheet, TouchableOpacity } from "react-native";

const ButtonRegular = ({ label, clickFunction }) => {
  return (
    <TouchableOpacity style={styles.buttonPrimary} onPress={clickFunction}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonPrimary: {
    width: 350,
    height: 54,
    backgroundColor: "#F44648",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    width: 300,
    height: 60,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "white",
    margin: 8,
  },

  buttonText: {
    textAlign: "center",
    fontSize: 14,
    color: "white",
    fontFamily: "Poppins-Bold",
  },
});

export { ButtonRegular };