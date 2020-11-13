import { useEffect } from 'react';
import Taro from '@tarojs/taro';
import { useRequest } from 'ahooks';
import { useSelector } from 'react-redux';
import { RoomGetService } from '../../../../service/room';
import { StoreFace } from '../../../../models/typing';



export default () => {
  const store = useSelector((state: StoreFace) => state);

  // 请求获取房间信息
  const { data, loading, run } = useRequest(RoomGetService, { manual: true });

  useEffect(() => {
    if (store?.app.id) {
      run(store.app.id);
    }
  }, [store]);

  useEffect(() => {
    if (loading) {
      Taro.showLoading({ title: '拉取房型数据中...' });
    } else {
      Taro.hideLoading();
    }
  }, [loading]);

  return {
    data:data?.data
  };

}
