import * as React from "react";
import { Input } from "@rneui/base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const InputApellido = () => {
  return (
    <Input
      disabledInputStyle={{ background: "#ddd" }}
      label="Last Name"
      placeholder="Enter Last Name"
    />
  );
}

export default InputApellido