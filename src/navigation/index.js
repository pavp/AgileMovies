import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

import AppScreens from "@screens/app";
import AuthScreens from "@screens/auth";
import HeaderRightButton from "@components/headerRightButton/HeaderRightButton";
import HeaderBackButton from "@components/headerBackButton/HeaderBackButton";
import styles from "./styles";

const AppStack = createStackNavigator();
const AppNavigator = () => {
  return (
    <AppStack.Navigator initialRouteName="Home">
      <AppStack.Screen
        name="Home"
        component={AppScreens.Home}
        options={{
          headerLeft: () => <HeaderBackButton />,
          headerTitle: () => undefined,
          headerRight: () => <HeaderRightButton />,
          headerStyle: styles.header,
        }}
      />
      <AppStack.Screen
        name="Detail"
        component={AppScreens.Detail}
        options={{
          headerLeft: () => <HeaderBackButton back />,
          headerTitle: () => undefined,
          headerStyle: styles.header,
        }}
      />
    </AppStack.Navigator>
  );
};

const AuthStack = createStackNavigator();
const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName={"SignIn"}
      screenOptions={{
        headerBackTitleVisible: false,
      }}
    >
      <AuthStack.Screen
        name="SignIn"
        component={AuthScreens.SignIn}
        options={{
          header: () => {},
        }}
      />
    </AuthStack.Navigator>
  );
};

const RootNavigation = () => {
  const [loading, setLoading] = useState(true);
  const {
    login: { status },
  } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const isLogged = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2500);
    };

    isLogged();
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {loading ? (
          <AuthScreens.Splash />
        ) : user ? (
          <AppNavigator />
        ) : (
          <AuthNavigator />
        )}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RootNavigation;
