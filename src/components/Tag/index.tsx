import React, {CSSProperties} from "react";
import {Text} from "@tarojs/components";
import styles from "./index.module.less";

interface Props {
  children: object | string,
  border?: boolean;
  color?: 'red' | 'orange' | 'yellow' | 'olive' | 'green' | 'cyan' | 'blue' | 'purple' | '';
  className?: string;
  style?: CSSProperties;
}

export default ({children, color = '', className, border = true, ...rest}: Props) => {
  return <Text
    className={`${styles.tag} ${color ? styles[`bg-${color}`] : ''} ${border ? '' : styles['tag-border-none']} ${className}`} {...rest}>{children}</Text>;
};
