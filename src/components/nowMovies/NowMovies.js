import React from "react";
import { FlatList, Image, View, Pressable, Text } from "react-native";
import styles from "./styles";
import { useSelector } from "react-redux";

const PopularMovies = () => {
  const moviesNow = useSelector((state) => state.movies.now.moviesNow);

  const onClickHanler = () => {};

  const renderItem = ({ item }) => (
    <Pressable style={styles.pressable} onPress={onClickHanler}>
      <Image
        source={{ uri: moviesNow.imageBaseUrl + item.backdrop_path }}
        style={styles.image}
      />

      <Text style={styles.titleItem}>
        {item.original_title + item.original_title}
      </Text>
    </Pressable>
  );

  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <View style={styles.item}>
      <Text style={styles.title}>Películas de estreno</Text>
      <FlatList
        data={moviesNow.data}
        renderItem={renderItem}
        horizontal
        ItemSeparatorComponent={() => <ItemSeparator />}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

export default PopularMovies;
