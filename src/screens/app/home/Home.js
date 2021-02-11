import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@components/button/Button";
import { useDispatch } from "react-redux";
import styles from "./styles";
import { logOut, fetchAuthProfile } from "@store/actions/auth";
import { fetchMoviesPopular, fetchMoviesNow } from "@store/actions/movies";

import NowMovies from "@components/nowMovies/NowMovies";
import PopularMovies from "@components/popularMovies/PopularMovies";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthProfile());
    dispatch(fetchMoviesPopular(1));
    dispatch(fetchMoviesNow(1));
  }, [dispatch]);

  const logOutHandler = () => {
    dispatch(logOut());
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      {/* <Button text={"Logout"} onPress={logOutHandler} /> */}
      <NowMovies />
      <PopularMovies />
    </SafeAreaView>
  );
};

export default Home;
