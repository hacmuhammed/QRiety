import React, { useEffect, useState } from "react";
import { RadioGroup, Radio, Button, Input } from "@nextui-org/react";
function WifiForm({ data, setData, setQrCodeValue }) {
  const [disabledButton, setDisabledButton] = useState(true);
  const [selected, setSelected] = useState(data.type);
  const ssidChange = (e) => {
    setData({ ...data, ssid: e.target.value });
  };
  const passwordChange = (e) => {
    setData({ ...data, password: e.target.value });
  };
  const typeChange = (e) => {
    setSelected(e.target.value);
    setData({ ...data, type: e.target.value });
  };
  const handleGenerate = () => {
    setQrCodeValue(`WIFI:S:${data.ssid};T:${selected};P:${data.password};;`);
  };

  useEffect(() => {
    if (data.ssid && data.password) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [data]);
  return (
    <div className="wifi_form-container">
      <Input
        labelPlacement="inside"
        variant="bordered"
        size="sm"
        type="text"
        label="Wifi SSID"
        value={data?.ssid}
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
        orientation={'horizontal'}
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
        variant="shadow"
        color="primary"
        style={{
          color:"white"
        }}
      >
        Generate QR Code
      </Button>
    </div>
  );
}

export default WifiForm;
