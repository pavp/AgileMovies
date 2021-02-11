import React from "react";
import PropTypes from "prop-types";
import { Pressable, Text } from "react-native";
import styles from "./styles";
import { useDispatch } from "react-redux";
import { logOut } from "@store/actions/auth";
import { useNavigation } from "@react-navigation/native";

const HeaderBackButton = ({ back }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const backHandler = () => {
    back ? navigation.goBack() : dispatch(logOut());
  };

  return (
    <Pressable onPress={backHandler}>
      <Text style={styles.text}>{"<  Volver"}</Text>
    </Pressable>
  );
};

HeaderBackButton.propTypes = {
  back: PropTypes.bool,
};

export default HeaderBackButton;
