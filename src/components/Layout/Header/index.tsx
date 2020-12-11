import React, {CSSProperties} from "react";
import {View, Swiper, SwiperItem, Image} from "@tarojs/components";
import styles from "./index.module.less";

interface Props {
  images: string[];
  className?: string;
  style?: CSSProperties;
}

export default ({images, className, ...rest}: Props) => {
  return (
    <View className={`${styles.header} ${className}`} {...rest}>
      {/*如果 images 字段存在 header 将变为轮播图*/}
      {images && (
        <Swiper className={styles.swiper} circular autoplay>
          {images?.map((item, index) => (
            <SwiperItem key={index}>
              <View className={styles.mask}/>
              <Image
                src={item}
                mode={"widthFix"}
                className={styles.banner}
                lazyLoad
              />
            </SwiperItem>
          ))}
        </Swiper>
      )}
    </View>
  );
};
