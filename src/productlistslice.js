import { createSlice } from '@reduxjs/toolkit'

//intial State
const initialState = {
  data: [],
}


//reducer
export const ProductListSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setlist: (state, action) => {
      state.data = action.payload
    },
  },
})


// Action creators are generated for each case reducer function
export const { setlist } = ProductListSlice.actions

export default ProductListSlice.reducer