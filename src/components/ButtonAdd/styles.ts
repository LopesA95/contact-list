import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Circle = styled(Link)`
  height: 64px;
  width: 64px;
  background-color: #44bd32;
  color: #fff;
  position: absolute;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;

  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 40px;
  text-decoration: none;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    bottom: 2px;
    font-size: 40px;
  }
`
