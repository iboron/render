import React, {CSSProperties} from "react";
import {View} from "@tarojs/components";
import styles from "./index.module.less";

interface Props {
  children: object;
  align?: "top" | "middle" | "bottom";
  justify?: "start" | "end" | "center" | "space-around" | "space-between";
  wrap?: boolean;
  className?: string;
  style?: CSSProperties;
}

export default (props: Props) => {
  const {
    align = "top",
    justify = "start",
    wrap = true,
    className,
    ...rest
  } = props;
  return (
    <View
      className={`
       ${styles.row}

       ${wrap ? "" : styles["row-nowrap"]}

       ${styles[`row-${justify}`]}

       ${styles[`align-${align}`]}

       ${className}
      }`}
      {...rest}
    >
      {props.children}
    </View>
  );
};
