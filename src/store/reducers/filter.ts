import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Contact'

type FilterState = {
  term?: string
  critery: 'prioridade' | 'todos'
  valor?: enums.Priority
}

const initialState: FilterState = {
  term: '',
  critery: 'todos'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    modifyTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    },
    modifyfilter: (state, action: PayloadAction<FilterState>) => {
      state.critery = action.payload.critery
      state.valor = action.payload.valor
    }
  }
})

export const { modifyfilter, modifyTerm } = filterSlice.actions
export default filterSlice.reducer
