import React from "react";

import {View} from "@tarojs/components";

export default () => {


  // 配置
  // const config = {
  //   layout: {
  //     header: ["https://oss.jetpomelo.com/2020-11-12/1605149973630.png"],
  //   },
  // };

  return (
    <View>
      {/*<Layout>*/}
      {/*  <Header images={config.layout.header}/>*/}

      {/*  <Content className={styles.container}>*/}
      {/*    <Card>*/}
      {/*      <Row>*/}
      {/*        <Col span={20}>*/}
      {/*          <Typography size={42} className={styles.title}>*/}
      {/*            君豪宾馆(新街口店)*/}
      {/*          </Typography>*/}
      {/*          <Typography size={24} color={"gray"}>*/}
      {/*            <Tag>舒适型</Tag>*/}
      {/*            <Tag color={"orange"} className={styles.tag}>*/}
      {/*              干净卫生*/}
      {/*            </Tag>*/}
      {/*            <Tag color={"red"}>服务热情</Tag>*/}
      {/*          </Typography>*/}
      {/*        </Col>*/}
      {/*        <Col*/}
      {/*          span={4}*/}
      {/*          style={{textAlign: "right", padding: "10px 0px 0px 10px"}}*/}
      {/*        >*/}
      {/*          <Image*/}
      {/*            src={"https://oss.jetpomelo.com/2020-11-12/hot.svg"}*/}
      {/*            style={{width: "100%"}}*/}
      {/*            mode={"widthFix"}*/}
      {/*          />*/}
      {/*        </Col>*/}
      {/*      </Row>*/}

      {/*      <Divider/>*/}

      {/*      <Row>*/}
      {/*        <Col span={12}>*/}
      {/*          <Typography size={28} color={"gray"}>*/}
      {/*            <Iconfont*/}
      {/*              icon={"location"}*/}
      {/*              size={30}*/}
      {/*              style={{marginRight: 8}}*/}
      {/*            />*/}
      {/*            海峡云谷科技园*/}
      {/*          </Typography>*/}

      {/*          <Typography size={28} color={"gray"}>*/}
      {/*            <Iconfont icon={"phone"} size={30} style={{marginRight: 8}}/>*/}
      {/*            0517-18015193481*/}
      {/*          </Typography>*/}
      {/*        </Col>*/}
      {/*        <Col span={6} style={{textAlign: "center"}}>*/}
      {/*          <Typography size={24} color={"grey"} align={"center"}>*/}
      {/*            <Iconfont icon={"location"} size={36}/>*/}
      {/*            <View>导航</View>*/}
      {/*          </Typography>*/}
      {/*        </Col>*/}
      {/*        <Col span={6}>*/}
      {/*          <Typography size={24} color={"grey"} align={"center"}>*/}
      {/*            <Iconfont icon={"phone"} size={36}/>*/}
      {/*            <View>客服</View>*/}
      {/*          </Typography>*/}
      {/*        </Col>*/}
      {/*      </Row>*/}

      {/*      <Row className={styles.more}>*/}
      {/*        <Col span={12}>*/}
      {/*          <Typography color={"grey"}>商家还有多家分店</Typography>*/}
      {/*        </Col>*/}
      {/*        <Col span={12}>*/}
      {/*          <Typography color={"blue"} align={"right"}>*/}
      {/*            立即前往*/}
      {/*            <Iconfont icon={"right"}/>*/}
      {/*          </Typography>*/}
      {/*        </Col>*/}
      {/*      </Row>*/}
      {/*    </Card>*/}
      {/*  </Content>*/}

      {/*  /!*<View className={styles.card}>*!/*/}

      {/*  /!*  {data?.map((item, index) => (*!/*/}
      {/*  /!*    <Fragment>*!/*/}
      {/*  /!*      {Number(item.duration) === 24 && (*!/*/}
      {/*  /!*        <View className={styles.room} key={index}>*!/*/}
      {/*  /!*          <View className={styles.room_img}>*!/*/}
      {/*  /!*            <View*!/*/}
      {/*  /!*              className={styles.room_img_view}*!/*/}
      {/*  /!*              style={{*!/*/}
      {/*  /!*                background: `url(${item.images[0]}) no-repeat`,*!/*/}
      {/*  /!*                backgroundSize: 'cover',*!/*/}
      {/*  /!*              }}*!/*/}
      {/*  /!*            />*!/*/}
      {/*  /!*          </View>*!/*/}
      {/*  /!*          <View className={styles.room_info}>*!/*/}
      {/*  /!*            <View>*!/*/}
      {/*  /!*              <View className={styles.room_info_title}>*!/*/}
      {/*  /!*                {config.room_type[item.type]}*!/*/}
      {/*  /!*              </View>*!/*/}
      {/*  /!*              <View className={styles.room_info_desc}>*!/*/}
      {/*  /!*                50-60m<Text className={styles.sup}>2</Text>大床 2人入住*!/*/}
      {/*  /!*              </View>*!/*/}
      {/*  /!*              <View className={styles.room_info_price}>*!/*/}
      {/*  /!*                <Text className={styles.room_info_price_icon}>￥</Text>*!/*/}
      {/*  /!*                {item.price}*!/*/}
      {/*  /!*                <Text className={styles.room_info_price_line}>*!/*/}
      {/*  /!*                  ￥{item.price + 12}*!/*/}
      {/*  /!*                </Text>*!/*/}
      {/*  /!*                <Text className={styles.room_info_price_tag}>*!/*/}
      {/*  /!*                  已减12元*!/*/}
      {/*  /!*                </Text>*!/*/}
      {/*  /!*              </View>*!/*/}
      {/*  /!*              <View>*!/*/}
      {/*  /!*                <Text className={styles.room_info_tag_blue}>*!/*/}
      {/*  /!*                  极速退款*!/*/}
      {/*  /!*                </Text>*!/*/}
      {/*  /!*                <Text className={styles.room_info_tag_green}>*!/*/}
      {/*  /!*                  限时优惠*!/*/}
      {/*  /!*                </Text>*!/*/}
      {/*  /!*              </View>*!/*/}
      {/*  /!*            </View>*!/*/}
      {/*  /!*          </View>*!/*/}
      {/*  /!*          <View className={styles.room_button}>*!/*/}
      {/*  /!*            <View className={styles.room_button_layout}>*!/*/}
      {/*  /!*              定*!/*/}
      {/*  /!*              <View className={styles.room_button_detail}>*!/*/}
      {/*  /!*                <View className={styles.room_button_detail_text}>*!/*/}
      {/*  /!*                  在线付*!/*/}
      {/*  /!*                </View>*!/*/}
      {/*  /!*              </View>*!/*/}
      {/*  /!*            </View>*!/*/}
      {/*  /!*          </View>*!/*/}
      {/*  /!*        </View>*!/*/}
      {/*  /!*      )}*!/*/}
      {/*  /!*    </Fragment>*!/*/}
      {/*  /!*  ))}*!/*/}
      {/*  /!*</View>*!/*/}

      {/*  /!*<View className={styles.card}>*!/*/}

      {/*  /!*  {data?.map((item, index) => (*!/*/}
      {/*  /!*    <Fragment>*!/*/}
      {/*  /!*      {Number(item.duration) !== 24 && (*!/*/}
      {/*  /!*        <View className={styles.room} key={index}>*!/*/}
      {/*  /!*          <View className={styles.room_img}>*!/*/}
      {/*  /!*            <View*!/*/}
      {/*  /!*              className={styles.room_img_view}*!/*/}
      {/*  /!*              style={{*!/*/}
      {/*  /!*                background: `url(${item.images[0]}) no-repeat`,*!/*/}
      {/*  /!*                backgroundSize: 'cover',*!/*/}
      {/*  /!*              }}*!/*/}
      {/*  /!*            />*!/*/}
      {/*  /!*          </View>*!/*/}
      {/*  /!*          <View className={styles.room_info}>*!/*/}
      {/*  /!*            <View>*!/*/}
      {/*  /!*              <View className={styles.room_info_title}>*!/*/}
      {/*  /!*                {config.room_type[item.type]} [钟点房]*!/*/}
      {/*  /!*              </View>*!/*/}
      {/*  /!*              <View className={styles.room_info_desc}>*!/*/}
      {/*  /!*                50-60m<Text className={styles.sup}>2</Text>大床 2人入住*!/*/}
      {/*  /!*              </View>*!/*/}
      {/*  /!*              <View className={styles.room_info_price}>*!/*/}
      {/*  /!*                <Text className={styles.room_info_price_icon}>￥</Text>*!/*/}
      {/*  /!*                {item.price}*!/*/}
      {/*  /!*                <Text className={styles.room_info_price_line}>*!/*/}
      {/*  /!*                  ￥{item.price + 12}*!/*/}
      {/*  /!*                </Text>*!/*/}
      {/*  /!*                <Text className={styles.room_info_price_tag}>*!/*/}
      {/*  /!*                  已减12元*!/*/}
      {/*  /!*                </Text>*!/*/}
      {/*  /!*              </View>*!/*/}
      {/*  /!*              <View>*!/*/}
      {/*  /!*                <Text className={styles.room_info_tag_blue}>*!/*/}
      {/*  /!*                  {item.duration}小时*!/*/}
      {/*  /!*                </Text>*!/*/}
      {/*  /!*                <Text className={styles.room_info_tag_green}>*!/*/}
      {/*  /!*                  限时优惠*!/*/}
      {/*  /!*                </Text>*!/*/}
      {/*  /!*              </View>*!/*/}
      {/*  /!*            </View>*!/*/}
      {/*  /!*          </View>*!/*/}
      {/*  /!*          <View className={styles.room_button}>*!/*/}
      {/*  /!*            <View className={styles.room_button_layout}>*!/*/}
      {/*  /!*              定*!/*/}
      {/*  /!*              <View className={styles.room_button_detail}>*!/*/}
      {/*  /!*                <View className={styles.room_button_detail_text}>*!/*/}
      {/*  /!*                  在线付*!/*/}
      {/*  /!*                </View>*!/*/}
      {/*  /!*              </View>*!/*/}
      {/*  /!*            </View>*!/*/}
      {/*  /!*          </View>*!/*/}
      {/*  /!*        </View>*!/*/}
      {/*  /!*      )}*!/*/}
      {/*  /!*    </Fragment>*!/*/}
      {/*  /!*  ))}*!/*/}
      {/*  /!*</View>*!/*/}

      {/*  /!*<View className={styles.card}>*!/*/}
      {/*  /!*  <View className={styles.card_content}>*!/*/}
      {/*  /!*    酒店设施*!/*/}
      {/*  /!*  </View>*!/*/}
      {/*  /!*</View>*!/*/}

      {/*  /!*<View className={styles.card}>*!/*/}
      {/*  /!*  <View className={styles.card_content}>*!/*/}
      {/*  /!*    入住政策*!/*/}
      {/*  /!*  </View>*!/*/}
      {/*  /!*</View>*!/*/}
      {/*</Layout>*/}
    </View>
  );
};
