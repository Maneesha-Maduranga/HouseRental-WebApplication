import { configureStore } from '@reduxjs/toolkit'
import modalReducer from './features/modal/modalSlice'
import userReducer from './features/user/userSlice'
import listReducer from './features/listing/listSlice'

export const store = configureStore({
  reducer: {
    modal:modalReducer,
    user:userReducer,
    listing:listReducer
  },
})