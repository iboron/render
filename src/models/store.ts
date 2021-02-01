import {createModel} from '@rematch/core'
import {RootModel} from "@/models/index";

interface state {
  type: number,
  title: string,
  logo: string,
  desc: string,
  storeList: [],
}

export const store = createModel<RootModel>()({
  state: {
    type: 0,
    title: '君豪宾馆',
    logo: '',
    desc: '',
    storeList: [],
  } as state
});
