import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from '../CountSlice'


export const Store = configureStore({
  reducer: {
    counter: counterSlice,
  },
})