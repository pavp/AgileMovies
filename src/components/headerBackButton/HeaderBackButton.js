import React from "react";
import PropTypes from "prop-types";
import { Pressable, Text } from "react-native";
import styles from "./styles";
import { useDispatch } from "react-redux";
import { logOut } from "@store/actions/auth";
import { cleanMovies } from "@store/actions/movies";
import { useNavigation } from "@react-navigation/native";
import localize from "@localize";

const HeaderBackButton = ({ back }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const cleanRedux = () => {
    dispatch(logOut());
    dispatch(cleanMovies());
  };

  const backHandler = () => {
    back ? navigation.goBack() : cleanRedux();
  };

  return (
    <Pressable onPress={backHandler}>
      <Text style={styles.text}>{`<  ${localize.t("header.back")}`}</Text>
    </Pressable>
  );
};

HeaderBackButton.propTypes = {
  back: PropTypes.bool,
};

export default HeaderBackButton;
