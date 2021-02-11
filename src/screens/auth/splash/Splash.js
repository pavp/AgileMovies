import React from "react";
import { Text, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "./styles";
import localize from "@localize";

const Splash = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar
        barStyle={"light-content"}
        translucent
        backgroundColor="transparent"
      />
      <Text style={styles.title}>{localize.t("splash.agileMovies")}</Text>
    </SafeAreaView>
  );
};

export default Splash;
