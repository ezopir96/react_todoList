import React from "react";
import Styled from 'styled-components'
import CheckBox from '../components/CheckBox/CheckOne'
import style from './index.module.css'
import store from '../store'
import { nanoid } from 'nanoid'

const Stat: any = Styled.button<any>`
  border-radius: 0;
  height: 3.125rem;
  padding: .625rem;
  font-weight: bolder;
  font-size: 1rem;
  border-color: #666;
`

const Div: any = Styled.div<any>`
  display: flex;
  height: 3.125rem;
  width: 29.75rem;
  background-color: aliceblue;
`



class Bottom extends React.Component {
  state = {
    todos: store.getState().todolist.todos
  }
  render () {
    const { todos } = this.state
    return (
      <>
      <Div className={ style['bottom-container']}>
        <CheckBox $myId={'selAll'} key={nanoid()} $index="0" $checked={ todos.every((item: any) => {
          return !item.isFinished
        }) }></CheckBox>
        <p>{todos.every((item: any) => {
              return !item.isFinished
            }) + '' }aaaa</p>
        <Stat className={ style.showAll } onClick={(e: any) => {
          console.log(e)
        }}>All</Stat>
        <Stat>Done</Stat>
        <Stat>Undone</Stat>
      </Div>
      </>
    )
  }
}

export default Bottom
