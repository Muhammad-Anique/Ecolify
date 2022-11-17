import { createSlice } from '@reduxjs/toolkit'

//intial State
const initialState = {
  data: 0,
}


//reducer
export const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    setView: (state,action) => {
        state.data = action.payload
      },

  },
})


// Action creators are generated for each case reducer function
export const { setView } = viewSlice.actions

export default viewSlice.reducer