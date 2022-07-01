import Styled from 'styled-components'
import React from 'react'
import './List.css'
import CheckBox from '../components/CheckBox/CheckOne'
import DeleteBtn from './DeleteBtn'
import store from '../store'

const TodoLi: any = Styled.li<any>`
  height: 3.125rem;
  width: 29.75rem;
  background-color: #eee;
  list-style: none;
  display: flex;
  align-items: center;
`

const Contents: any = Styled.p<any>`
  text-decoration: ${ props => 
    props.state ? 'line-through' : 'none'
  };
  color: ${ props => 
    props.state ? '#999' : ''
  };
`



class List extends React.Component<any> {
  state = {
    todos: store.getState().todolist.todos
  }

  clear () {}

  handleDelete () {
    console.log('删除')
  }

  render () {
    const { todos } = this.state
    return (
      <>
        {
          todos.map((item: any, index: number) => {
            return <TodoLi
              key={ item.id }>
            <CheckBox
              $myId={ item.id }
              $index={ index + '' }
              $checked={ item.isFinished }
            ></CheckBox>
            <Contents state={ item.isFinished } className="list-content">{ item.content }</Contents>
            <DeleteBtn onClick={ this.handleDelete }></DeleteBtn>
            </TodoLi>
          })
        }
      </>
    )
  }
  componentDidMount () {
    this.clear = store.subscribe(() => {
      this.setState({ todos: store.getState().todolist.todos })
    })
  }
  componentWillUnmount () {
    this.clear()
  }
}

export default List
