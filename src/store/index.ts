import { combineReducers, configureStore } from '@reduxjs/toolkit'

import api from '../services/api'
import carrinhoReducer from './reducers/carrinho'

const rootReducer = combineReducers({
  carrinho: carrinhoReducer,
  [api.reducerPath]: api.reducer
})
export type RootState = ReturnType<typeof rootReducer>

export function configuraStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    preloadedState
  })
}

export type AppStore = ReturnType<typeof configuraStore>
