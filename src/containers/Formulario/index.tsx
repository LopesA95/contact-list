import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { ButtonSave, Input, MainContainer, Title } from '../../styles'
import { Form, Options, Option } from './styles'
import * as enums from '../../utils/enums/Contact'
import { addContact } from '../../store/reducers/contact'

export const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [priority, setPriority] = useState(enums.Priority.NORMAL)

  const addContacts = (e: FormEvent) => {
    e.preventDefault()
    dispatch(
      addContact({
        name,
        phone,
        email,
        priority
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Title>Novo Contato</Title>
      <Form onSubmit={addContacts}>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="None Completo"
        />
        <Input
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
          placeholder="(00) 00000-0000"
        />
        <Input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          placeholder="email@example.com"
        />
        <Options>
          <p>Prioridade</p>
          {Object.values(enums.Priority).map((priority) => (
            <Option key={priority}>
              <input
                value={priority}
                name="priority"
                type="radio"
                onChange={(e) => setPriority(e.target.value as enums.Priority)}
                id={priority}
                defaultChecked={priority === enums.Priority.NORMAL}
              />
              <label htmlFor={priority}>{priority}</label>
            </Option>
          ))}
        </Options>

        <ButtonSave>Cadastrar</ButtonSave>
      </Form>
    </MainContainer>
  )
}
