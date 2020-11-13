import React from 'react';
import { View } from '@tarojs/components';
import useInitial from './useInitial';
import Layout from '../../components/Layout';
import Hotel from './components/Hotel';

export default () => {
  const { app, loading } = useInitial();

  // 请求进行中则返回空白页面
  if (loading) {
    return <View />;
  }

  const components = () => {
    switch (app.sort) {
      case 0:
        return <Hotel />;
      default:
        return <View />;
    }
  };

  return <Layout>{components()}</Layout>;
};
