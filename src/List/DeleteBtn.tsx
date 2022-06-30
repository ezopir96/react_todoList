import React from 'react'
import Styled from 'styled-components'

const DelBtn: any = Styled.button<any>`
  height: 100%;
  width: 3.125rem;
  background-color: rgb(172, 19, 19);
  border: none;
  cursor: pointer;
  color: white;
  &:active {
    background-color: pink;
  }
`
class DeleteBtn extends React.Component {
  render () {
    return (
      <>
        <DelBtn className="del-btn">X</DelBtn>
      </>
    )
  }
}

export default DeleteBtn
