import {Models, init, RematchDispatch, RematchRootState} from '@rematch/core'
import immerPlugin from '@rematch/immer'
import {user} from './user'

// 类型
export interface RootModel extends Models {
  user: typeof user
}


export type Store = typeof store
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel>

// 数据
export const models: RootModel = {user}
export const store = init<RootModel>({
  models,
  plugins: [immerPlugin()],
})




