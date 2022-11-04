import { configureStore } from '@reduxjs/toolkit'
import listReducer from './productlistslice'
import UrlReducer from './urlSlice'

export const store = configureStore({
  reducer: {
    list: listReducer,
    url : UrlReducer,
  },
})