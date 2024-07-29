import React from "react";
import { WifiOutlined } from "@ant-design/icons";

const qrCodeTypes = [
  {
    label: "Wifi",
    key: "wifi",
  },
  {
    label: "URL",
    key: "url",
  },
  {
    label: "vCard",
    key: "vcard",
  },
  {
    label: "Text",
    key: "text",
  },
  {
    label: "SMS",
    key: "sms",
  },
  {
    label: "E-mail",
    key: "email",
  },
  {
    label: "Twitter",
    key: "twitter",
  },
  {
    label: "Facebook",
    key: "facebook",
  },
  {
    label: "PDF",
    key: "pdf",
  },
  {
    label: "MP3",
    key: "mp3",
  },
  {
    label: "Image",
    key: "image",
  },
];

const qrCodeLevels = [
  {
    key: "L",
    label: "Low",
  },
  {
    key: "M",
    label: "Medium",
  },
  {
    key: "Q",
    label: "Quartile",
  },
  {
    key: "H",
    label: "High",
  },
];

const initialQrCode = {
  value: "https://www.qriety.com", //done
  size: 300, //done
  level: "L", //done
  fgColor: "#000", //done
  bgColor: "#fff", //done
  margin: false, //done
  image: {
    source: null,
    width: 24,
    height: 24,
    center: true,
    x: undefined,
    y: undefined,
    excavate: true,
  },
};

export { qrCodeTypes, qrCodeLevels, initialQrCode };
