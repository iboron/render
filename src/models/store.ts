import {createModel} from '@rematch/core'

export const store = createModel({
  state: {
    type: 0,
    title: '君豪宾馆',
    logo: '',
    desc: '',
  },
});
