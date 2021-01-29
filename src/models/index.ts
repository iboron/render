import {init, RematchDispatch, RematchRootState} from '@rematch/core'
import immerPlugin from '@rematch/immer'
import {store} from './store'
import {Model} from '@/type/models'

// 数据
export const storeState = init<Model>({
  // 模块
  models: {
    store: store,
  },
  // 插件
  plugins: [
    immerPlugin()
  ],
})


export type Store = Model
export type Dispatch = RematchDispatch<Model>
export type RootState = RematchRootState<Model>


