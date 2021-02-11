import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

import AppScreens from "@screens/app";
import AuthScreens from "@screens/auth";

const AppStack = createStackNavigator();
const AppNavigator = () => {
  return (
    <AppStack.Navigator initialRouteName="Home">
      <AppStack.Screen
        name="Home"
        component={AppScreens.Home}
        options={() => ({
          headerShown: false,
        })}
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
