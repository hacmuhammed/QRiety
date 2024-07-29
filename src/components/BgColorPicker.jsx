import React from "react";
import { ColorPicker } from "antd";

function BgColorPicker({ qrCodeProps, setQrCodeProps }) {
  return (
    <>
      <ColorPicker
        // style={{ border: "0px" }}
        trigger="hover"
        onChange={(color) => {
          setQrCodeProps({ ...qrCodeProps, bgColor: "#" + color.toHex() });
        }}
        defaultValue={qrCodeProps.bgColor}
        showText={(color) => <span>Background - {color.toHexString()}</span>}
      />
    </>
  );
}

export default BgColorPicker;
