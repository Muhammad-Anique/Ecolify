import { configureStore } from '@reduxjs/toolkit'
import listReducer from './productlistslice'

export const store = configureStore({
  reducer: {
    list: listReducer,
  },
})