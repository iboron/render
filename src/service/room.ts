import Taro from '@tarojs/taro';

// 获取酒店房间
export const RoomGetService = (appId: number ) => {
  return Taro.request({
    url: `https://api.jetpomelo.com/goods/room/get`,
    method: 'POST',
    data: {
      app_id: appId,
    },
  })
    .then((result) => {
      return {
        ...result.data,
      };
    })
    .catch(() => {
      return {
        success: false,
        errorMessage: '请求失败',
      };
    });
};
