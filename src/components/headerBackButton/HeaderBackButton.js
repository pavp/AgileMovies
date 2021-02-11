import React from "react";
import { Pressable, Text } from "react-native";
import styles from "./styles";
import { useDispatch } from "react-redux";
import { logOut } from "@store/actions/auth";

const HeaderBackButton = () => {
  const dispatch = useDispatch();

  const backHandler = () => {
    dispatch(logOut());
  };

  return (
    <Pressable onPress={backHandler}>
      <Text style={styles.text}>{"<  Volver"}</Text>
    </Pressable>
  );
};

export default HeaderBackButton;
