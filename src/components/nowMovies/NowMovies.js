import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FlatList, Image, View, Pressable, Text } from "react-native";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesNow } from "@store/actions/movies";
import { useNavigation } from "@react-navigation/native";
import localize from "@localize";

const PopularMovies = () => {
  const navigation = useNavigation();
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

  const onClickHanler = (item) => {
    navigation.navigate("Detail", { movie: item });
  };

  const renderItem = ({ item }) => <Item item={item} />;

  const Item = React.memo(({ item }) => {
    return (
      <Pressable style={styles.pressable} onPress={() => onClickHanler(item)}>
        <Image
          source={{ uri: imageBaseUrl + item.backdrop_path }}
          style={styles.image}
        />

        <Text style={styles.titleItem}>{item.original_title}</Text>
      </Pressable>
    );
  });

  Item.propTypes = {
    item: PropTypes.object.isRequired,
  };

  const ItemSeparator = () => <View style={styles.separator} />;

  const loadMoreData = () => {
    if (!endReached && !firsTime && !loading) {
      dispatch(fetchMoviesNow({ page: skip }));
    }
  };

  return (
    <View style={styles.item}>
      <Text style={styles.title}>{localize.t("movies.now")}</Text>
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
      <Text style={styles.title}>{localize.t("movies.popular")}</Text>
    </View>
  );
};

export default PopularMovies;
