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
    asideMenuToggle(state) {
      state.asideMenuShow = !state.asideMenuShow
    }
  }
})
// Export Actions
export const uiActions = uiSlice.actions
// Export Reducers
export default uiSlice.reducer
