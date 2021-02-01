import React from "react";
import {Text} from "@tarojs/components";
import "./assets/iconfont.css";

interface Props {
  icon: "right" | "phone" | "location";
  size?: number;
  color?: string
}

export default ({icon, size, color}: Props) => {
  return <Text className={`iconfont icon-${icon} font-${size} ${color}`}/>;
};
