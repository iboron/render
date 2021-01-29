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
    <View>

      {/* 信息模块 */}
      <View className={'bg-white margin-12 padding-16 radius-4'}>

        {/*店铺名称*/}
        <View className={'flex margin-bottom-12'}>
          <View className={'flex-3'}>
            <Image src={IconSvg} className={'width-29'} mode={"widthFix"}/>
          </View>
          <View className={'flex-21'}>
            <Text className={'text-20 text-black'}>
              {store.title}
            </Text>
          </View>
        </View>

        {/*店铺地址*/}
        <View className={'flex margin-bottom-12'}>
          <View className={'flex-12'}>
            <View className={'text-gray text-14 margin-bottom-2'}>
              <Iconfont
                className={'margin-right-2'}
                icon={"location"}
                size={30}
              />
              海峡云谷科技园
            </View>

            <View className={'text-gray text-14'}>
              <Iconfont icon={"phone"} size={30} className={'margin-right-2'}/>
              0517-18015193481
            </View>
          </View>
          <View className={'flex-6 text-16 text-grey text-center'}>
            <Iconfont icon={"location"} size={16}/>
            <View>导航</View>
          </View>
          <View className={'flex-6 text-16 text-grey text-center'}>
            <Iconfont icon={"phone"} size={16}/>
            <View>客服</View>
          </View>
        </View>

        {/*更多店铺*/}
        <View className={'flex bg-gray padding-4'}>
          <View className={'flex-12'}>
            <View className={'text-grey'}>商家还有多家分店</View>
          </View>
          <View className={'flex-12 text-right'}>
            <View className={'text-blue'}>
              立即前往
              <Iconfont icon={"right"}/>
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
