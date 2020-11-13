import Taro from '@tarojs/taro';

// 根据 applets_appid 获取 应用信息
export const GetInfoService = async (applets_id: string | number) => {
  return await Taro.request({
    url: `https://api.jetpomelo.com/applets/get`,
    method: 'POST',
    data: {
      applets_id: applets_id,
      type: 'applets',
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
