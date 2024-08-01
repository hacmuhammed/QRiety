import React, {  useState } from "react";
import {
  AiOutlineQrcode,
  AiOutlineFormatPainter,
  AiOutlineDownload,
  AiOutlineShareAlt,
  AiOutlinePaperClip,
} from "react-icons/ai";
import {
  WifiForm,
  SelectType,
  DynamicQRCode,
  ColorPickers,
} from "../components";
import {
  AccordionItem,
  Accordion,
  Button,
  Select,
  SelectItem,
  Checkbox,
} from "@nextui-org/react";
import { qrCodeLevels, initialQrCode, dotTypes } from "../data/data";

function Creator() {
  const [selectedType, setSelectedType] = useState("wifi");
  const [qrCodeProps, setQrCodeProps] = useState(initialQrCode);
  const [includeImage, setIncludeImage] = useState(false);
  const handleSelectTypeChange = (e) => {
    setSelectedType(e.target.value);
  };
  return (
    <div className="creator-container animate__animated animate__fadeInRight">
      <div className="qr-generator ">
        <div className="qr-editor">
          <div className="left-side">
            <Accordion defaultExpandedKeys={["2"]} variant="light">
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
                subtitle="Customize your QR code to make it unique"
                title="Customization"
              >
                <ColorPickers
                  qrCodeProps={qrCodeProps}
                  setQrCodeProps={setQrCodeProps}
                />
                <div className="qrcode-shapes">
                  <h1>Shapes</h1>
                  
                </div>
              </AccordionItem>
              <AccordionItem
                indicator={<AiOutlinePaperClip />}
                key="3"
                aria-label="QR Icon"
                subtitle="Add an icon to your QR code to make it extra special"
                title="QR Icon"
              >
                <div className="customize-container">
                  <Checkbox
                    isSelected={qrCodeProps.margin}
                    onValueChange={(value) => {
                      setQrCodeProps({ ...qrCodeProps, margin: value });
                    }}
                  >
                    Include Margin
                  </Checkbox>
                  <Checkbox
                    isSelected={includeImage}
                    onValueChange={(value) => {
                      setIncludeImage(value);
                    }}
                  >
                    QR Code Icon
                  </Checkbox>
                  {includeImage && <p>dsadasasddsasad</p>}
                </div>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="divider"></div>
          <div className="right-side">
            <Select
              size="sm"
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
            <div className="qr-container">
              <DynamicQRCode qrCodeProps={qrCodeProps} />
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
