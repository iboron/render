import React, {CSSProperties} from "react";
import {View} from "@tarojs/components";
import styles from "./index.module.less";

interface Props {
  children: object;
  style?: CSSProperties
  className?: string
}

export default ({children, className, ...rest}: Props) => {
  return <View className={`${styles.card} ${className}`} {...rest}>{children}</View>;
};
