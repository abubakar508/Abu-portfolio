import React from "react";

//import types props
import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  icon,
  btnType,
  handleClick,
  containerStyles,
  iconStyles,
  titleStyles,
}: CustomButtonProps) => {
  return (
    <button
      className={` bg-accent px-8 hover:bg-accent-hover py-2 text-sm rounded-full ${containerStyles}`}
      onClick={handleClick}
      type={btnType}
    >
      <span className={` ${titleStyles}`}>{title}</span>
      <span className={` ${iconStyles}`}>{icon}</span>
    </button>
  );
};

export default CustomButton;
