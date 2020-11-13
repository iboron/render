export interface StoreFace {
  app: {
    id: string | number; // 应用id
    account_id: string | number; // 应用归属的账户id
    title: string; // 应用名称
    sort: number; // 应用分类
    logo: string; // 应用logo
    desc: string; // 应用描述
    address: []; // 应用联系地址
    img: string[]
  }
}
