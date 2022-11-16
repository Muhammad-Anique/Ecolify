import { configureStore } from '@reduxjs/toolkit'
import listReducer from './productlistslice'
import UrlReducer from './urlSlice'
import PnoReducer from './PnoSlice'
import cartClickReducer from './cartClick'
import cartSliceReducer from './cartSlice'
import totalSliceReducer from './totalSlice'

export const store = configureStore({
  reducer: {
    list: listReducer,
    url : UrlReducer,
    Pno : PnoReducer,
    cartClick: cartClickReducer,
    cartlist: cartSliceReducer,
    Total: totalSliceReducer,

  },
})