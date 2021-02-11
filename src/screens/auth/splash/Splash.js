import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./styles";

const Splash = () => {
  return (
    <SafeAreaView
      style={styles.safeAreaView}
      edges={["right", "left", "bottom", "top"]}
    >
      <Text style={styles.title}>{"AGILE MOVIES"}</Text>
    </SafeAreaView>
  );
};

export default Splash;
