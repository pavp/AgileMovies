import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@components/button/Button";
import { useDispatch, useSelector } from "react-redux";
// import {useNavigation} from '@react-navigation/native';
import styles from "./styles";
import { logOut } from "@store/actions/auth";

const Home = () => {
  //   const navigation = useNavigation();
  const dispatch = useDispatch();

  //   const {loading} = useSelector((state) => state.auth.login);

  const logOutHandler = () => {
    dispatch(logOut());
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text>Home</Text>
      <Button text={"Logout"} onPress={logOutHandler} />
    </SafeAreaView>
  );
};

export default Home;
