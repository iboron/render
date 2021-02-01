import {init, RematchDispatch, Models} from '@rematch/core'
import immerPlugin from '@rematch/immer'
import {store} from './store'

// 类型
export interface RootModel extends Models<RootModel> {
  store: typeof store
}

export type Dispatch = RematchDispatch<RootModel>
export type Store = RootModel['store']['state']


// 数据导出
export const models: RootModel = {store}
export const storeState = init({
  models,
  plugins: [
    immerPlugin()
  ],
})





