import { useEffect } from 'react';
import Taro from '@tarojs/taro';
import { useRequest } from 'ahooks';
import { useSelector, useDispatch } from 'react-redux';
import { StoreFace } from '../../models/typing';

import { GetInfoService } from '../../service/applets';

/**
 * @description 应用初始化
 * 主要用于通过 applets-id 获取应用的基本信息
 */
export default () => {
  const dispatch = useDispatch();
  const { app } = useSelector((state: StoreFace) => state);

  // [请求]
  const { run, loading } = useRequest(GetInfoService, {
    manual: true,
    onSuccess: (result) => {
      if (result.success) {
        dispatch({
          type: 'async',
          payload: {
            app: {
              ...result.data,
              img: ['https://oss.jetpomelo.com/2020-11-11/hotel-banner-1.png'],
            },
          },
        });
      }
      Taro.hideLoading();
    },
    onError: () => {
      Taro.hideLoading();
    },
  });

  useEffect(() => {
    // 如果应用未请求过
    if (!app.id) {
      // 载入加载中状态
      Taro.showLoading({ title: '拼命加载中' });

      // 获取小程序 appid,测试appid  wxb4685606b05996af
      // const appId = Taro.getAccountInfoSync().miniProgram.appId;
      run('wxb4685606b05996af');
    }
  }, []);


  return {
    app,
    loading,
  };
};
