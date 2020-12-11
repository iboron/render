import React, {CSSProperties} from "react";
import {Text} from "@tarojs/components";
import styles from "./index.module.less";
import "./assets/iconfont.css";

interface Props {
  icon: "right" | "phone" | "location";
  size?: number;
  color?: 'red' | 'orange' | 'yellow' | 'olive' | 'green' | 'cyan' | 'blue' | 'purple' | 'mauve' | 'pink' | 'brown' | "grey" | 'gray' | 'black' | 'white';
  style?: CSSProperties
  className?: string
}

export default ({icon, size, color, className, ...rest}: Props) => {
  return <Text
    className={`iconfont icon-${icon} ${styles[`font-${size}`]} ${styles[`text-${color}`]} ${className}`} {...rest} />;
};
