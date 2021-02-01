import React from "react";
import {View, Image} from "@tarojs/components";

export default () => {

  return (
    <View>
      <View className={'w-full py-16 px-11 bg-gray-1 flex'}>
        <View className={'flex-5 flex items-center text-left'}>
          <Image src={'https://oss.jetpomelo.com/2020-10-16/logo-01%201.png'} className={'w-full'} mode={"widthFix"}/>
        </View>
        <View className={'flex-19 flex items-center pl-12'}>
          <View className={'text-24'}>
            <View className={'mb-4 text'}>
              陈迎
            </View>
            <View className={'text-gray-5 text-16'}>
              君豪宾馆，感谢你的的使用
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
