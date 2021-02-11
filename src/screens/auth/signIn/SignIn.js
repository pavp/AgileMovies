import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormSignIn from "./form/FormSignIn";
import styles from "./styles";

const SignIn = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <FormSignIn />
    </SafeAreaView>
  );
};

export default SignIn;
