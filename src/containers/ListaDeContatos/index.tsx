import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { MainContainer, Title } from '../../styles'
import Contacts from '../../components/Contact'

export const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contacts)
  const { term, critery, valor } = useSelector(
    (state: RootReducer) => state.filter
  )

  const filterContact = () => {
    let contactFiltered = itens
    if (term !== undefined) {
      contactFiltered = contactFiltered.filter(
        (item) => item.name.toLowerCase().search(term.toLowerCase()) >= 0
      )
      if (critery === 'prioridade') {
        contactFiltered = contactFiltered.filter(
          (item) => item.priority === valor
        )
      }
      return contactFiltered
    } else {
      return itens
    }
  }

  const renderContact = (quantity: number) => {
    let menssage = ''

    const complementation =
      term !== undefined && term.length > 0
        ? `e
    "${term}"`
        : ''
    if (critery === 'todos') {
      menssage = `${quantity} contato(s) encontrado(s) como: todos ${complementation}`
    } else {
      menssage = `${quantity} contato(s) encontrado(s) "${`${critery}: ${valor}`}" ${complementation}`
    }

    return menssage
  }

  const contact = filterContact()
  const menssage = renderContact(contact.length)

  return (
    <MainContainer>
      <Title as="p">{menssage}</Title>
      <ul>
        {contact.map((item) => (
          <li key={item.id}>
            <Contacts
              id={item.id}
              name={item.name}
              phone={item.phone}
              email={item.email}
              priority={item.priority}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}
