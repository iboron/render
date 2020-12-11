import React, {CSSProperties} from "react";
import {View} from "@tarojs/components";
import styles from "./index.module.less";

interface Props {
  children: object;
  span?: number;
  className?: string;
  style?: CSSProperties;
}

export default ({children, span = 0, className, ...rest}: Props) => {
  return (
    <View
      className={`
      ${styles.col}
      ${styles[`col-${span}`]}
      ${className}
      `}

      {...rest}
    >
      {children}
    </View>
  );
};
