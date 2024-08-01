import React from "react";
import { ColorPicker } from "antd";

function CornerSqaurColorPicker({ qrCodeProps, setQrCodeProps }) {
  return (
    <>
      <ColorPicker
        style={{ width: "100%", border: "none", marginTop: ".75rem" }}
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
        placement="bottom"
        defaultValue={qrCodeProps.cornersSquareOptions.color}
        showText={(color) => <span>{color.toHexString()}</span>}
      />
    </>
  );
}

export default CornerSqaurColorPicker;
