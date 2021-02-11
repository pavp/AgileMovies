import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import styles from "./styles";

const HeaderRightButton = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <View>
      <Text
        style={styles.text}
      >{`Hola ${user.firstName} ${user.lastName}`}</Text>
    </View>
  );
};

export default HeaderRightButton;
