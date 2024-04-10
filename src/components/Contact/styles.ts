import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import * as enums from '../../utils/enums/Contact'
import { Button } from '../../styles'

type TagProps = {
  priority?: enums.Priority
  paramether: 'priority'
}

function returnColorBackground(props: TagProps): string {
  if (props.paramether === 'priority') {
    if (props.priority === enums.Priority.IMPORTANTE) return variaveis.vermelho
  }

  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;

  Label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }

  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  }
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`

export const Tags = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  background-color: ${(props) => returnColorBackground(props)};
  border-radius: 8px;
  margin-right: 8px;
  display: inline-block;
`

export const InfosInput = styled.input`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  border: none;
  background-color: transparent;
`

export const ActionBar = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const ButtonCancel = styled(Button)`
  background-color: ${variaveis.vermelho};
`
