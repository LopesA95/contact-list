import { configureStore } from '@reduxjs/toolkit'
import contactReducer from './reducers/contact'
import filterReducer from './reducers/filter'

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
