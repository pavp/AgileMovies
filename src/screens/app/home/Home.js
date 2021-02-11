import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@components/button/Button";
import { useDispatch, useSelector } from "react-redux";
// import {useNavigation} from '@react-navigation/native';
import styles from "./styles";
import { logOut, fetchAuthProfile } from "@store/actions/auth";
import { fetchMoviesPopular, fetchMoviesNow } from "@store/actions/movies";

const Home = () => {
  //   const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthProfile());
    dispatch(fetchMoviesPopular(1));
    // dispatch(fetchMoviesNow(1));
  }, [dispatch]);

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
