import { ButtonAdd } from '../../components/ButtonAdd'
import { ListaDeContatos } from '../../containers/ListaDeContatos'
import { BarraLateral } from './../../containers/BarraLateral/index'

export const Home = () => (
  <>
    <BarraLateral visibilityFilters />
    <ListaDeContatos />
    <ButtonAdd />
  </>
)
