import Styled from 'styled-components'
import React from 'react'
import style from './CheckOne.module.css'

// 给 Sate 定义一个类型
type StateType = {
  $myId: string
}

type PropsType = {
  $myId: string
}

// 🔥🔥 类组件 CheckBox 中 state 和 props 的类型, 
// 即 React.Component <any, any> 
//🔥🔥  但是 两个 any 会让 ts 类型限制失去意义

interface CheckBox {
  state: StateType
  props: PropsType
}

interface MyCheck {
  $myId: string
}

const CheckLabel: any = Styled.label<any>`
  width: 2.5rem;
  height: 2.5rem;
  display: inline-block;
  line-hight: 1.25rem;
  padding-top: 1.25rem;
`

class CheckBox extends React.Component {
  constructor (props: Object) {
    super(props);
  }
  render () {
    const { $myId } = this.props;
    return (
      <>
        <div>
          <input type="checkbox" id={ $myId } />
          <CheckLabel htmlFor={ $myId }><div className={style.showBox}></div></CheckLabel>
        </div>
      </>
    )
  }
}

export default CheckBox
