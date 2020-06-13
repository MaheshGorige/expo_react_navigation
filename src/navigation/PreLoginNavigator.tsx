import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../components/LoginScreen";
import { ROUTES } from "../constants/Routes";

const Stack = createStackNavigator<PreLoginStackParams>();

export type PreLoginStackParams = {
  readonly [ROUTES.LOGIN]: undefined;
};

export function PreLoginNavigator() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
}
