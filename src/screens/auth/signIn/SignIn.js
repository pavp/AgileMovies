import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormSignIn from "./form/FormSignIn";
import styles from "./styles";

const SignIn = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar
        barStyle={"light-content"}
        translucent
        backgroundColor="transparent"
      />
      <FormSignIn />
    </SafeAreaView>
  );
};

export default SignIn;
