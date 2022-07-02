import Styled from 'styled-components'
import React from 'react'
import './List.css'
import CheckBox from '../components/CheckBox/CheckOne'
import DeleteBtn from './DeleteBtn'
import store from '../store'
import EventBus from '../hooks/bus'

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

  constructor (props: any) {
    super(props);
    this.handleChangeShow = this.handleChangeShow.bind(this)
  }

  state = {
    todos: store.getState().todolist.todos
  }

  clear () {}

  handleDelete () {
    console.log('删除')
  }
  handleChangeShow (type: string) {
    // 事件总线触发事件的处理函数 ⚡⚡⚡
    if (type === 'all') this.setState({
      todos: store.getState().todolist.todos
    })
    else this.setState({
      todos: store.getState().todolist.todos.filter((item: any) => {
        return type === 'finished' ? item.isFinished : !item.isFinished
      })
    })
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
            <DeleteBtn onClick={ this.handleDelete } $btnId={ item.id }></DeleteBtn>
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

    // 绑定事件总线处理函数
    EventBus.on('change-show', this.handleChangeShow)

  }
  componentWillUnmount () {
    this.clear()
  }
}

export default List
