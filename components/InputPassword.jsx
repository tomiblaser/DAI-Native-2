import * as React from "react";
import { Input } from "@rneui/base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const InputPassword = () => {
  return (
    <Input
      disabledInputStyle={{ background: "#ddd" }}
      leftIcon={<Icon name="key-outline" size={20} />}
      label="Password"
    />
  );
}

export default InputPassword