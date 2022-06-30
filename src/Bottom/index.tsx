import React from "react";
import Styled from 'styled-components'
import CheckBox from '../components/CheckBox/CheckOne'
import style from './index.module.css'

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
  render () {
    return (
      <>
      <Div className={ style['bottom-container']}>
        <CheckBox $myId={'selAll'}></CheckBox>
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
