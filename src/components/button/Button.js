import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "./styles";

const Button = ({ onPress, text }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.textContainer}>
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string,
};

export default Button;
