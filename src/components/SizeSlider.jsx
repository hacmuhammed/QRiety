import { Slider } from "@nextui-org/react";
import React from "react";

function SizeSlider({ qrCodeProps, setQrCodeProps }) {
  return (
    <Slider
      aria-label="Size"
      step={1}
      maxValue={480}
      minValue={200}
      defaultValue={qrCodeProps.size}
      size="sm"
      onChange={(value) => {
        setQrCodeProps({ ...qrCodeProps, size: value });
      }}
      // hideValue
    />
  );
}

export default SizeSlider;
