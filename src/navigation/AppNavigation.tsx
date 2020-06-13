import "react-native-gesture-handler";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ROUTES } from "../constants/Routes";
import { PreLoginNavigator } from "./PreLoginNavigator";

const Stack = createStackNavigator();

export function AppNavigation() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        Roboto: require("native-base/Fonts/Roboto.ttf"),
        Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
        ...Ionicons.font,
      });
      setIsReady(true);
    };

    loadFonts();
  }, []);

  return isReady ? (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name={ROUTES.PRELOGINSTACK}
          component={PreLoginNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <AppLoading />
  );
}
