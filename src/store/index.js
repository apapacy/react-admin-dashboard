import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import invoicesReducer from './invoicesSlice'


export default configureStore({
  reducer: {
    counter: counterReducer,
    invoices: invoicesReducer,
  }
})