import React from "react";
import { ColorPicker } from "antd";

function CornerSqaurColorPicker({ qrCodeProps, setQrCodeProps }) {
  return (
    <>
      <ColorPicker
        style={{ width: "100%" }}
        trigger="hover"
        onChangeComplete={(color) => {
          setQrCodeProps({
            ...qrCodeProps,
            cornersSquareOptions: {
              ...qrCodeProps.cornersSquareOptions,
              color: "#" + color.toHex(),
            },
          });
        }}
        defaultValue={qrCodeProps.cornersSquareOptions.color}
        showText={(color) => <span>{color.toHexString()}</span>}
      />
    </>
  );
}

export default CornerSqaurColorPicker;
