import React from "react";
import { ColorPicker } from "antd";

function FgColorPicker({ qrCodeProps, setQrCodeProps }) {
  return (
    <>
      <ColorPicker
        // style={{ border: "0px" }}
        trigger="hover"
        onChange={(color) => {
          setQrCodeProps({ ...qrCodeProps, fgColor: "#" + color.toHex() });
        }}
        defaultValue={qrCodeProps.fgColor}
        showText={(color) => <span>Foreground - {color.toHexString()}</span>}
      />
    </>
  );
}

export default FgColorPicker;
