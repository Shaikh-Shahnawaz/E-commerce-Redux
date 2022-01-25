import { configureStore } from '@reduxjs/toolkit'
import  productSlice  from '../reducers/reducer'

export const store =  configureStore({
  reducer: {
    product: productSlice,
  },
})