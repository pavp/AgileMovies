import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles";
import { fetchAuthProfile } from "@store/actions/auth";
import { fetchMoviesPopular, fetchMoviesNow } from "@store/actions/movies";

import PopularMovies from "@components/popularMovies/PopularMovies";

const Home = () => {
  const dispatch = useDispatch();
  const skipPopular = useSelector((state) => state.movies.popular.skip);
  const skipNow = useSelector((state) => state.movies.now.skip);

  useEffect(() => {
    dispatch(fetchAuthProfile());
    dispatch(fetchMoviesPopular({ page: skipPopular }));
    dispatch(fetchMoviesNow({ page: skipNow }));
  }, [dispatch]);

  return (
    <SafeAreaView
      style={styles.safeAreaView}
      edges={["bottom", "right", "left"]}
    >
      <PopularMovies />
    </SafeAreaView>
  );
};

export default Home;
