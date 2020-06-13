import { Colors } from "../../themes/Colors";
import { Input as NBInput, Item, Text } from "native-base";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.white,
    borderRadius: 4,
    marginVertical: 8,
    paddingHorizontal: 2,
    width: "100%",
  },
});

interface Props {
  readonly disabled?: boolean;
  readonly errorMessage?: string;
  readonly onChange?: (text: string) => void;
  readonly placeholder: string;
  readonly secureText?: boolean;
  readonly value: string;
}

export function Input({
  disabled = false,
  errorMessage,
  onChange,
  placeholder,
  value,
  secureText,
}: Props) {

  return (
    <>
      <Item
        regular
        style={[
          styles.item,
          {
            backgroundColor: disabled ? Colors.gray03 : Colors.white,
          },
        ]}
      >
        <NBInput
          autoCapitalize="none"
          autoCorrect={false}
          disabled={disabled}
          onChangeText={onChange}
          placeholder={placeholder}
          secureTextEntry={secureText}
          style={{ height: 40 }}
          underlineColorAndroid="transparent"
          value={value}
        />
      </Item>
      {errorMessage && (
        <View>
          <Text style={{ color: Colors.red, fontSize: 11 }}>
            {errorMessage}
          </Text>
        </View>
      )}
    </>
  );
}
