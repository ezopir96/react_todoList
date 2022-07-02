import React from 'react'
import Styled from 'styled-components'
import store from '../store'
import actions from '../store/module/todolist/actions'

type PropsType = {
  $btnId: string
  onClick: any
}

interface DeleteBtn {
  props: PropsType
}

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
class DeleteBtn extends React.Component<any> {
  handleDelete (e: any) {
    // console.log(e.target.getAttribute('id'))
    store.dispatch(actions.deleteOne(e.target.getAttribute('id')))
  }
  render () {
    const { $btnId } = this.props;
    return (
      <>
        <DelBtn className="del-btn" id={ $btnId } onClick={ this.handleDelete }>X</DelBtn>
      </>
    )
  }
}

export default DeleteBtn
