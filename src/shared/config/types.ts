import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode, ButtonHTMLAttributes } from "react";

// _app page layout
export type AppPropsWithLayout = AppProps & {
  Component: NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
  };
};


// button props
export type ButtonProps = {
  className?: string;
  translate?: string;
  sizeClass?: string;
  fontSize?: string;
  //
  loading?: boolean;
  disabled?: boolean;
  alt?: boolean;
  secondary?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  href?: string;
  targetBlank?: boolean;
  onClick?: () => void;
  children?: any;
  icon?: string;
  styles?: string;
  hover?: boolean;
  text?:string
};
