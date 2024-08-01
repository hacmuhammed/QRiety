import React, { useRef, useEffect, useState } from "react";
import QRCodeStyling from "qr-code-styling";

const DynamicQRCode = ({ qrCodeProps }) => {
  const qrCodeRef = useRef(null);
  const [qrCodeInstance, setQrCodeInstance] = useState(null);

  useEffect(() => {
    if (!qrCodeInstance) {
      const instance = new QRCodeStyling({
        width: 400,
        height: 400,
        data: qrCodeProps.value,
        dotsOptions: {
          color: qrCodeProps.dotsOptions.color,
          type: qrCodeProps.dotsOptions.type,
        },
        backgroundOptions: {
          color: qrCodeProps.bgColor,
        },
        imageOptions: {
          crossOrigin: "anonymous",
          margin: 20,
        },
        cornersDotOptions: {
          color: qrCodeProps.cornersDotOptions.color,
          type: qrCodeProps.cornersDotOptions.type,
        },
        cornersSquareOptions: {
          color: qrCodeProps.cornersSquareOptions.color,
          type: qrCodeProps.cornersSquareOptions.type,
        },
        level: "L",
      });
      setQrCodeInstance(instance);
      instance.append(qrCodeRef.current);
    }
  }, [qrCodeInstance, qrCodeProps]);

  useEffect(() => {
    if (qrCodeInstance) {
      qrCodeInstance.update({
        data: qrCodeProps.value,
        dotsOptions: {
          color: qrCodeProps.dotsOptions.color,
          type: qrCodeProps.dotsOptions.type,
        },
        backgroundOptions: {
          color: qrCodeProps.bgColor,
        },
        cornersDotOptions: {
          color: qrCodeProps.cornersDotOptions.color,
          type: qrCodeProps.cornersDotOptions.type,
        },
        cornersSquareOptions: {
          color: qrCodeProps.cornersSquareOptions.color,
          type: qrCodeProps.cornersSquareOptions.type,
        },
        level: qrCodeProps.level,
      });
    }

    console.log(qrCodeProps.dotsOptions.color);
  }, [qrCodeProps, qrCodeInstance]);

  return <div className="qr" ref={qrCodeRef}></div>;
};

export default DynamicQRCode;
