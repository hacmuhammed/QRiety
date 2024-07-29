import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import {
  AiOutlineQrcode,
  AiOutlineFormatPainter,
  AiOutlineDownload,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { WifiForm } from "../components";
import { AccordionItem, Accordion, Button } from "@nextui-org/react";
import SelectType from "../components/SelectType";
function Creator() {
  const [selectedType, setSelectedType] = useState("wifi");
  const [qrCodeValue, setQrCodeValue] = useState(null);
  const [wifiFormData, setWifiFormData] = useState({
    ssid: "",
    password: "",
    type: "WPA/WPA2",
  });
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
                      data={wifiFormData}
                      setData={setWifiFormData}
                      setQrCodeValue={setQrCodeValue}
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
                sdadas
              </AccordionItem>
            </Accordion>
          </div>
          <div className="right-side">
            <div className="qr-container">
              <QRCodeSVG
                value={qrCodeValue}
                size={300} //max 470
                bgColor={"#ffffff"}
                fgColor={"#000000"}
                level={"L"}
                includeMargin={false}
                imageSettings={{
                  src: "",
                  x: undefined,
                  y: undefined,
                  height: 70,
                  width: 70,
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
