import * as React from "react";
import { Input } from "@rneui/base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const InputNombre = () => {
  return (
    <Input
      disabledInputStyle={{ background: "#ddd" }}
      leftIcon={<Icon name="email-outline" size={20} />}
      label="Email"
    />
  );
}

export default InputNombre