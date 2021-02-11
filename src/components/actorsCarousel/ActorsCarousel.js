import React from "react";
import { FlatList, Image, View, Pressable, Text } from "react-native";
import styles from "./styles";
import { useSelector } from "react-redux";

const ActorsCarousel = () => {
  const imageBaseUrl = useSelector((state) => state.movies.now.baseUrl);
  const actors = useSelector((state) => state.movies.actors.actors);

  const renderItem = ({ item }) => (
    <Pressable style={styles.pressable} onPress={() => {}}>
      <Image
        source={{ uri: imageBaseUrl + item.profile_path }}
        style={styles.image}
      />

      <Text style={styles.titleItem}>{item.original_name}</Text>
      <Text style={styles.subTitleItem}>({item.character})</Text>
    </Pressable>
  );

  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <View style={styles.item}>
      <Text style={styles.title}>Reparto</Text>
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
