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
  value: "https://www.qriety.com",
  size: 400,
  level: "L",
  bgColor: "#fff",
  margin: false,
  dotsOptions: {
    color: "#00000",
    type: "square",
  },
  cornersDotOptions: {
    color: "#000000",
    type: "square",
  },
  cornersSquareOptions: {
    color: "#000000",
    type: "square",
  },
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

const corderSqaureTypes = [
  {
    key: "square",
    label: "Square",
    path: "Images/Shapes/CornerSquare/Square.png",
  },
  {
    key: "extra-rounded",
    label: "Rounded",
    path: "Images/Shapes/CornerSquare/Rounded.png",
  },
  {
    key: "rounded",
    label: "Extra Rounded",
    path: "Images/Shapes/CornerSquare/ExtraRounded.png",
  },
];

const dotTypes = [
  {
    key: "square",
    label: "Square",
    path: "Images/Shapes/Dots/Square.png",
  },
  {
    key: "rounded",
    label: "Rounded",
    path: "Images/Shapes/Dots/Rounded.png",
  },
  {
    key: "dots",
    label: "Dots",
    path: "Images/Shapes/Dots/Dots.png",
  },
  {
    key: "classy",
    label: "Classy",
    path: "Images/Shapes/Dots/Classy.png",
  },
  { 
    key: "classy-rounded",
    label: "Classy Rounded",
    path: "Images/Shapes/Dots/ClassyRounded.png",
  },

  {
    key: "extra-rounded",
    label: "Extra Rounded",
    path: "Images/Shapes/Dots/ExtraRounded.png",
  },
];

const cornerDotsTypes = [
  {
    key: "square",
    label: "Square",
    path: "Images/Shapes/CornerDots/Square.png",
  },
  {
    key: "dot",
    label: "Dot",
    path: "Images/Shapes/CornerDots/Dot.png",
  },
];

export {
  qrCodeTypes,
  qrCodeLevels,
  initialQrCode,
  dotTypes,
  corderSqaureTypes,
  cornerDotsTypes,
};
