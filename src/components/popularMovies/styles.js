import { StyleSheet, Dimensions } from "react-native";
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  pressable: {
    flex: 1 / 2,
    height: windowHeight * 0.35,
  },
  image: {
    resizeMode: "cover",
    position: "absolute",
    bottom: 8,
    top: 8,
    right: 8,
    left: 8,
    borderRadius: 10,
  },
  titleItem: {
    flex: 1,
    color: "white",
    position: "absolute",
    bottom: 16,
    right: 16,
    left: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  item: {
    flex: 1,
  },
  title: {
    color: "#99aab5",
    fontSize: 28,
    margin: 16,
  },
});

export default styles;
