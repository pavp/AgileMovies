import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "90%",
  },
  textInput: {
    borderRadius: 10,
    backgroundColor: "white",
    width: "100%",
    color: "black",
    borderColor: "white",
    borderWidth: 1 / 2,
    padding: 12,
    marginTop: 16,
  },
  labelError: {
    flexDirection: "row",
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 8,
    marginTop: 4,
  },
  textError: {
    color: "red",
    marginHorizontal: 4,
  },
});

export default styles;
