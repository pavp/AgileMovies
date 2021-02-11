import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// import {useDispatch, useSelector} from 'react-redux';
// import {useNavigation} from '@react-navigation/native';
import styles from "./styles";

const Splash = () => {
  //   const navigation = useNavigation();
  //   const dispatch = useDispatch();

  //   const {loading} = useSelector((state) => state.auth.login);

  return (
    <SafeAreaView
      style={styles.safeAreaView}
      edges={["right", "left", "bottom", "top"]}
    >
      <Text>Splash</Text>
    </SafeAreaView>
  );
};

export default Splash;
