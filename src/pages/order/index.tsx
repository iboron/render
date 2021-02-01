import React, {useState} from 'react';
import {View} from '@tarojs/components';

export default () => {
  const [tab, setTab] = useState(0)

  const onChooseTab = (index: number) => {
    setTab(index)
  }

  const config = {
    tab: ['已预订', '已使用', '已取消']
  }

  return (
    <view>
      <View className={'h-48 w-full bg-gray-1 flex text-center  items-center lending-48'}>
        {
          config.tab.map((item, index) => {
            return <View
              className={`flex-1 ${index === tab ? 'border-solid  border-b-2 radius-br-2 radius-bl-2   text-blue-5 border-l-0 border-r-0 border-t-0' : 'text-gray-5'}`}
              onClick={() => onChooseTab(index)}
              key={index}>{item}</View>
          })
        }
      </View>
    </view>
  );
};
