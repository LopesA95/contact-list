import * as S from './styles'
import * as enums from './../../utils/enums/Contact'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { modifyfilter } from '../../store/reducers/filter'

export type Props = {
  legend: string
  critery: 'prioridade' | 'todos'
  valor?: enums.Priority
}

export const FilterContact = ({ legend, critery, valor }: Props) => {
  const dispatch = useDispatch()
  const { filter, contacts } = useSelector((state: RootReducer) => state)
  const isActiveVerification = () => {
    const sameCritery = filter.critery === critery
    const sameValue = filter.valor === valor
    return sameCritery && sameValue
  }

  const contContact = () => {
    if (critery === 'todos') return contacts.itens.length
    if (critery === 'prioridade') {
      return contacts.itens.filter((item) => item.priority === valor).length
    }
  }
  const filtered = () => {
    dispatch(
      modifyfilter({
        critery,
        valor
      })
    )
  }

  const cont = contContact()
  const active = isActiveVerification()

  return (
    <S.Card active={active} onClick={filtered}>
      <S.Cont>{cont}</S.Cont>
      <S.Label>{legend}</S.Label>
    </S.Card>
  )
}
