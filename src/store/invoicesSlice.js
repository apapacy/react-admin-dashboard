import { mockDataInvoices } from "../data/mockData";
import { createSlice } from '@reduxjs/toolkit'

export const invoicesSlice = createSlice({
  name: 'counter',
  initialState: {
    items: [], 
  },
  reducers: {
    init: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.items = mockDataInvoices;
    },
  }
})

// Action creators are generated for each case reducer function
export const { init } = invoicesSlice.actions

export default invoicesSlice.reducer