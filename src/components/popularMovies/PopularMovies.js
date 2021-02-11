import React from "react";
import { FlatList, Image, View, Pressable, Text } from "react-native";
import styles from "./styles";
import { useSelector } from "react-redux";

const NowMovies = () => {
  const moviesPopular = useSelector(
    (state) => state.movies.popular.moviesPopular
  );

  const onClickHanler = () => {};

  const renderItem = ({ item }) => (
    <Pressable style={styles.pressable} onPress={onClickHanler}>
      <Image
        source={{ uri: moviesPopular.imageBaseUrl + item.backdrop_path }}
        style={styles.image}
      />

      <Text style={styles.titleItem}>
        {item.original_title + item.original_title}
      </Text>
    </Pressable>
  );

  return (
    <View style={styles.item}>
      <Text style={styles.title}>Películas más populares</Text>
      <FlatList
        data={moviesPopular.data}
        renderItem={renderItem}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

export default NowMovies;
