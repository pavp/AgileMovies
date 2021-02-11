import React, { useState, useEffect } from "react";
import { FlatList, Image, View, Pressable, Text } from "react-native";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesNow } from "@store/actions/movies";

const PopularMovies = () => {
  const dispatch = useDispatch();
  const [firsTime, setFirstTime] = useState(true);
  const imageBaseUrl = useSelector((state) => state.movies.now.baseUrl);
  const movies = useSelector((state) => state.movies.now.movies);
  const loading = useSelector((state) => state.movies.now.loading);
  const endReached = useSelector((state) => state.movies.popular.endReached);
  const skip = useSelector((state) => state.movies.now.skip);

  useEffect(() => {
    if (movies.length) {
      setFirstTime(false);
    }
  }, [movies]);

  const onClickHanler = () => {};

  const renderItem = ({ item }) => (
    <Pressable style={styles.pressable} onPress={onClickHanler}>
      <Image
        source={{ uri: imageBaseUrl + item.backdrop_path }}
        style={styles.image}
      />

      <Text style={styles.titleItem}>
        {item.original_title + item.original_title}
      </Text>
    </Pressable>
  );

  const ItemSeparator = () => <View style={styles.separator} />;

  const loadMoreData = () => {
    if (!endReached && !firsTime && !loading) {
      dispatch(fetchMoviesNow({ page: skip }));
    }
  };

  return (
    <View style={styles.item}>
      <Text style={styles.title}>Películas de estreno</Text>
      <FlatList
        data={movies}
        renderItem={renderItem}
        horizontal
        ItemSeparatorComponent={() => <ItemSeparator />}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.contentContainer}
        onEndReached={loadMoreData}
        onEndReachedThreshold={1}
      />
      <Text style={styles.title}>Películas más populares</Text>
    </View>
  );
};

export default PopularMovies;
