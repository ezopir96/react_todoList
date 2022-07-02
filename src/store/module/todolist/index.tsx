import { CREATE_TODOITEM_TYPE, DELETE_TODOITEM_TYPE, SELALL_TODOITEM_TYPE, TOGGLE_TODOITEM_TYPE } from './types'
import _ from 'lodash'
// 下载包要下载 @types/lodash 作为 ts 引入使用

const initialState = {
  todos: [{ id: '1', content: 'aaaa', isFinished: false }, { id: '2', content: 'FNIJOPA', isFinished: true }]
}

const reducer = (prevState = initialState, action: any) => {
  if (!action.type.startsWith('todolist/')) return prevState
  // console.log('actions pass | ', action)
  const state: any = _.cloneDeep(prevState)
  switch (action.type) {
    case CREATE_TODOITEM_TYPE:
      state.todos.push(action.payload)
      // 🔥🔥🔥类型“any”的参数不能赋给类型“never”的参数
      break;
    case TOGGLE_TODOITEM_TYPE:
      const { checkState, id } = action.payload
      state.todos.forEach((item: any) => {
        if (item.id === id) item.isFinished = checkState
      })
      break;
    case SELALL_TODOITEM_TYPE:
      state.todos.forEach((item: any) => {
        item.isFinished = !action.payload
      })
      break;
    case DELETE_TODOITEM_TYPE:
      state.todos = _.cloneDeep(prevState.todos.filter((item: any) => {
        return item.id !== action.payload
      }))
      break;
    default:
      break;
  }
  return state
}

export default reducer
