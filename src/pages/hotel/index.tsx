import React, {useEffect, useState} from "react";
import {useSelector} from 'react-redux';
import {View, Text, Image} from "@tarojs/components";
import IconSvg from '@/assets/hotel/icon.svg';
import EmptySvg from '@/assets/hotel/empty.svg';
import {Store} from "@/models/index";
import Iconfont from "@/components/Iconfont";

export default () => {
  // 获取全局数据
  const store: Store = useSelector(({store}) => store)

  const [tab, setTab] = useState(0)

  const onTab = (index: number) => {
    setTab(index)
  }
  
  useEffect(() => {

  }, [])

  // 空状态组件
  const EmptyComponents = () => {
    return <View className={'text-center'}>
      <Image src={EmptySvg} className={'w-full'}/>

      <View className={'text-gray-5'}>
        商家尚未添加房型信息
      </View>
    </View>
  }

  const config = {
    tab: ['全天房', '钟点房']
  }

  return (
    <View className={'m-11'}>

      {/* 酒店信息卡 */}
      <View className={'p-12 radius-24 bg-gray-2'}>

        {/*店铺名称*/}
        <View className={'flex mb-12 items-center'}>
          <View className={'flex-3 '}>
            <Image src={IconSvg} className={'w-40'} mode={"widthFix"}/>
          </View>
          <View className={'flex-13  pl-6'}>
            <Text className={'text-20 text-black'}>
              {store.title}
            </Text>
          </View>
          <View className={'flex-8 text-right text-14'}>
            <Text className={'bg-gray-3 py-2 px-8 radius-24 text-gray-6'}>
              新街口店
            </Text>
          </View>
        </View>

        {/*店铺地址*/}
        <View className={'mb-12 text-gray-6 text-14'}>
          <View className={'flex mb-8'}>
            <View className={'flex-4'}>
              地址:
            </View>
            <View className={'flex-20'}>
              建邺区海峡云谷科技园5号楼520室 <Iconfont icon={"location"} size={16} color={"text-blue-6"}/>
            </View>
          </View>
          <View className={'flex'}>
            <View className={'flex-4'}>
              电话:
            </View>
            <View className={'flex-20 '}>
              0517-18015193481 <Iconfont icon={"phone"} size={16} color={"text-blue-6"}/>
            </View>
          </View>
        </View>

      </View>


      {/* 房型选项卡 */}
      <View
        className={'flex text-center items-center h-32 w-full lending-32 my-24 radius-80 overflow-hidden border-solid border-2 border-gray-2'}>

        {
          config.tab.map((item, index) => {
            return <View onClick={() => onTab(index)}
                         className={`flex-1 ${tab === index ? 'bg-gray-2 text-blue-5' : 'text-gray-6'}`}>
              {item}
            </View>
          })
        }

      </View>


      {/* 房型信息渲染 */}
      {
        store.storeList.length ? <View/> : <EmptyComponents/>
      }

    </View>
  );
};
