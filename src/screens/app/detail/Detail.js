import React, { useEffect } from "react";
import { Image, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles";
import { fetchActors, cleanActors } from "@store/actions/movies";

import ActorsCarousel from "@components/actorsCarousel/ActorsCarousel";

const Detail = ({ route }) => {
  const dispatch = useDispatch();
  const { movie = null } = route.params ?? {};
  const imageBaseUrl = useSelector((state) => state.movies.popular.baseUrl);

  useEffect(() => {
    dispatch(fetchActors(movie.id));
    return () => {
      dispatch(cleanActors());
    };
  }, [dispatch]);

  return (
    <SafeAreaView
      style={styles.safeAreaView}
      edges={["bottom", "right", "left"]}
    >
      <ScrollView
        contentContainerStyle={styles.contentContainerScrollView}
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>{movie.original_title}</Text>
        <Image
          source={{ uri: imageBaseUrl + movie.poster_path }}
          style={styles.poster}
        />
        <Text style={styles.overView}>{movie.overview} </Text>
        <ActorsCarousel />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;
