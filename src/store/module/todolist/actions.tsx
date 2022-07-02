import { CREATE_TODOITEM_TYPE, DELETE_TODOITEM_TYPE, TOGGLE_TODOITEM_TYPE, SELALL_TODOITEM_TYPE } from './types'
import { nanoid } from 'nanoid'

const actions = {
  createTodoItem (content: string) {
    const item = { id: nanoid(), content, isFinished: false }
    // console.log(item)
    return { type: CREATE_TODOITEM_TYPE, payload: item }  // 💧💧💧THis is payload。
  },
  toggleItem (checkState: boolean, id: string) {
    // console.log(checkState, id)
    return { type: TOGGLE_TODOITEM_TYPE, payload: { checkState, id } }
  },
  changeAll (checkState: boolean) {
    return { type: SELALL_TODOITEM_TYPE, payload: checkState }
  },
  deleteOne (id: string) {
    return { type: DELETE_TODOITEM_TYPE, payload: id }
  }
}

export default actions
