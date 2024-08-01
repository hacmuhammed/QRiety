import React from "react";
import {
  BgColorPicker,
  CornerDotColorPicker,
  CornerSqaurColorPicker,
  DotsColorPicker,
} from ".";
import { cn, RadioGroup } from "@nextui-org/react";
import { dotTypes, corderSqaureTypes, cornerDotsTypes } from "../data/data";
import CustomRadio from "./CustomRadio";

function ShapesSettings({ qrCodeProps, setQrCodeProps }) {
  return (
    <div className={"colorPicker-container"}>
      <div className="qr-shapes-settings">
        <div className="row">
          <div className="settings">
            <h1>Dots Options</h1>
            <div className="settings-details">
              <RadioGroup
                classNames={{
                  wrapper: cn("gap-2"),
                }}
                orientation="horizontal"
                aria-labelledby="Dots Shapes"
                description="Select your QR code dots shape"
                value={qrCodeProps.dotsOptions.type}
                onValueChange={(value) => {
                  setQrCodeProps({
                    ...qrCodeProps,
                    dotsOptions: {
                      ...qrCodeProps.dotsOptions,
                      type: value,
                    },
                  });
                }}
              >
                {dotTypes.map((type) => (
                  <CustomRadio key={type.key} value={type.key}>
                    <img
                      style={{ width: "96px", height: "96px " }}
                      src={type.path}
                      alt={type.label}
                    />
                  </CustomRadio>
                ))}
              </RadioGroup>
              <DotsColorPicker
                qrCodeProps={qrCodeProps}
                setQrCodeProps={setQrCodeProps}
              />
            </div>
          </div>

          <div className="settings">
            <h1>Corner Squares Options</h1>
            <div className="settings-details">
              <RadioGroup
                classNames={{
                  wrapper: cn("gap-2"),
                }}
                orientation="horizontal"
                aria-labelledby="Dots Shapes"
                description="Select your QR code corner squares shape"
                value={qrCodeProps.cornersSquareOptions.type}
                onValueChange={(value) => {
                  setQrCodeProps({
                    ...qrCodeProps,
                    cornersSquareOptions: {
                      ...qrCodeProps.cornersSquareOptions,
                      type: value,
                    },
                  });
                }}
              >
                {corderSqaureTypes.map((type) => (
                  <CustomRadio key={type.key} value={type.key}>
                    <img
                      style={{ width: "96px", height: "96px " }}
                      src={type.path}
                      alt={type.label}
                    />
                  </CustomRadio>
                ))}
              </RadioGroup>
              <CornerSqaurColorPicker
                qrCodeProps={qrCodeProps}
                setQrCodeProps={setQrCodeProps}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="settings">
            <h1>Corner Dots Options</h1>
            <div className="settings-details">
              <RadioGroup
                classNames={{
                  wrapper: cn("gap-2"),
                }}
                orientation="horizontal"
                aria-labelledby="Dots Shapes"
                description="Select your QR code corner dots shape"
                value={qrCodeProps.cornersDotOptions.type}
                onValueChange={(value) => {
                  setQrCodeProps({
                    ...qrCodeProps,
                    cornersDotOptions: {
                      ...qrCodeProps.cornersDotOptions,
                      type: value,
                    },
                  });
                }}
              >
                {cornerDotsTypes.map((type) => (
                  <CustomRadio key={type.key} value={type.key}>
                    <img
                      style={{ width: "96px", height: "96px " }}
                      src={type.path}
                      alt={type.label}
                    />
                  </CustomRadio>
                ))}
              </RadioGroup>
              <CornerDotColorPicker
                qrCodeProps={qrCodeProps}
                setQrCodeProps={setQrCodeProps}
              />
            </div>
          </div>
          <div className="settings">
            <h1>Background Color</h1>
            <div className="settings-details">
              <BgColorPicker
                qrCodeProps={qrCodeProps}
                setQrCodeProps={setQrCodeProps}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShapesSettings;
