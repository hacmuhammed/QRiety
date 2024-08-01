import React from "react";
import { ColorPicker } from "antd";

function CornerDotColorPicker({ qrCodeProps, setQrCodeProps }) {
  return (
    <>
      <ColorPicker
        style={{ width: "100%", border: "none", marginTop: ".75rem" }}
        trigger="hover"
        onChangeComplete={(color) => {
          setQrCodeProps({
            ...qrCodeProps,
            cornersDotOptions: {
              ...qrCodeProps.cornersDotOptions,
              color: "#" + color.toHex(),
            },
          });
        }}
        placement="bottom"
        defaultValue={qrCodeProps.cornersDotOptions.color}
        showText={(color) => <span>{color.toHexString()}</span>}
      />
    </>
  );
}

export default CornerDotColorPicker;
