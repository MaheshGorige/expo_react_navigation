
import { Colors } from "../../themes/Colors";
import { Button as NBButton, Text } from "native-base";
import { UnreachableCaseError } from "../../utils/unreachableCaseError";
import React from "react";

type ButtonType = "primary" | "secondary" | "light";
interface Props {
  readonly disabled?: boolean;
  readonly text: string;
  readonly onPress: () => void;
  readonly type?: ButtonType;
}
export function Button({ disabled = false, text, onPress, type = "primary" }: Props) {
  const getButtonStyles = () => {
    switch (type) {
      case "primary":
        return {
          button: { backgroundColor: "#6a5ac4" },
          buttonText: { color: Colors.white },
        };
      case "secondary":
        return {
          button: { backgroundColor: Colors.gray05 },
          buttonText: { color: Colors.white },
        };
      case "light":
        return {
          button: { backgroundColor: Colors.white, borderColor: Colors.gray05, borderWidth: 1 },
          buttonText: { color: Colors.black },
        };
      default:
        throw new UnreachableCaseError(type);
    }
  };
  const { button, buttonText } = getButtonStyles();

  return (
    <NBButton block disabled={disabled} onPress={onPress} style={[button, { height: 40 }]}>
      <Text
        style={[
          buttonText,
          {
            color: disabled ? Colors.gray05 : buttonText.color,
            fontSize: 16,
          },
        ]}
        uppercase={false}
      >
        {text}
      </Text>
    </NBButton>
  );
}
