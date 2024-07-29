import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import {
  AiOutlineQrcode,
  AiOutlineFormatPainter,
  AiOutlineDownload,
  AiOutlineShareAlt,
} from "react-icons/ai";
import {
  WifiForm,
  SelectType,
  SizeSlider,
  FgColorPicker,
  BgColorPicker,
} from "../components";
import {
  AccordionItem,
  Accordion,
  Button,
  Select,
  SelectItem,
  Checkbox,
} from "@nextui-org/react";
import { qrCodeLevels, initialQrCode } from "../data/data";

function Creator() {
  const [selectedType, setSelectedType] = useState("wifi");
  const [qrCodeProps, setQrCodeProps] = useState(initialQrCode);
  const handleSelectTypeChange = (e) => {
    setSelectedType(e.target.value);
  };
  return (
    <div className="creator-container animate__animated animate__fadeInRight">
      <div className="qr-generator ">
        <div className="qr-editor">
          <div className="left-side">
            <Accordion defaultExpandedKeys={["1"]} variant="light">
              <AccordionItem
                key="1"
                indicator={<AiOutlineQrcode />}
                aria-label="QR Code Information"
                subtitle="Define the properties of your QR code"
                title="QR Code Information"
              >
                <div className="editor-inputs" style={{ marginTop: "1rem" }}>
                  <SelectType onChange={handleSelectTypeChange} />
                  {selectedType === "wifi" && (
                    <WifiForm
                      qrCodeProps={qrCodeProps}
                      setQrCodeProps={setQrCodeProps}
                    />
                  )}
                </div>
              </AccordionItem>
              <AccordionItem
                indicator={<AiOutlineFormatPainter />}
                key="2"
                aria-label="Customization"
                subtitle="Customize your QR code to make it unique."
                title="Customization"
              >
                <div className="customize-container">
                  <Select
                    label="Error Level"
                    aria-labelledby="ErrorLevel"
                    style={{ width: "100%" }}
                    onChange={(e) => {
                      setQrCodeProps({ ...qrCodeProps, level: e.target.value });
                    }}
                    disallowEmptySelection
                    defaultSelectedKeys={[qrCodeProps.level]}
                    variant="bordered"
                  >
                    {qrCodeLevels.map((level) => (
                      <SelectItem key={level.key}>{level.label}</SelectItem>
                    ))}
                  </Select>

                  <SizeSlider
                    qrCodeProps={qrCodeProps}
                    setQrCodeProps={setQrCodeProps}
                  />
                  <div className={"colorPicker-container"}>
                    <FgColorPicker
                      qrCodeProps={qrCodeProps}
                      setQrCodeProps={setQrCodeProps}
                    />
                    <BgColorPicker
                      qrCodeProps={qrCodeProps}
                      setQrCodeProps={setQrCodeProps}
                    />
                  </div>
                  <Checkbox
                    isSelected={qrCodeProps.margin}
                    onValueChange={(value)=>{
                      setQrCodeProps({ ...qrCodeProps, margin: value });
                    }}
                  >
                    Include Margin
                  </Checkbox>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="right-side">
            <div className="qr-container" >
              <QRCodeSVG
                value={qrCodeProps.value}
                size={qrCodeProps.size}
                bgColor={qrCodeProps.bgColor}
                fgColor={qrCodeProps.fgColor}
                level={qrCodeProps.level}
                includeMargin={qrCodeProps.margin}
                imageSettings={{
                  src: "",
                  x: undefined,
                  y: undefined,
                  height: 50,
                  width: 100,
                  excavate: false,
                }}
              />
            </div>
            <div className="right-buttons">
              <Button
                variant="light"
                style={{ width: "30%" }}
                startContent={<AiOutlineShareAlt />}
              >
                Share
              </Button>
              <Button
                variant="solid"
                color="primary"
                style={{ color: "white", width: "70%" }}
                startContent={<AiOutlineDownload />}
              >
                Download as PNG
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Creator;
