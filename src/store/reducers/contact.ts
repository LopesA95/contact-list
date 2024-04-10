import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contacts from './../../models/Contact'

type ContactState = {
  itens: Contacts[]
}
const initialState: ContactState = {
  itens: []
}
const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    deleteContact: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contact) => contact.id !== action.payload
      )
    },
    updateContact: (state, action: PayloadAction<Contacts>) => {
      const indexContact = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexContact >= 0) {
        state.itens[indexContact] = action.payload
      }
    },
    addContact: (state, action: PayloadAction<Omit<Contacts, 'id'>>) => {
      const contactExisting = state.itens.find(
        (contact) =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      )
      if (contactExisting) {
        alert(`Já existe um contato com o nome ${action.payload.name}`)
      } else {
        const lastContact = state.itens[state.itens.length - 1]
        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        }
        state.itens.push(newContact)
      }
    }
  }
})

export const { deleteContact, addContact, updateContact } = contactSlice.actions

export default contactSlice.reducer
