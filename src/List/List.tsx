import Styled from 'styled-components'
import React from 'react'
import './List.css'
import CheckBox from '../components/CheckBox/CheckOne'
import DeleteBtn from './DeleteBtn'

const TodoLi: any = Styled.li<any>`
  height: 3.125rem;
  width: 29.75rem;
  background-color: #eee;
  list-style: none;
  display: flex;
  align-items: center;
`



class List extends React.Component {
  render () {
    return (
      <>
        <TodoLi>
        <CheckBox $myId={'sel'}></CheckBox>
        TTSVVA
        <DeleteBtn></DeleteBtn>
        </TodoLi>
      </>
    )
  }
}

export default List
