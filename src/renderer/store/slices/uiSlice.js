// Import Redux
import { createSlice } from '@reduxjs/toolkit'
// Create Initial State
const initialState = {
  asideMenuShow: false
}

// Create Slice
const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    asideMenuToggle(state, { payload }) {
      state.asideMenuShow = payload
    }
  }
})
// Export Actions
export const uiActions = uiSlice.actions
// Export Reducers
export default uiSlice.reducer
