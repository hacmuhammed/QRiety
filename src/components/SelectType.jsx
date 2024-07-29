import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { qrCodeTypes } from "../data/data";
function SelectType({ onChange }) {
  return (
    <Select
      label="QR Code Type"
      aria-labelledby="Select Type"
      style={{ width: "100%" }}
      onChange={onChange}
      disallowEmptySelection
      defaultSelectedKeys={["wifi"]}
      variant="bordered"
      
    >
      {qrCodeTypes.map((type) => (
        <SelectItem key={type.key}>{type.label}</SelectItem>
      ))}
    </Select>
  );
}

export default SelectType;
