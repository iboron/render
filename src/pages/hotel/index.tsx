import React, {useEffect} from "react";
import {useSelector} from 'react-redux';
import {View, Text, Image} from "@tarojs/components";
import IconSvg from '@/assets/hotel/icon.svg'
import {Store} from "@/models/index";
import Iconfont from "@/components/Iconfont";


export default () => {
  // 获取全局数据
  const {store} = useSelector((state: Store) => state)

  useEffect(() => {

  }, [])

  return (
    <View className={'m-11'}>

      {/* 信息模块 */}
      <View className={'p-12 radius-24 bg-gray-2'}>

        {/*店铺名称*/}
        <View className={'flex mb-12 content-center items-center'}>
          <View className={'flex-3 '}>
            <Image src={IconSvg} className={'w-40'} mode={"widthFix"}/>
          </View>
          <View className={'flex-13  pl-6'}>
            <Text className={'text-20 text-black'}>
              {store.title}
            </Text>
          </View>
          <View className={'flex-8 text-right'}>
            <Text className={'bg-gray-3 py-6 px-12 radius-32 text-gray-7'}>
              新街口店
            </Text>
          </View>
        </View>

        {/*店铺地址*/}
        <View className={'mb-12 text-gray-6'}>
          <View className={'flex mb-8'}>
            <View className={'flex-4  text-16'}>
              地址:
            </View>
            <View className={'flex-20 text-16'}>
              江苏省南京市建邺区海峡云谷科技园5号楼520室 <Iconfont icon={"location"} size={16} color={"blue"}/>
            </View>
          </View>
          <View className={'flex'}>
            <View className={'flex-4   text-16'}>
              电话:
            </View>
            <View className={'flex-20 text-16'}>
              0517-18015193481 <Iconfont icon={"phone"} size={16} color={"blue"}/>
            </View>
          </View>
        </View>

      </View>
      {/* 房型标签 */}









      {/*  {data?.map((item, index) => (*/}
      {/*    <Fragment>*/}
      {/*      {Number(item.duration) === 24 && (*/}
      {/*        <View className={styles.room} key={index}>*/}
      {/*          <View className={styles.room_img}>*/}
      {/*            <View*/}
      {/*              className={styles.room_img_view}*/}
      {/*              style={{*/}
      {/*                background: `url(${item.images[0]}) no-repeat`,*/}
      {/*                backgroundSize: 'cover',*/}
      {/*              }}*/}
      {/*            />*/}
      {/*          </View>*/}
      {/*          <View className={styles.room_info}>*/}
      {/*            <View>*/}
      {/*              <View className={styles.room_info_title}>*/}
      {/*                {config.room_type[item.type]}*/}
      {/*              </View>*/}
      {/*              <View className={styles.room_info_desc}>*/}
      {/*                50-60m<Text className={styles.sup}>2</Text>大床 2人入住*/}
      {/*              </View>*/}
      {/*              <View className={styles.room_info_price}>*/}
      {/*                <Text className={styles.room_info_price_icon}>￥</Text>*/}
      {/*                {item.price}*/}
      {/*                <Text className={styles.room_info_price_line}>*/}
      {/*                  ￥{item.price + 12}*/}
      {/*                </Text>*/}
      {/*                <Text className={styles.room_info_price_tag}>*/}
      {/*                  已减12元*/}
      {/*                </Text>*/}
      {/*              </View>*/}
      {/*              <View>*/}
      {/*                <Text className={styles.room_info_tag_blue}>*/}
      {/*                  极速退款*/}
      {/*                </Text>*/}
      {/*                <Text className={styles.room_info_tag_green}>*/}
      {/*                  限时优惠*/}
      {/*                </Text>*/}
      {/*              </View>*/}
      {/*            </View>*/}
      {/*          </View>*/}
      {/*          <View className={styles.room_button}>*/}
      {/*            <View className={styles.room_button_layout}>*/}
      {/*              定*/}
      {/*              <View className={styles.room_button_detail}>*/}
      {/*                <View className={styles.room_button_detail_text}>*/}
      {/*                  在线付*/}
      {/*                </View>*/}
      {/*              </View>*/}
      {/*            </View>*/}
      {/*          </View>*/}
      {/*        </View>*/}
      {/*      )}*/}
      {/*    </Fragment>*/}
      {/*  ))}*/}
      {/*</View>*/}

      {/*<View className={styles.card}>*/}

      {/*  {data?.map((item, index) => (*/}
      {/*    <Fragment>*/}
      {/*      {Number(item.duration) !== 24 && (*/}
      {/*        <View className={styles.room} key={index}>*/}
      {/*          <View className={styles.room_img}>*/}
      {/*            <View*/}
      {/*              className={styles.room_img_view}*/}
      {/*              style={{*/}
      {/*                background: `url(${item.images[0]}) no-repeat`,*/}
      {/*                backgroundSize: 'cover',*/}
      {/*              }}*/}
      {/*            />*/}
      {/*          </View>*/}
      {/*          <View className={styles.room_info}>*/}
      {/*            <View>*/}
      {/*              <View className={styles.room_info_title}>*/}
      {/*                {config.room_type[item.type]} [钟点房]*/}
      {/*              </View>*/}
      {/*              <View className={styles.room_info_desc}>*/}
      {/*                50-60m<Text className={styles.sup}>2</Text>大床 2人入住*/}
      {/*              </View>*/}
      {/*              <View className={styles.room_info_price}>*/}
      {/*                <Text className={styles.room_info_price_icon}>￥</Text>*/}
      {/*                {item.price}*/}
      {/*                <Text className={styles.room_info_price_line}>*/}
      {/*                  ￥{item.price + 12}*/}
      {/*                </Text>*/}
      {/*                <Text className={styles.room_info_price_tag}>*/}
      {/*                  已减12元*/}
      {/*                </Text>*/}
      {/*              </View>*/}
      {/*              <View>*/}
      {/*                <Text className={styles.room_info_tag_blue}>*/}
      {/*                  {item.duration}小时*/}
      {/*                </Text>*/}
      {/*                <Text className={styles.room_info_tag_green}>*/}
      {/*                  限时优惠*/}
      {/*                </Text>*/}
      {/*              </View>*/}
      {/*            </View>*/}
      {/*          </View>*/}
      {/*          <View className={styles.room_button}>*/}
      {/*            <View className={styles.room_button_layout}>*/}
      {/*              定*/}
      {/*              <View className={styles.room_button_detail}>*/}
      {/*                <View className={styles.room_button_detail_text}>*/}
      {/*                  在线付*/}
      {/*                </View>*/}
      {/*              </View>*/}
      {/*            </View>*/}
      {/*          </View>*/}
      {/*        </View>*/}
      {/*      )}*/}
      {/*    </Fragment>*/}
      {/*  ))}*/}
      {/*</View>*/}

      {/*<View className={styles.card}>*/}
      {/*  <View className={styles.card_content}>*/}
      {/*    酒店设施*/}
      {/*  </View>*/}
      {/*</View>*/}

      {/*<View className={styles.card}>*/}
      {/*  <View className={styles.card_content}>*/}
      {/*    入住政策*/}
      {/*  </View>*/}
      {/*</View>*/}

    </View>
  );
};
