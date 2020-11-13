import React, {Fragment} from 'react';
import {View, Text, Image} from '@tarojs/components';
import useInitial from '../../useInitial';
import useRoom from './useRoom';
import styles from './index.module.scss';

export default () => {
  const {data} = useRoom();

  const {app} = useInitial();

  const config = {
    room_type: {
      0: '单人间',
      1: '双人间',
    },
  };

  return (
    <Fragment>


      <View className={styles.info}>
        <View className={'flex'}>
          <View className={'flex-16'}>
            <View className={styles.info_basic_title}>
              {app.title}(新街口店)
            </View>
            <View className={styles.info_basic_desc}>
              舒适型
              <Text className={styles.info_basic_tag}>干净卫生</Text>
              <Text className={styles.info_basic_tag}>服务热情</Text>
            </View>
          </View>
          <View className={'flex-4 flex justify-center align-center text-40'}>
            <Image src={'https://oss.jetpomelo.com/2020-11-12/hot.svg'} style={{width: '64%'}} mode={'widthFix'}/>
          </View>
        </View>
        <View className={'divider'}/>
        <View className={'flex'}>
          <View className={'flex-16'}>
            <View className={'text-gray text-26 margin-bottom-4'}>
              <Text
                className={'iconfont  icon-location text-30 margin-right-8'}
              />
              江苏省南京市海峡云谷科技园
            </View>
            <View className={'text-gray text-26'}>
              <Text
                className={'iconfont  icon-phone text-30  margin-right-8'}
              />
              0517-18015193481
            </View>
          </View>
          <View className={'flex-4 flex justify-center align-center'}>
            <View className={'text-grey text-22 text-center'}>
              <View className={'iconfont  icon-location text-36'}/>
              <View>导航</View>
            </View>
          </View>
          <View className={'flex-4 flex justify-center align-center'}>
            <View className={'text-grey text-22 text-center'}>
              <View className={'iconfont icon-phone text-36'}/>
              <View>客服</View>
            </View>
          </View>
        </View>
        <View className={'flex bg-gray radius-4 margin-top-16 text-24 padding-8 '}>
          <View className={'flex-1 text-grey'}>
            商家还有7家分店
          </View>
          <View className={'flex-1 text-right text-blue'}>
            立即前往 <Text className={'iconfont icon-right '}/>
          </View>
        </View>
      </View>

      <View className={styles.card}>

        {data?.map((item, index) => (
          <Fragment>
            {Number(item.duration) === 24 && (
              <View className={styles.room} key={index}>
                <View className={styles.room_img}>
                  <View
                    className={styles.room_img_view}
                    style={{
                      background: `url(${item.images[0]}) no-repeat`,
                      backgroundSize: 'cover',
                    }}
                  />
                </View>
                <View className={styles.room_info}>
                  <View>
                    <View className={styles.room_info_title}>
                      {config.room_type[item.type]}
                    </View>
                    <View className={styles.room_info_desc}>
                      50-60m<Text className={styles.sup}>2</Text>大床 2人入住
                    </View>
                    <View className={styles.room_info_price}>
                      <Text className={styles.room_info_price_icon}>￥</Text>
                      {item.price}
                      <Text className={styles.room_info_price_line}>
                        ￥{item.price + 12}
                      </Text>
                      <Text className={styles.room_info_price_tag}>
                        已减12元
                      </Text>
                    </View>
                    <View>
                      <Text className={styles.room_info_tag_blue}>
                        极速退款
                      </Text>
                      <Text className={styles.room_info_tag_green}>
                        限时优惠
                      </Text>
                    </View>
                  </View>
                </View>
                <View className={styles.room_button}>
                  <View className={styles.room_button_layout}>
                    定
                    <View className={styles.room_button_detail}>
                      <View className={styles.room_button_detail_text}>
                        在线付
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            )}
          </Fragment>
        ))}
      </View>

      <View className={styles.card}>

        {data?.map((item, index) => (
          <Fragment>
            {Number(item.duration) !== 24 && (
              <View className={styles.room} key={index}>
                <View className={styles.room_img}>
                  <View
                    className={styles.room_img_view}
                    style={{
                      background: `url(${item.images[0]}) no-repeat`,
                      backgroundSize: 'cover',
                    }}
                  />
                </View>
                <View className={styles.room_info}>
                  <View>
                    <View className={styles.room_info_title}>
                      {config.room_type[item.type]} [钟点房]
                    </View>
                    <View className={styles.room_info_desc}>
                      50-60m<Text className={styles.sup}>2</Text>大床 2人入住
                    </View>
                    <View className={styles.room_info_price}>
                      <Text className={styles.room_info_price_icon}>￥</Text>
                      {item.price}
                      <Text className={styles.room_info_price_line}>
                        ￥{item.price + 12}
                      </Text>
                      <Text className={styles.room_info_price_tag}>
                        已减12元
                      </Text>
                    </View>
                    <View>
                      <Text className={styles.room_info_tag_blue}>
                        {item.duration}小时
                      </Text>
                      <Text className={styles.room_info_tag_green}>
                        限时优惠
                      </Text>
                    </View>
                  </View>
                </View>
                <View className={styles.room_button}>
                  <View className={styles.room_button_layout}>
                    定
                    <View className={styles.room_button_detail}>
                      <View className={styles.room_button_detail_text}>
                        在线付
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            )}
          </Fragment>
        ))}
      </View>



      <View className={styles.card}>
        <View className={styles.card_content}>
          酒店设施
        </View>
      </View>

      <View className={styles.card}>
        <View className={styles.card_content}>
          入住政策
        </View>
      </View>
    </Fragment>
  );
};
