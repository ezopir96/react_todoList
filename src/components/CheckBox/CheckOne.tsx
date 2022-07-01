import Styled from 'styled-components'
import React from 'react'
import style from './CheckOne.module.css'
import actions from '../../store/module/todolist/actions'
import store from '../../store'

// 给 Sate 定义一个类型
type StateType = {
  $myId: string
}

type PropsType = {
  $myId: string,
  $index: string,
  $checked: boolean
}

// 🔥🔥 类组件 CheckBox 中 state 和 props 的类型, 
// 即 React.Component <any, any> 
//🔥🔥  但是 两个 any 会让 ts 类型限制失去意义

interface CheckBox {
  state: StateType
  props: PropsType
}

const CheckLabel: any = Styled.label<any>`
  width: 2.5rem;
  height: 100%;
  display: inline-block;
`

class CheckBox extends React.Component<any> {
  handleToggle (e: any) {
    const id: string = e.target.getAttribute('id')

    if (id === 'selAll') {
      store.dispatch(actions.changeAll(store.getState().todolist.todos.every((item: any) => {return item.isFinished})))
    } else {
      store.dispatch(actions.toggleItem(e.target.checked, id))
    }
  }
  render () {
    const { $myId, $checked } = this.props;
    return (
      <>
        <div className={style.fbox}>
          <input checked={ $checked } type="checkbox" id={ $myId } onChange={ this.handleToggle }/>
          <CheckLabel htmlFor={ $myId }><div className={style.showBox}></div></CheckLabel>
        </div>
      </>
    )
  }
}

export default CheckBox
