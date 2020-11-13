import produce from 'immer';
import { StoreFace } from './typing';

const initState: StoreFace = {
  app: {
    account_id: '',
    address: [],
    desc: '',
    id: '',
    logo: '',
    sort: -1,
    title: '',
    img: [],
  },
};

export const reducer = produce((draft, action) => {
  switch (action.type) {
    // 数据信息同步
    case 'async':
      draft = { ...draft, ...action.payload };
      return draft;

    default:
      return draft;
  }
}, initState);
