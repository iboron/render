import {useEffect} from "react";
import {useSelector} from "react-redux";
import {StoreFace} from "../models/typing";

export default () => {
  const {id} = useSelector((state: StoreFace) => state);

  useEffect(() => {
    // 获取小程序appid
    // let extConfig = Taro.getExtConfigSync ? Taro.getExtConfigSync() : {}
  }, []);


  return {
    id,
    loading: true,
  };
};
