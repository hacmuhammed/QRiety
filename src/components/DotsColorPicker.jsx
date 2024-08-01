import React from "react";
import { ColorPicker } from "antd";

function DotsColorPicker({ qrCodeProps, setQrCodeProps }) {
  return (
    <>
      <ColorPicker
        style={{ width: "100%" }}
        trigger="hover"
        
        onChangeComplete={(color) => {
          setQrCodeProps({
            ...qrCodeProps,
            dotsOptions: {
              ...qrCodeProps.dotsOptions,
              color: "#" + color.toHex(),
            },
          });
        }}
        defaultValue={qrCodeProps.dotsOptions.color}
        showText={(color) => <span>{color.toHexString()}</span>}
      />
    </>
  );
}

export default DotsColorPicker;
