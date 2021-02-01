import React, {useState} from "react";
import {useSelector} from 'react-redux';
import {View, Image, Input,} from "@tarojs/components";
import {Store} from "@/models/index";

export default () => {

  // 获取数据流
  const store: Store = useSelector(({store}) => store)

  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')

  // 表单提交
  const onSubmit = () => {
    console.log(phone, code)
  }

  // 默认logo，用于应用没有logo的情况
  const EmptyLogoComponents = () => {
    return <View className={'w-48 h-48 m-auto radius-24 bg-red-5 text-white flex items-center justify-center text-32'}>
      {store.title.slice(0, 1)}
    </View>
  }

  return (
    <View className={'p-32'}>
      {
        store.logo ?
          <Image src={'https://oss.jetpomelo.com/2020-10-16/logo-01%201.png'} className={'w-100'} mode={"widthFix"}/> :
          <EmptyLogoComponents/>
      }

      <View className={'m-auto text-center text-gray-6 my-24'}>
        无需注册，立即登录
      </View>


      {/* 手机号 */}
      <View className={'w-full h-24 my-32 py-12  border-solid border-1 border-gray-4 radius-24 overflow-hidden'}>
        <Input value={phone} type='number' placeholder='请输入手机号' className={'ml-12'}
               onInput={(e) => setPhone(e.detail.value)}/>
      </View>

      {/* 验证码 */}
      <View className={'w-full h-24 my-32 py-12  border-solid border-1 border-gray-4 radius-24 overflow-hidden flex '}>
        <View className={'flex-14'}>
          <Input value={code} type='number' placeholder='请输入验证码' className={'ml-12'}
                 onInput={(e) => setCode(e.detail.value)}/>
        </View>
        <View
          className={'flex-10 text-blue-5 text-center lending-24 border-l-1 border-gray-4 border-solid border-t-0 border-r-0 border-b-0'}>
          获取验证码
        </View>
      </View>

      <View onClick={onSubmit}
            className={'w-full h-24 mt-48 py-12 bg-blue-5 text-white radius-100 flex justify-center items-center'}>
        登录
      </View>

    </View>
  );
};
