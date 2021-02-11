import React from "react";
import PropTypes from "prop-types";
import { FlatList, Image, View, Pressable, Text } from "react-native";
import styles from "./styles";
import { useSelector } from "react-redux";
import localize from "@localize";

const ActorsCarousel = () => {
  const imageBaseUrl = useSelector((state) => state.movies.now.baseUrl);
  const actors = useSelector((state) => state.movies.actors.actors);

  const renderItem = ({ item }) => <Item item={item} />;

  const Item = React.memo(({ item }) => {
    return (
      <Pressable style={styles.pressable} onPress={() => {}}>
        <Image
          source={{ uri: imageBaseUrl + item.profile_path }}
          style={styles.image}
        />

        <Text style={styles.titleItem}>{item.original_name}</Text>
        <Text style={styles.subTitleItem}>{`(${item.character})`}</Text>
      </Pressable>
    );
  });

  Item.propTypes = {
    item: PropTypes.object.isRequired,
  };

  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <View style={styles.item}>
      <Text style={styles.title}>{localize.t("movies.actors")}</Text>
      <FlatList
        data={actors}
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

export default ActorsCarousel;
