import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FlatList, Image, View, Pressable, Text } from "react-native";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesPopular } from "@store/actions/movies";
import NowMovies from "@components/nowMovies/NowMovies";
import { useNavigation } from "@react-navigation/native";

const PopularMovies = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [firsTime, setFirstTime] = useState(true);
  const imageBaseUrl = useSelector((state) => state.movies.popular.baseUrl);
  const movies = useSelector((state) => state.movies.popular.movies);
  const loading = useSelector((state) => state.movies.popular.loading);
  const endReached = useSelector((state) => state.movies.popular.endReached);
  const skip = useSelector((state) => state.movies.popular.skip);

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

  const loadMoreData = () => {
    if (!endReached && !firsTime && !loading) {
      dispatch(fetchMoviesPopular({ page: skip }));
    }
  };

  return (
    <View style={styles.item}>
      <FlatList
        data={movies}
        renderItem={renderItem}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.contentContainer}
        onEndReached={loadMoreData}
        onEndReachedThreshold={1}
        ListHeaderComponent={
          <View>
            <NowMovies />
          </View>
        }
      />
    </View>
  );
};

export default PopularMovies;
