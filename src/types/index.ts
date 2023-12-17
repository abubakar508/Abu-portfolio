//import mouse event handler
import { MouseEventHandler } from "react";

export interface NavMobileProps {
  closeModal: () => void;
}

export interface CustomButtonProps {
  title?: string;
  icon?: any;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  containerStyles?: string;
  iconStyles?: string;
  titleStyles?: string;
  btnType?: "button" | "submit";
}

export interface SectionHeaderProps {
  title: string;
  subTitle: string;
}

export interface SkillProps {
  name: string;
  perc: number;
  progLang: JSX.Element[];
  details: string;
}
export interface FormFieldProps {
  label: string;
  labelStyles?: string;
  inputPlaceHolder?: string;
  inputType?: string;
  inputStyles?: string;
}
