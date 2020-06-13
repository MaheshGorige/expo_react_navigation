
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function useInputState(
  initialValue: string,
  validate: (text: string) => string | undefined,
): readonly [string, Dispatch<SetStateAction<string>>, string | undefined, boolean] {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState<string | undefined>(undefined);
  const [isValid, setIsValid] = useState(error ? true : false);

  useEffect(() => {
    if (value === "") {
      setError(undefined);
      setIsValid(false);

      return;
    }
    setError(validate(value));
    setIsValid(error ? true : false);
  }, [error, validate, value]);

  return [value, setValue, error, isValid];
}
