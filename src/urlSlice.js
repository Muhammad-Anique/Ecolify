import { createSlice } from '@reduxjs/toolkit'

//intial State
const initialState = {
  data: '\0',
}


//reducer
export const urlSlice = createSlice({
  name: 'url',
  initialState,
  reducers: {
    seturl: (state, action) => {
      state.data = action.payload
    },
  },
})


// Action creators are generated for each case reducer function
export const { seturl } = urlSlice.actions

export default urlSlice.reducer