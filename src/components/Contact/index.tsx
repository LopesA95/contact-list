import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'

import { deleteContact, updateContact } from '../../store/reducers/contact'

import ContactsClass from '../../models/Contact'
import { Button, ButtonSave } from '../../styles'

type Props = ContactsClass

const Contacts = ({
  id,
  name: originName,
  phone: phoneOrigin,
  email: emailOrigin,
  priority
}: Props) => {
  const dispatch = useDispatch()
  const [edit, setEdit] = useState(false)
  const [nameInput, setNameInput] = useState('')
  const [phoneInput, setPhoneInput] = useState('')
  const [emailInput, setEmailInput] = useState('')

  useEffect(() => {
    if (originName.length > 0) setNameInput(originName)
  }, [originName])

  useEffect(() => {
    if (phoneOrigin.length > 0) setPhoneInput(phoneOrigin)
  }, [phoneOrigin])

  useEffect(() => {
    if (emailOrigin.length > 0) setEmailInput(emailOrigin)
  }, [emailOrigin])

  function handleCancelEdit() {
    setEdit(false)
    setNameInput(originName)
    setPhoneInput(phoneOrigin)
    setEmailInput(emailOrigin)
  }

  return (
    <S.Card>
      <label>
        <S.Title>{nameInput}</S.Title>
      </label>
      <S.Tags paramether="priority" priority={priority}>
        {priority}
      </S.Tags>
      <S.InfosInput
        disabled={!edit}
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
      />
      <S.InfosInput
        disabled={!edit}
        value={phoneInput}
        onChange={(e) => setPhoneInput(e.target.value)}
      />
      <S.InfosInput
        disabled={!edit}
        value={emailInput}
        onChange={(e) => setEmailInput(e.target.value)}
      />

      <S.ActionBar>
        {edit ? (
          <>
            <ButtonSave
              type="button"
              onClick={() => {
                dispatch(
                  updateContact({
                    id,
                    name: nameInput,
                    phone: phoneInput,
                    email: emailInput,
                    priority
                  })
                )
                setEdit(false)
              }}
            >
              Salvar
            </ButtonSave>
            <S.ButtonCancel onClick={handleCancelEdit}>Cancelar</S.ButtonCancel>
          </>
        ) : (
          <>
            <Button onClick={() => setEdit(true)}>Editar</Button>
            <S.ButtonCancel
              onClick={() => {
                dispatch(deleteContact(id))
              }}
            >
              Excluir
            </S.ButtonCancel>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Contacts
