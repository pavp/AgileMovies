import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  pressable: {
    height: windowHeight * 0.3,
    width: windowWidth * 0.4,
  },
  image: {
    resizeMode: "cover",
    position: "absolute",
    bottom: 0,
    top: 0,
    right: 0,
    left: 0,
    borderRadius: 10,
  },
  titleItem: {
    flex: 1,
    color: "white",
    position: "absolute",
    bottom: 8,
    right: 8,
    left: 8,
    textAlign: "center",
    fontWeight: "bold",
  },
  item: {
    width: windowWidth,
  },
  title: {
    color: "#99aab5",
    fontSize: 28,
    margin: 16,
  },
  separator: {
    width: 12,
  },
  contentContainer: {
    flexDirection: "row",
    marginHorizontal: 8,
  },
});

export default styles;
