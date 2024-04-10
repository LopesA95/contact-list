import { FilterContact } from '../../components/FilterContact'
import { Button, Input } from '../../styles'
import * as S from './styles'

import * as enums from './../../utils/enums/Contact'
import { RootReducer } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { modifyTerm } from '../../store/reducers/filter'

type Props = {
  visibilityFilters: boolean
}

export const BarraLateral = ({ visibilityFilters }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)
  return (
    <S.Aside>
      <div>
        {visibilityFilters ? (
          <>
            <Input
              type="text"
              placeholder="Buscar"
              value={term}
              onChange={(e) => dispatch(modifyTerm(e.target.value))}
            />
            <S.Filters>
              <FilterContact critery="todos" legend="Todos" />
              <FilterContact
                valor={enums.Priority.IMPORTANTE}
                critery="prioridade"
                legend="Importante"
              />
              <FilterContact
                valor={enums.Priority.NORMAL}
                critery="prioridade"
                legend="Normal"
              />
            </S.Filters>
          </>
        ) : (
          <Button onClick={() => navigate('/')} type="button">
            Voltar a lista de contatos
          </Button>
        )}
      </div>
    </S.Aside>
  )
}
