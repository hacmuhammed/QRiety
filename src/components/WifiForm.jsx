import React, { useEffect, useState } from "react";
import { RadioGroup, Radio, Button, Input } from "@nextui-org/react";
function WifiForm({ qrCodeProps, setQrCodeProps }) {
  const [disabledButton, setDisabledButton] = useState(true);
  const [wifiFormData, setWifiFormData] = useState({
    ssid: "",
    password: "",
    type: "WPA/WPA2",
  });
  const [selected, setSelected] = useState(wifiFormData.type);

  const ssidChange = (e) => {
    setWifiFormData({ ...wifiFormData, ssid: e.target.value });
  };
  const passwordChange = (e) => {
    setWifiFormData({ ...wifiFormData, password: e.target.value });
  };
  const typeChange = (e) => {
    setSelected(e.target.value);
    setWifiFormData({ ...wifiFormData, type: e.target.value });
  };
  const handleGenerate = () => {
    setQrCodeProps({
      ...qrCodeProps,
      value: `WIFI:S:${wifiFormData.ssid};T:${selected};P:${wifiFormData.password};;`,
    });
  };
  useEffect(() => {
    if (wifiFormData.ssid && wifiFormData.password) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [wifiFormData]);
  return (
    <div className="wifi_form-container">
      <Input
        labelPlacement="inside"
        variant="bordered"
        size="sm"
        type="text"
        label="SSID"
        value={qrCodeProps?.ssid}
        onChange={ssidChange}
      />
      <Input
        labelPlacement="inside"
        variant="bordered"
        size="sm"
        type="text"
        label="Wifi Password"
        onChange={passwordChange}
      />
      <RadioGroup
        orientation={"horizontal"}
        label="Network Type"
        value={selected}
        onChange={typeChange}
        color="primary"
      >
        <Radio value="WPA/WPA2">WPA/WPA2</Radio>
        <Radio value="WEP">WEP</Radio>
        <Radio value="nopass">nopass</Radio>
      </RadioGroup>
      <Button
        isDisabled={disabledButton}
        onClick={handleGenerate}
        variant={disabledButton ? "flat" : "shadow"}
        color="primary"
        style={{
          color: "white",
        }}
      >
        Generate QR Code
      </Button>
    </div>
  );
}

export default WifiForm;
