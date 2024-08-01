import React from "react";
import { ColorPicker } from "antd";

function DotsColorPicker({ qrCodeProps, setQrCodeProps }) {
  return (
    <>
      <ColorPicker
        style={{ width: "100%", border: "none", marginTop:".75rem" }}
        trigger="hover"
        panelRender
        onChangeComplete={(color) => {
          setQrCodeProps({
            ...qrCodeProps,
            dotsOptions: {
              ...qrCodeProps.dotsOptions,
              color: "#" + color.toHex(),
            },
          });
        }}
        placement="bottom"
        defaultValue={qrCodeProps.dotsOptions.color}
        showText={(color) => <span>{color.toHexString()}</span>}
      />
    </>
  );
}

export default DotsColorPicker;
