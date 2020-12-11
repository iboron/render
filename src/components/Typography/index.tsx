import React, {CSSProperties} from "react";
import {View} from "@tarojs/components";
import styles from './index.module.less'

interface Props {
  children: object | string;
  size?: number;
  align?: 'left' | 'right' | 'center';
  color?: 'red' | 'orange' | 'yellow' | 'olive' | 'green' | 'cyan' | 'blue' | 'purple' | 'mauve' | 'pink' | 'brown' | "grey" | 'gray' | 'black' | 'white';
  className?: string;
  style?: CSSProperties;
}

export default ({children, size = 24, color = 'black', align = 'left', className, ...rest}: Props) => {
  return <View
    className={`${styles[`font-${size}`]} ${styles[`text-${color}`]} ${styles[`align-${align}`]} ${className}`} {...rest}>{children}</View>;
};
