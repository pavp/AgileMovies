import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import styles from "./styles";
import localize from "@localize";

const HeaderRightButton = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <View>
      <Text style={styles.text}>{`${localize.t("header.hello")} ${
        user.firstName
      } ${user.lastName}`}</Text>
    </View>
  );
};

export default HeaderRightButton;
