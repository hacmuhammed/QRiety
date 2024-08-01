import React, { useEffect, useState } from "react";
import { ColorPicker } from "antd";

function BgColorPicker({ qrCodeProps, setQrCodeProps }) {
  return (
    <>
      <ColorPicker
        style={{ width: "100%", border: "none"  }}
        placement="bottom"
        trigger="hover"
        onChangeComplete={(color) => {
          setQrCodeProps({ ...qrCodeProps, bgColor: "#" + color.toHex() });
        }}
        defaultValue={qrCodeProps.bgColor}
        showText={(color) => <span>{color.toHexString()}</span>}
      />
    </>
  );
}

export default BgColorPicker;
