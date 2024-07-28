import React, { useEffect, useState } from "react";
import { Button, Input, Select } from "antd";
import { qrCodeTypes } from "../data/qrCodeTypes";
import { QRCodeCanvas } from "qrcode.react";
import {
  DownloadOutlined,
  MoreOutlined,
  PlusCircleFilled,
  ShareAltOutlined,
} from "@ant-design/icons";
function Creator() {
  const [selectedType, setSelectedType] = useState("wifi");

  const handleSelectTypeChange = (value) => {
    setSelectedType(value);
  };
  useEffect(() => {
    console.log(selectedType);
  }, [selectedType]);
  return (
    <div className="creator-container">
      <div className="qr-generator">
        <div className="qr-editor">
          <div className="left-side">
            <Select
              style={{ width: "100%" }}
              options={qrCodeTypes}
              showSearch
              allowClear
              placeholder={"Select QR code type"}
              onChange={handleSelectTypeChange}
              defaultValue={"wifi"}
            />
            <div className="editor-inputs">
              {selectedType === "wifi" && (
                <>
                  <Input placeholder="Wifi SSID" />
                  <Input placeholder="Wifi Password" />
                  <Input placeholder="Network Type" />
                </>
              )}
            </div>
          </div>
          <div className="right-side">
            <div className="qr-container">
              <QRCodeCanvas
                value={"WIFI:S:MyNetwork;T:WEP;P:MyPassword;;"}
                size={470}
                bgColor={"#ffffff"}
                fgColor={"#000000"}
                level={"L"}
                includeMargin={false}
                imageSettings={{
                  src: "https://static.zpao.com/favicon.png",
                  x: undefined,
                  y: undefined,
                  height: 24,
                  width: 24,
                  excavate: true,
                }}
              />
            </div>
            <div className="right-buttons">
              <Button type="text" icon={<ShareAltOutlined />}>
                Share
              </Button>
              <Button.Group>
                <Button type="primary" icon={<DownloadOutlined />}>
                  Download as PNG
                </Button>
                <Button type="default" icon={<MoreOutlined/>}/>
              </Button.Group>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Creator;
