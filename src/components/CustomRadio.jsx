import React from "react";
import { Radio, cn } from "@nextui-org/react";

function CustomRadio(props) {
  const { children, ...otherProps } = props;

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          "inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-center",
          "flex-col-reverse max-w-[300px] cursor-pointer rounded-md   border-2 border-transparent",
          "data-[selected=true]:border-primary ",
        ),
        wrapper:cn(
            "hidden "
        ),
        labelWrapper:cn('ml-0')

      }}
      className=".hide-radio-dot"
    >
      {children}
    </Radio>
  );
}

export default CustomRadio;
