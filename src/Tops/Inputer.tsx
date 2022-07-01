import React from 'react'
import Styled from 'styled-components'
import Button from './Buttons'
// ⭐⭐⭐ 使用绝对路径标识符
import store from '../store'
import actions from '../store/module/todolist/actions'

const Inputs = Styled.input<any>`
  width: 25rem;
  height: 3.125rem;
  background-color: #eee;
  padding-left: 0.625rem;
  border-radius: 0;
  outline: none;
  border: none;
  font-size: 1.5rem;
`

class Inputer extends React.Component {
  state = {
    todos: store.getState().todolist.todos
  }
  handleAdd = (e: any) => {
    const content:Element | null = document.querySelector('#inputContent')
    store.dispatch(actions.createTodoItem(content && (content.tagName === 'INPUT') ? (content as HTMLInputElement).value : ''));
    if (content && (content.tagName === 'INPUT')) (content as HTMLInputElement).value = ''
  }
  constructor (props: Object) {
    super(props)
  }

  render () {
    return (
      <>
      <div className="inputer_container">
        <Inputs id="inputContent" type="text"></Inputs>
        <Button onClick={ this.handleAdd }>ADD</Button>
      </div>
      </>
    )
  }
}

export default Inputer
