import { StyleSheet, Dimensions } from "react-native";
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "#191B1E",
  },
  scrollView: {
    flex: 1,
    paddingBottom: 16,
  },
  contentContainerScrollView: {
    paddingBottom: 16,
  },
  poster: {
    resizeMode: "contain",
    height: windowHeight * 0.3,
    marginTop: 16,
  },
  title: {
    color: "#99aab5",
    fontSize: 24,
    marginHorizontal: 16,
    textAlign: "center",
    marginTop: 16,
  },
  overView: {
    color: "#99aab5",
    fontSize: 20,
    marginHorizontal: 16,
    textAlign: "center",
    marginTop: 16,
    paddingHorizontal: 32,
  },
});

export default styles;
