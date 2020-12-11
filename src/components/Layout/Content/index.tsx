import React, {CSSProperties} from "react";
import {View} from "@tarojs/components";
import styles from "./index.module.less";

interface Props {
  children: object;
  className?: string;
  style?: CSSProperties;
}

export default ({children,className, ...rest}: Props) => {
  return <View className={`${styles.content} ${className}`} {...rest}>{children}</View>;
};
