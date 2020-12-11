import React, {CSSProperties} from "react";
import {View} from "@tarojs/components";
import styles from "./index.module.less";

interface Props {
  className?: string;
  style?: CSSProperties;
}

export default ({className, ...rest}: Props) => {
  return <View className={`${styles.divider} ${className}`} {...rest}/>;
};
