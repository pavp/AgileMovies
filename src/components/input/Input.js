import React, { useState } from "react";
import PropTypes from "prop-types";
import { TextInput, Text, View } from "react-native";
import styles from "./styles";

const Input = React.forwardRef(
  ({ name, error, rules, setValue, placeholder, ...inputProps }, ref) => {
    const [textValue, setTextValue] = useState();

    const onChangeHandler = (value) => {
      setValue(name, value, true);
      setTextValue(value);
    };

    const labelError = () => {
      return (
        <View style={styles.labelError}>
          <Text style={styles.textError}>{error && error.message}</Text>
        </View>
      );
    };

    return (
      <>
        <View style={styles.container}>
          <TextInput
            name={name}
            style={styles.textInput}
            ref={ref}
            testID={name}
            placeholderTextColor={"gray"}
            placeholder={placeholder}
            onChangeText={(value) => onChangeHandler(value)}
            selectionColor={"gray"}
            value={textValue}
            {...inputProps}
          />
        </View>
        {error && labelError()}
      </>
    );
  }
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.object,
  rules: PropTypes.object,
  placeholder: PropTypes.string,
  setValue: PropTypes.func,
};

export default Input;
