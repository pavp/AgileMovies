import React, { useEffect, useRef } from "react";
import { View, Text } from "react-native";
import { useForm } from "react-hook-form";
// import localize from '@i18n';
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthLogin, cleanStateLoading } from "@store/actions/auth";
import Form from "@components/form/Form";
import Input from "@components/input/Input";
import Button from "@components/button/Button";
import rules from "@utility/rules";
import DropdownAlert from "react-native-dropdownalert";

import styles from "./styles";

const FormSignIn = () => {
  const dispatch = useDispatch();
  const { trigger, handleSubmit, register, setValue, errors } = useForm({
    shouldUnregister: false,
  });

  const { loading, status, error } = useSelector((state) => state.auth.login);
  const dropDownAlertRef = useRef(null);

  useEffect(() => {
    if (status === "failed" && error !== "NetworkError") {
      dispatch(cleanStateLoading());
    }
    if (error) {
      dropDownAlertRef.current.alertWithType("error", "Error", error);
    }
  }, [dispatch, error, status]);

  const onSubmit = handleSubmit(async (data) => {
    await dispatch(fetchAuthLogin(data));
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AGILE MOVIES</Text>
      <Form {...{ trigger, register, setValue, rules, errors }}>
        <Input name="username" placeholder={"username"} autoCapitalize="none" />
        <Input name="password" secureTextEntry placeholder={"password"} />
        <View style={styles.buttonContainer}>
          <Button text={"Login"} onPress={onSubmit} />
        </View>
      </Form>
      <DropdownAlert ref={dropDownAlertRef} />
    </View>
  );
};

export default FormSignIn;
