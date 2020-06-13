import { Button } from "./common/Button";
import { Colors } from "../themes/Colors";
import { StyleSheet, View } from "react-native";
import { Card, Container, Form, H2, Text } from "native-base";
import { Input } from "./common/Input";
import { useInputState } from "../utils/useInputState";
import React from "react";
import validator from "validator";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
});

export function LoginScreen() {
  const [email, setEmail, emailError, isEmailValid] = useInputState(
    "",
    (text) =>
      validator.isEmail(text) ? undefined : "Please enter a valid email"
  );
  const [
    password,
    setPassword,
    passwordError,
    isPasswordValid,
  ] = useInputState("", (text) =>
    text && text.length >= 8
      ? undefined
      : "Password must have at least 8 characters"
  );
  return (
    <Container style={{ backgroundColor: Colors.gray03 }}>
      <View style={styles.wrapper}>
        <View style={{ paddingVertical: 24 }}>
          <H2>Login</H2>
        </View>
        <Form>
          <Input
            errorMessage={emailError}
            placeholder="Email"
            onChange={setEmail}
            value={email}
          />
          <Input
            errorMessage={passwordError}
            placeholder="Password"
            onChange={setPassword}
            secureText={true}
            value={password}
          />
        </Form>
        <View style={{ paddingVertical: 15 }}>
          <Button onPress={() => {}} text="Login" />
        </View>
      </View>
    </Container>
  );
}
