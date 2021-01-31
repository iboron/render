import React, {CSSProperties} from "react";
import {Text} from "@tarojs/components";
import "./assets/iconfont.css";

interface Props {
  icon: "right" | "phone" | "location";
  size?: number;
  color?: 'red' | 'orange' | 'yellow' | 'olive' | 'green' | 'cyan' | 'blue' | 'purple' | 'mauve' | 'pink' | 'brown' | "grey" | 'gray' | 'black' | 'white';
  style?: CSSProperties
  className?: string
}

export default ({icon, size, color, ...rest}: Props) => {
  return <Text
    className={`iconfont icon-${icon} font-${size} text-${color}-6`}
    {...rest}
  />;
};
