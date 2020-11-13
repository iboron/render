import React from 'react';
import { View, Swiper, SwiperItem, Image } from '@tarojs/components';
import useInitial from '../../pages/index/useInitial';
import styles from './index.module.scss';

/**
 * @description 整体布局
 * @param children
 */
export default ({ children }) => {
  const { app } = useInitial();


  return (
    <View className={styles.layout}>

      <Swiper className={styles.swiper} circular autoplay>
        {app?.img.map((item, index) => (
          <SwiperItem key={index}>
            <View className={styles.banner_transparent} />
            <Image
              src={item}
              mode={'widthFix'}
              className={styles.banner}
              lazyLoad
            />
          </SwiperItem>
        ))}
      </Swiper>
      <View className={styles.container}>{children}</View>
      <View className={styles.support}>- 乌柚提供技术支持 -</View>
    </View>
  );
};
