import { configureStore } from '@reduxjs/toolkit'
import listReducer from './productlistslice'
import UrlReducer from './urlSlice'
import PnoReducer from './PnoSlice'

export const store = configureStore({
  reducer: {
    list: listReducer,
    url : UrlReducer,
    Pno : PnoReducer,

  },
})