import * as React from "react";
import { Input } from "@rneui/base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const InputNombre = () => {
  return (
    <Input
      disabledInputStyle={{ background: "#ddd" }}
      label="Name"
      placeholder="Enter Name"
    />
  );
}

export default InputNombre