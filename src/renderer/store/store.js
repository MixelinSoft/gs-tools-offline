// Import Redux Toolkit
import { configureStore } from '@reduxjs/toolkit'
// Import Slices
import uiSlice from './slices/uiSlice'

const store = configureStore({
  reducer: {
    ui: uiSlice
    // Tools Slices
  }
})

export default store
